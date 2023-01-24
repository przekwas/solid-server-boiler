import express from 'express';
import config from './config';

async function startServer() {
	const app = express();

	(await import('./loaders')).default({ app });

	app.listen(config.app.port, () => console.log(`server running on port ${config.app.port}`)).on(
		'error',
		error => {
			console.log(error.message);
			process.exit(1);
		}
	);
}

startServer();
