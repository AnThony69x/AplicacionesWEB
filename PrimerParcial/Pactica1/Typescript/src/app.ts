let presentacion: string = "Hola mundo!";
let edad: number = 22; 
console.log("¡Hola mundo!");

const saludo = (apellido: string) => {
    console.log(`Tu apellido es ${apellido}!`)
};

saludo("Mejia");

const saludar = (nombre: string) => {
    console.log(`Hola, ${nombre}!`);
};

saludar("Anthony");

const suma =(a: number, b:number) => {
    const sumado = a + b;
    console.log(`${a} + ${b} = ${sumado}`)
}

suma(2, 3);


// Practica del día 28/04/2025
console.log('\nPractica del dia 28 de abril');

//Objeto student
const student = {
    id: 1234, 
    name: 'Anthony Mejia',
    correo: 'anthony@gmail.com',
    direccion: 'su casa',
};

// Definimos la interfaz Istudent
interface Istudent {
    id: number,
    name: string,
    correo: string,
    direccion: string
}

// Arreglo de estudiantes
const estudiantes: Istudent[] = [
    {
        id: 1234, 
        name: 'Anthony Mejia',
        correo: 'anthony@gmail.com',
        direccion: 'su casa',
    },
    {
        id: 5678, 
        name: 'Carlos Chile',
        correo: 'carlos@gmail.com',
        direccion: 'su otra casa',
    },
];

//Agregar manualmente estudiantes
estudiantes.push({id: 91011, name: 'Juan Perez', correo:'juan@gmail.xom', direccion: 'su casa'});
estudiantes.push(student);

//Funcion Agregar
function Agregar(estudiante: Istudent): void {
    estudiantes.push(estudiante);
} 

//Agregamos estuante vacio
const estudiante1: Istudent = {id:432, name:'', correo:'', direccion:''};
Agregar(estudiante1);

//Funcion Agregar2 con Callback
function Agregar2(parm:Istudent, callback:(estudiate:Istudent) => void): void {
    estudiantes.push(parm);
    callback(parm);
}

const estudianteA2: Istudent = {id:432, name:'', correo:'', direccion:''};

Agregar2(estudianteA2, (estudiante) => {
    console.log(`Estudiante agregado: ${estudiante.name}`);
});

//Funcion Agregar3 con Promise
function Agregar3(parm:Istudent): Promise<Istudent> {
    return new Promise((resolve)=> {
        estudiantes.push(parm);
        setTimeout(()=> {
            resolve(parm);
        }, 
        1000
        )
        resolve(parm);
    },
    )
}

/*
Agregar3(estudiante1).then((estudiante) => {
console.log(student);
})
*/

//Uso de la funcion Agregar3 con async/await
async function main() {
    try{
        await Agregar3(estudiante1)
    }
    catch(ex){

    }
    finally{

    }
}


