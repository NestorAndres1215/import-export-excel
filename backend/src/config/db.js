import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
);

export const createDatabaseIfNotExists = async () => {

  const sequelizeWithoutDB = new Sequelize("", process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
  });

  await sequelizeWithoutDB.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
  await sequelizeWithoutDB.close();

};

export const connectDB = async () => {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();
    await sequelize.sync();
};