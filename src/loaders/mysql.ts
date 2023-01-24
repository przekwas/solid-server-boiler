import { createPool } from 'mysql';
import config from '../config';
import type { PoolConnection, Pool } from 'mysql';

const state: { pool: Pool } = {
	pool: null
};

export function get(): Pool {
	return state.pool;
}

export default async function () {
	state.pool = createPool({
		...config.mysql,
		timezone: 'utc',
		dateStrings: ['DATE', 'DATETIME', 'TIMESTAMP']
	});

	state.pool.on('connection', conn => {
		conn.query("SET time_zone='+00:00';", err => {
			if (err) {
				throw err;
			}
		});
	});
}
