import { APIGatewayProxyHandler } from "aws-lambda";
import { createConnection, getRepository } from "typeorm";
import { Student } from "./entity/Student";
import { University } from "./entity/University";
import { Connection } from "./entity/Connection";
import { Country } from "./entity/Country";
import { Goal } from "./entity/Goal";
import { Interest } from "./entity/Interest";

// Import your entities here
// Example: import { YourEntity } from './entity/YourEntity';

export const handler: APIGatewayProxyHandler = async (event) => {
  const connectionOptions = {
    type: "postgres" as const, // Update database type if needed
    host: process.env.RDS_HOST,
    port: Number(process.env.RDS_PORT),
    username: process.env.RDS_USER,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    entities: [Student, University, Connection, Country, Goal, Interest], // Include the Student entity in the configuration
    synchronize: true, // Set to 'false' in production
  };

  console.log(connectionOptions);

  const connection = await createConnection(connectionOptions);
  console.log("Database connection established");

  // Perform database operations using TypeORM here
  // Example: const repository = connection.getRepository(YourEntity);
  //          const results = await repository.find();

  // Use QueryBuilder to fetch data from the students table
  const studentRepository = getRepository(Student);
  const students = await studentRepository.find();

  console.log("Fetched students:", students);

  await connection.close();

  return {
    statusCode: 200,
    body: JSON.stringify("Success"),
  };
};
