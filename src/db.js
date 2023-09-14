import {createPool} from 'mysql2/promise'

import { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD } from './config.js'

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'companydb'
})