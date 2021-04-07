import { createConnection } from 'typeorm';

createConnection({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "jj1010aa",
  database: "rentx",
  entities: [
    "./src/modules/**/infra/typeorm/entities/**.ts"
  ],
  migrations: [
    "./src/shared/infra/typeorm/migrations/*.ts"
  ],
  cli: {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
});