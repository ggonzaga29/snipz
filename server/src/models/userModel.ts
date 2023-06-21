import { query } from '../utils/db';
import { User } from '../types';

export default class UserModel {
	static async create(
		username: string,
		email: string,
		password: string
	): Promise<User> {
		const result = await query(
			`INSERT INTO "user" (username, email, password) VALUES($1, $2, $3) RETURNING id, username, email`,
			[username, email, password]
		);

		const row = result.rows[0];

		return {
			id: row.id,
			username: row.username,
			email: row.email,
		};
	}

	static async find(user: User): Promise<User> {
		const result = await query(
			`SELECT * FROM "user" WHERE id=$1 OR username=$2 OR email=$3`,
			[user.id, user.username, user.email],
			true
		);

		const row = result.rows[0];
		console.log(row);
		
		return row;
	}
}
