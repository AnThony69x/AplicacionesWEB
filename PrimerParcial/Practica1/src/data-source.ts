import {user} from "./models/user";
import { view } from "./models/view";
import "reflect-metadata";
import {DataSource} from "typeorm";

// Crear una instancia de DataSource
// Esta instancia se encargará de gestionar la conexión a la base de datos
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: true,
    entities: [user,view],
    migrations: [],
    subscribers: [],  
    }
)