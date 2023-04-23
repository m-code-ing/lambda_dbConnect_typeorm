"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const pg_1 = require("pg");
const handler = async (event) => {
    const rdsHost = process.env.RDS_HOST;
    const rdsPort = Number(process.env.RDS_PORT);
    const rdsDbName = process.env.RDS_DB_NAME;
    const rdsUser = process.env.RDS_USER;
    const rdsPassword = process.env.RDS_PASSWORD;
    const client = new pg_1.Client({
        host: rdsHost,
        port: rdsPort,
        database: rdsDbName,
        user: rdsUser,
        password: rdsPassword,
    });
    await client.connect();
    // Perform database operations here
    // Example: const res = await client.query('SELECT * FROM your_table');
    const res = await client.query("SELECT * FROM students");
    console.log({ res });
    await client.end();
    return {
        statusCode: 200,
        body: JSON.stringify("Success"),
        res,
    };
};
exports.handler = handler;
