console.log("\nPractica 1 - Aplicaciones para el Servidor Web");
console.log("--------------------------------------------------\n");

// Objeto presentación
const presentacion = {
    id_presentacion: 1,
    id_usuario: 101,
    titulo: 'Introducción a Node.js',
    archivo_pdf: 'node_intro.pdf',
    fecha_subida: new Date()
};

// Interfaz IPresentacion
interface IPresentacion {
    id_presentacion: number;
    id_usuario: number;
    titulo: string;
    archivo_pdf: string;
    fecha_subida: Date;
}

// Arreglo de presentaciones
const presentaciones: IPresentacion[] = [
    {
        id_presentacion: 1,
        id_usuario: 101,
        titulo: 'Introducción a Node.js',
        archivo_pdf: 'node_intro.pdf',
        fecha_subida: new Date()
    },
    {
        id_presentacion: 2,
        id_usuario: 102,
        titulo: 'Fundamentos de TypeScript',
        archivo_pdf: 'ts_fundamentos.pdf',
        fecha_subida: new Date()
    }
];

// Agregar manualmente presentaciones
presentaciones.push({
    id_presentacion: 3,
    id_usuario: 103,
    titulo: 'Seguridad Web',
    archivo_pdf: 'seguridad_web.pdf',
    fecha_subida: new Date()
});
presentaciones.push(presentacion);

// Función Agregar
function Agregar(p: IPresentacion): void {
    presentaciones.push(p);
}

// Agregar una presentación vacía
const presentacionVacia: IPresentacion = {
    id_presentacion: 4,
    id_usuario: 0,
    titulo: '',
    archivo_pdf: '',
    fecha_subida: new Date()
};
Agregar(presentacionVacia);

// Función Agregar2 con Callback
function Agregar2(p: IPresentacion, callback: (presentacion: IPresentacion) => void): void {
    presentaciones.push(p);
    callback(p);
}

const presentacionCallback: IPresentacion = {
    id_presentacion: 5,
    id_usuario: 0,
    titulo: '',
    archivo_pdf: '',
    fecha_subida: new Date()
};

Agregar2(presentacionCallback, (pres) => {
    console.log(`Presentación agregada: ${pres.titulo}`);
});

// Función Agregar3 con Promise
function Agregar3(p: IPresentacion): Promise<IPresentacion> {
    return new Promise((resolve) => {
        presentaciones.push(p);
        setTimeout(() => {
            resolve(p);
        }, 1000);
    });
}

// Uso de la función Agregar3 con async/await
async function main() {
    try {
        const nuevaPresentacion: IPresentacion = {
            id_presentacion: 6,
            id_usuario: 105,
            titulo: 'Async y Await',
            archivo_pdf: 'async_await.pdf',
            fecha_subida: new Date()
        };
        const resultado = await Agregar3(nuevaPresentacion);
        console.log(`Async/Await: Presentación "${resultado.titulo}" agregada`);
    } catch (ex) {
        console.log("Error al agregar presentación");
    } finally {
        console.log("Proceso finalizado");
    }
}

main();
