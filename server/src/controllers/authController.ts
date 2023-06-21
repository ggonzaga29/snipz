import { Request, Response } from 'express';
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';

import { query } from '../utils/db';

const SALT_ROUNDS = 10;

interface User {
	id: number,
	email: string,
	username: string,
	password: string
}

export const login = async (req: Request, res: Response) => {
	const { email, username, password } = req.body;

	// check if user exists
	const userQuery = await query(
		`SELECT * FROM "user" WHERE email=$1 OR username=$2`,
		[email, username]
	);
	// if not return error
	if (userQuery.rowCount < 1) {
		return res.status(400).json({
			message: 'User does not exist.',
		});
	}

	const user = userQuery.rows[0];

	// if yes check if password matches
	bcrypt.compare(password, user.password, (err, result) => {
		if (err) {
			return res.status(500).json({
				message: 'An error occurred while comparing passwords',
			});
		}

		if (!result) {
			return res.status(401).json({
				message: 'Invalid email or password',
			});
		}

		return res.json({
			id: user.id,
			email: user.email,
			username: user.username,
		});
	});
};

export const register = async (req: Request, res: Response) => {
	const { email, username, password } = req.body;

	// credentials validation (email, username, password)
	if (!EmailValidator.validate(email)) {
		return res.status(400).json({
			message: 'Invalid email',
		});
	}

	if (username.length < 3) {
		return res.status(400).json({
			message: 'Username must be at least 3 characters long',
		});
	}

	if (password.length < 8) {
		return res.status(400).json({
			message: 'Password must be at least 8 characters long',
		});
	}
	// if not valid return 400

	// check if user exists
	const userCheck = await query(
		`SELECT * FROM "user" WHERE email = $1 OR username = $2`,
		[email, username],
		true
	);
	if (userCheck.rowCount > 0) {
		return res.status(400).json({
			message: 'User already exists',
		});
	}

	// if no create user
	const salt = bcrypt.genSaltSync(SALT_ROUNDS);
	const hash = bcrypt.hashSync(password, salt);

	const result = await query(
		`INSERT INTO "user" (email, username, password) VALUES ($1, $2, $3) RETURNING id`,
		[email, username, hash],
		true
	);
	res.json(result);
};

export const logout = (req: Request, res: Response) => {};
