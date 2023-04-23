module.exports = {
  type: 'postgres',
  host: process.env.RDS_HOST,
  port: Number(process.env.RDS_PORT),
  username: process.env.RDS_USER,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
  synchronize: true,
  logging: false,
  entities: [
    'src/entity/**/*.{js,ts}'
],
  migrations: [
    'src/migration/**/*.{js,ts}'
  ],
  subscribers: [
    'src/subscriber/**/*.{js,ts}'
  ],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber'
  }
};
