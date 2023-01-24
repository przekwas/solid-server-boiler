import { createPool } from 'mysql';
import config from '../config';
import type { PoolConnection } from 'mysql';

const state = {
    pool: null
}

export function get(): PoolConnection {
    return state.pool;
}

export default async function () {
    state.pool = createPool(config.mysql);
}