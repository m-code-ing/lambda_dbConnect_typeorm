import { APIGatewayProxyHandler } from "aws-lambda";
import { Client } from "pg";

export const handler: APIGatewayProxyHandler = async (event) => {
  const rdsHost = process.env.RDS_HOST;
  const rdsPort = Number(process.env.RDS_PORT);
  const rdsDbName = process.env.RDS_DB_NAME;
  const rdsUser = process.env.RDS_USER;
  const rdsPassword = process.env.RDS_PASSWORD;

  const client = new Client({
    host: rdsHost,
    port: rdsPort,
    database: rdsDbName,
    user: rdsUser,
    password: rdsPassword,
  });

  await client.connect();
  console.log("Database connection established");

  // Perform database operations here
  // Example: const res = await client.query('SELECT * FROM your_table');
  const res = await client.query("SELECT * FROM students");

  console.log({ res });

  await client.end();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Success",
      data: res.rows,
    }),
  };
};
