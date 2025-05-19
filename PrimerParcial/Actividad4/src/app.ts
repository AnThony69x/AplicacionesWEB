import express from "express";
import { Request, Response } from "express";

const app = express();
app.use(express.json());

interface IUsuario {
    id: number;
    nombre: string;
}

let usuarios: IUsuario[] = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Maria" },
    { id: 3, nombre: "Pedro" },
    { id: 4, nombre: "Ana" },
    { id: 5, nombre: "Luis" }
]
const puerto = 2500;

app.get("/usuarios",(req:Request, res:Response)=>{
    res.json(usuarios);
})

app.post("/usuarios",(req:Request, res:Response)=>{
    const {body} =req
    usuarios.push(body)
    res.status(201).json(body);
})

app.get("/usuarios/:id",(req:Request, res:Response)=>{
    const {id} = req.params
    const usuarioEncontrado = usuarios.find(( ele )=>{ return ele.id === parseInt(id) })
    if(!usuarioEncontrado) 
    {
        res.status(404).json({
            mensaje: "Usuario no encontrado"
        })
    }
    res.status(200).json(usuarioEncontrado);

})

app.patch("/usuarios/:id",(req:Request, res:Response)=>{
    const {id} = req.params
    const { nombre } = req.body

    const usuarioEncontrado = usuarios.find(( ele )=>{ return ele.id === parseInt(id) })
    if(!usuarioEncontrado) 
    {
        res.status(404).json({
            mensaje: "Usuario no encontrado"
        })
        return
    }
    usuarioEncontrado.nombre = nombre
    res.status(200).json(usuarioEncontrado);
})

app.delete("/usuarios/:id",(req:Request, res:Response)=>{
    const {id} = req.params
    const { nombre } = req.body

    const usuarioEncontrado = usuarios.find(( ele )=>{ return ele.id === parseInt(id) })
    if(!usuarioEncontrado) 
    {
        res.status(404).json({
            mensaje: "Usuario no encontrado"
        })
        return
    }
    usuarioEncontrado.nombre = nombre
    usuarios = usuarios.filter((ele) => ele.id !== parseInt(id))
    res.status(200).json({
        mensaje: "Usuario eliminado"
    });
})

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
})