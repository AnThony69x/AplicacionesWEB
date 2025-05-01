console.log("\nPractica 1 - Aplicaciones para el Servidor Web");
console.log("--------------------------------------------------\n");

//Interfaces
interface Presentacion {
    id_presentacion: number;
    id_usuario: number;
    titulo: string;
    archivo_pdf: string;
    fecha_sudida: Date;
}

interface ComentarioPresentacion {
    id_comentario: number;
    id_presentacion: number;
    id_usurio: number;
    texto: string;
    fecha: Date;
}

interface ReaccionPresentacion {
    id_reaccion: number;
    id_presentacion: number;
    id_usuario: number;
    tipo: string;
}

//Variables
const curso: string = "Aplicaciones para el servidor wed"
let totalPresentaciones: number = 0;

//Objetos 
const presentacion1: Presentacion = {
    id_presentacion: 1,
    id_usurio: 10,
    titulo: "Induccion a Node.js",
    archivo_pdf: "node_intro.pdf",
    fecha_subida: new Date(),
}