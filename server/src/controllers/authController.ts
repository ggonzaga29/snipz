import { Request, Response, NextFunction } from 'express';
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';

import { query } from '../utils/db';
import UserModel from '../models/UserModel';

const SALT_ROUNDS = 10;

export const login = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { email, username, password } = req.body;

		// check if user exists
		const user = await UserModel.find({
			email,
			username,
		});

		// if not return error
		if (user === undefined) {
			return res.status(500).json({
				message: 'User does not exist',
			});
		}

		// if yes check if password matches
		bcrypt.compare(password, user.password || '', (err, result) => {
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

			return res.json(user);
		});
	} catch (err) {
		next(err);
	}
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
	const userCheck = await UserModel.find({
		email,
		username,
	});

	if (userCheck !== undefined) {
		return res.status(400).json({
			message: 'User already exists',
		});
	}

	// if no create user
	const salt = bcrypt.genSaltSync(SALT_ROUNDS);
	const hash = bcrypt.hashSync(password, salt);

	const CreatedUser = await UserModel.create(username, email, hash);

	res.json({
		CreatedUser,
	});
};

export const logout = (req: Request, res: Response) => {};
