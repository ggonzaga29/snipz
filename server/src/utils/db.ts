import { Pool, QueryResult } from 'pg';

const pool = new Pool({
	// user: process.env.PGUSER,
	// host: process.env.PGHOST,
	// database: process.env.PGDATABASE,
	// password: process.env.PGPASSWORD,
	// port: Number(process.env.PGPORT),

	user: 'postgres',
	host: 'localhost',
	database: 'snipz',
	password: 'root',
	port: 5432,
});

export const query = async (
	text: string,
	params: any[],
	verbose: boolean = false
): Promise<QueryResult> => {
	try {
		// only log query if verbose is true
		let start, duration;

		if (verbose) {
			console.log('Executing query:', text);
			start = Date.now();
		}

		const result = await pool.query(text, params);

		if (verbose && start) {
			duration = Date.now() - start;

			console.log('Executed query', {
				text,
				duration,
				rows: result.rowCount,
			});
		}

		return result;
	} catch (error) {
		console.error('Error executing query', { text, params, error });
		throw error;
	}
};
