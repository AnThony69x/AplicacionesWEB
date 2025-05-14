import {user} from "./models/user";
import {AppDataSource} from './data-source';
import {view} from "./models/view";

// Funciones CRUD para la entidad User
export const insertarUser = async (nombre: string, correo: string) => {
    const user1 = new user();
    user1.correo = correo;
    user1.nombre = nombre;
    return await AppDataSource.manager.save((user1))
}
// Función para obtener todos los usuarios
export const obtenerUsers = async () => {
    return await AppDataSource.manager.find(user);
}
// Función para obtener un usuario por su ID
export const obtenerUser = async (id: number) => {
    return await AppDataSource.manager.findOne(user, {
        where: { id}
    });
}   

// Funcion para actualizar un usuario
export const actualizarUser = async (id: number, nombre: string, correo: string) => { 
    const user2 = await obtenerUser(id);
    if (user2) {
        user2.correo = correo;
        user2.nombre = nombre;
        return await AppDataSource.manager.save(user2);
    }
    return null;
}
// Función para eliminar un usuario
export const eliminarUser = async (id:number) => {
    const user2 = await obtenerUser(id);
    if (user2) {
        return await AppDataSource.manager.remove(user2);
    }
    return null
}


export const CrearVista = async (vista: string, userId: number) => {
    const user1 = await obtenerUser(userId);
    if (user1) {
        const newview = new view();
        newview.vista = vista;
        newview.user = user1;
    return await AppDataSource.manager.save(newview);
    }
    return null
}

//eliminar vista
export const viewdelete = async (id: number) =>{
    const view1 = await AppDataSource.manager.findOne(view,{where:{id}})
    if (view1){
        return await AppDataSource.manager.remove(view1)
    }
    return null
}