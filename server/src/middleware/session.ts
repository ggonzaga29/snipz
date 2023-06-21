import connectPgSimple from 'connect-pg-simple';
import expressSession from 'express-session';
import { pool } from '../utils/db';
import { User } from '../types';

const pgSession = connectPgSimple(expressSession);

declare module 'express-session' {
	interface SessionData {
		user: User;
	}
}

const session = expressSession({
	store: new pgSession({
		pool,
		// tableName : 'user_sessions'
		createTableIfMissing: true,
	}),
	secret: '5eb63bbbe01eeed093cb22bb8f5acdc3',
	saveUninitialized: false,
	name: 'snipz',
	proxy: true,
	resave: false,
	cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
});

export default session;
