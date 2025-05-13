import { user } from './models/user';
import {insertarUser, viewdelete} from './crud';
import {initDatabase} from './database';
import {obtenerUsers} from './crud';
import{ obtenerUser } from './crud';
import {actualizarUser} from './crud';
import {eliminarUser} from './crud';
import { CrearVista } from './crud';
import { view } from './models/view';

// Importar la función initDatabase desde el archivo database.ts
async function main() {
    await initDatabase()
    const newUser = await insertarUser("walter"," walterG@gmail.com")
    console.log(newUser);
    
    //
    const vista = await CrearVista("vista Reporte de Productos", newUser.id);
    console.log(vista);

    // para obtener todos los usuarios
    const users = await obtenerUsers()
    console.log(users);

    // para obtener un usuario por su id
    const userone = await obtenerUser(newUser.id)
    console.log(userone);

    // para actualizar un usuario
    const userupdated = await actualizarUser(newUser.id, "Juan","Trump")
    console.log(userupdated);
    
    //para eleiminar vistas
    const vistadelete = await viewdelete(vista!.id)
    console.log(vistadelete)


    // para eliminar un usuario
    const userdeleted = await eliminarUser(newUser.id);
    console.log(userdeleted);

}
main()