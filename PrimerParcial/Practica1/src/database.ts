import {AppDataSource} from "./data-source"
import 'reflect-metadata';



// Función para inicializar la base de datos
// Esta función se encargará de establecer la conexión con la base de datos
export const initDatabase = async () => {
    try {
        // await AppDataSource.initialize();
        await AppDataSource.initialize();
        console.log("Database initialized successfully.");
        return AppDataSource;
    } catch (ex) {
        console.error("Error initializing database:", ex);
        throw ex; // Rethrow the error to be handled by the caller
    }
}
