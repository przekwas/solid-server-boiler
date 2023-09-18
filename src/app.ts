import { CONSTANTS } from './config/constants';
import { expressApp } from './config/expressApp';
import { databaseConnection } from './config/database';

async function startServer() {
	await databaseConnection();
	const app = await expressApp();

	app.listen(CONSTANTS.app.port, () => console.log(`server running on port ${CONSTANTS.app.port}`)).on(
		'error',
		error => {
			console.log(error.message);
			process.exit(1);
		}
	);
}

startServer();
