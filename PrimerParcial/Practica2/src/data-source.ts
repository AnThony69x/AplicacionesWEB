import "reflect-metadata";
import { DataSource } from "typeorm";
import { Presentacion } from "./entities/Presentacion";
import { Slide } from "./entities/Slide";
import { Usuario } from "./entities/Usuario";
import { Tema } from "./entities/Tema";
import { Calificacion } from "./entities/Calificacion";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres", // Usuario correcto
  password: "password", // Contraseña correcta
  database: "presentaciones_db", // Base de datos correcta
  synchronize: true,
  logging: true,
  entities: [Presentacion, Slide, Usuario, Tema, Calificacion],
  subscribers: [],
  migrations: [],
});