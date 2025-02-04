import { DataSource } from "typeorm";
import { ProductModel } from "../modules/product/product.entity"; // Example entity

export const AppDataSource = new DataSource({
  type: "mysql", // Database type
  host: process.env.DB_HOST || "localhost", // Database host
  port: parseInt(process.env.DB_PORT || "3306"), // Database port
  username: process.env.DB_USER || "root", // Database username
  password: process.env.DB_PASSWORD || "", // Database password
  database: process.env.DB_NAME || "test", // Database name
  synchronize: true, // Automatically synchronize database schema (for development only)
  logging: true, // Enable logging
  entities: [User, Product], // Add your entities here
  migrations: [], // Add migrations if needed
  subscribers: [], // Add subscribers if needed
});
