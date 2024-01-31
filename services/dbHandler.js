import mysql from "mysql2/promise";
import {User} from "../models/User.js";
import crypto from "crypto";
async function setupDb() {
    const pool = await mysql.createPool({
        host:process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB,
        password:process.env.DB_PASS
    });
    Object.defineProperty(global, '__pool', {
        value: pool,
        writable: true,
        configurable: true,
        enumerable: true,
      });
    console.log("#####  MYSQL Connection Established Successfully #####")
    await createTables();
}



async function createTables() {
    await __pool.query(User);
}


export default setupDb;