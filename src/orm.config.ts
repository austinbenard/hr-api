import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "root",
  "password": "1234",
  "database": "hrms",

  // type: "postgres",
  // url: "postgres://tpacbxqr:sTFyVwry2eqfywi60WOlUYmw9tHlxJ9E@isilo.db.elephantsql.com/tpacbxqr",
  synchronize: false,
  logging: true,
  entities: ["dist/**/*.entity{.ts,.js}"]
} 