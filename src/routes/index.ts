import { Router } from 'express';

import joinUsRouter from './join-us';

export default function () {
    const app = Router();

    joinUsRouter(app);

    return app;
}