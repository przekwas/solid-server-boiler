import { Router } from 'express';
import { join_us } from '../../db/schemas';

export default function (app: Router) {
	const route = Router();
	app.use('/users', route);

	route.get('/', async (req, res, next) => {
		try {
			const results = await join_us.users.all();
			res.json(results);
		} catch (error) {
			next(error);
		}
	});
}