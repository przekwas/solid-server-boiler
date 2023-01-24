import { format } from 'mysql';
import { get } from '../loaders/mysql';
import type { OkPacket } from 'mysql';

export default function <T = OkPacket>(query: string, values?: any) {
	return new Promise<T>((resolve, reject) => {
		const sql = format(query, values);
		console.log(sql);
		get().query(sql, (err, results) => {
			if (err) {
				return reject(err);
			}

			return resolve(results);
		});
	});
}
