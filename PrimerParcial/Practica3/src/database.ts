import { AppDataSource } from './data-source';
import 'reflect-metadata';

export const iniciar= async () => {
    try{
        await AppDataSource.initialize()
        console.log("Inicilizamos la base de datos")
        return AppDataSource
    }

    catch(ex){
        console.log("Error en la inicilizacion")
        throw(ex)
    }
}