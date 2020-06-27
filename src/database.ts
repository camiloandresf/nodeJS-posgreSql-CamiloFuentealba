import {Pool} from 'pg';

export const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    password: 'pgadmin',
    database: 'db_angular',
    port: 5432
});