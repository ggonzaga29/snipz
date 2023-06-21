import { Request, Response, NextFunction } from 'express';
import * as EmailValidator from 'email-validator';
import bcrypt from 'bcrypt';

import { User } from '../types';

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
			return res.status(404).json({
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

			delete user.password;
			req.session.user = user;
			req.session.save(() => {
				res.status(200).json(req.session.user);
			});
		});
	} catch (err) {
		next(err);
	}
};

export const register = async (req: Request, res: Response) => {
	const { email, username, password, confirmPassword } = req.body;

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

	if (password !== confirmPassword) {
		return res.status(400).json({
			message: 'Passwords must be the same',
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

export const logout = (req: Request, res: Response) => {
	try {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} catch (err: unknown) {
		console.log(err);
		res.status(500).end();
	}
};

export const getSession = (req: Request, res: Response) => {
	try {
		if (req.session.user) {
			res.status(200).json(req.session.user);
		} else {
			res.status(300).json({
				message: "no session"
			});
		}
	} catch (err: unknown) {
		console.log(err);
		res.status(500).end();
	}
};
