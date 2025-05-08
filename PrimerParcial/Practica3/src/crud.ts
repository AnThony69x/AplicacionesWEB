import { User } from './models/user';
import { AppDataSource } from './data-source';


export const insertarUser = async(nombre: string, email: string) => {
    const user1 = new User();
    user1.nombre = nombre;
    user1.correo = email;
    return await AppDataSource.manager.save(user1);
}