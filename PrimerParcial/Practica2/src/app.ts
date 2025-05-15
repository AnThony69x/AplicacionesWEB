import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Presentacion } from "./entities/Presentacion";
import { Slide } from "./entities/Slide";
import { Usuario } from "./entities/Usuario";
import { Tema } from "./entities/Tema";
import { Calificacion } from "./entities/Calificacion";

// Importamos los repositorios
import { UsuarioRepository } from "./repositories/UsuarioRepository";
import { PresentacionRepository } from "./repositories/PresentacionRepository";
import { SlideRepository } from "./repositories/SlideRepository";
import { TemaRepository } from "./repositories/TemaRepository";
import { CalificacionRepository } from "./repositories/CalificacionRepository";

// Inicializamos los repositorios
const usuarioRepo = new UsuarioRepository();
const presentacionRepo = new PresentacionRepository();
const slideRepo = new SlideRepository();
const temaRepo = new TemaRepository();
const calificacionRepo = new CalificacionRepository();

// Función principal
async function main() {
  try {
    // Inicializar conexión a la base de datos
    await AppDataSource.initialize();
    console.log("Conexión establecida con PostgreSQL");
    console.log("Base de datos: admin@localhost:5432/presentaciones_db");

    // DEMO DE FUNCIONALIDADES CRUD PARA TODAS LAS ENTIDADES
    
    console.log("\n===== DEMO: CREACIÓN DE REGISTROS =====");
    
    // 1. Crear un usuario (docente)
    const docente = await usuarioRepo.create({
      nombre: "Prof. Juan Pérez",
      email: "juan.perez@universidad.edu",
      password: "clave123",
      tipo: "docente"
    });
    console.log("Docente creado:", docente.nombre);
    
    // 2. Crear un usuario (estudiante)
    const estudiante = await usuarioRepo.create({
      nombre: "María García",
      email: "maria.garcia@universidad.edu",
      password: "clave456",
      tipo: "estudiante"
    });
    console.log("Estudiante creado:", estudiante.nombre);
    
    // 3. Crear temas
    const tema1 = await temaRepo.create({
      nombre: "Inteligencia Artificial",
      descripcion: "Conceptos y aplicaciones de IA"
    });
    
    const tema2 = await temaRepo.create({
      nombre: "Desarrollo Web",
      descripcion: "Tecnologías para el desarrollo de aplicaciones web"
    });
    console.log("Temas creados:", tema1.nombre, "y", tema2.nombre);
    
    // 4. Crear una presentación con temas asociados
    const presentacion = await presentacionRepo.create({
      titulo: "Introducción a TypeORM",
      descripcion: "Una presentación sobre el ORM para TypeScript",
      archivo_pdf: "typeorm_intro.pdf",
      usuario: estudiante,
      temas: [tema1, tema2]
    });
    console.log("Presentación creada:", presentacion.titulo);
    
    // 5. Crear slides para la presentación
    const slides = [];
    for (let i = 1; i <= 3; i++) {
      const slide = await slideRepo.create({
        numero: i,
        titulo: `Slide ${i}`,
        contenido: `Contenido del slide ${i}`,
        imagen_url: i % 2 === 0 ? `imagen${i}.jpg` : undefined,
        presentacion
      });
      slides.push(slide);
    }
    console.log(`${slides.length} slides creados`);
    
    // 6. Crear una calificación
    const calificacion = await calificacionRepo.create({
      nota: 9.5,
      observaciones: "Excelente presentación, muy bien estructurada",
      presentacion,
      docente
    });
    console.log("Calificación registrada:", calificacion.nota);
    
    console.log("\n===== DEMO: CONSULTA DE REGISTROS =====");
    
    // 1. Obtener todos los estudiantes
    const estudiantes = await usuarioRepo.findEstudiantes();
    console.log(`Estudiantes encontrados: ${estudiantes.length}`);
    
    // 2. Obtener presentación con todas sus relaciones
    const presentacionCompleta = await presentacionRepo.findById(presentacion.id);
    console.log("Presentación con relaciones:", {
      titulo: presentacionCompleta?.titulo,
      autor: presentacionCompleta?.usuario.nombre,
      slides: presentacionCompleta?.slides.length,
      temas: presentacionCompleta?.temas.map(t => t.nombre),
      calificaciones: presentacionCompleta?.calificaciones.map(c => c.nota)
    });
    
    // 3. Buscar presentaciones por tema
    const presentacionesPorTema = await presentacionRepo.findByTema(tema1.id);
    console.log(`Presentaciones sobre "${tema1.nombre}": ${presentacionesPorTema.length}`);
    
    // 4. Buscar slides de una presentación
    const slidesPresentacion = await slideRepo.findByPresentacion(presentacion.id);
    console.log(`Slides de la presentación: ${slidesPresentacion.length}`);
    
    console.log("\n===== DEMO: ACTUALIZACIÓN DE REGISTROS =====");
    
    // 1. Actualizar un usuario
    const usuarioActualizado = await usuarioRepo.update(estudiante.id, {
      nombre: "María López García"
    });
    console.log("Usuario actualizado:", usuarioActualizado?.nombre);
    
    // 2. Actualizar una presentación
    const presentacionActualizada = await presentacionRepo.update(presentacion.id, {
      titulo: "TypeORM en la práctica",
      descripcion: "Tutorial completo de TypeORM con ejemplos prácticos"
    });
    console.log("Presentación actualizada:", presentacionActualizada?.titulo);
    
    console.log("\n===== DEMO: ELIMINACIÓN DE REGISTROS =====");
    
    // Creamos un registro temporal para eliminar
    const temaTemp = await temaRepo.create({
      nombre: "Tema Temporal",
      descripcion: "Este tema será eliminado"
    });
    
    // Eliminamos el tema temporal
    const eliminado = await temaRepo.delete(temaTemp.id);
    console.log(`Tema eliminado: ${eliminado ? "Sí" : "No"}`);
    
    console.log("\n===== RESUMEN FINAL =====");
    const usuariosTotal = await usuarioRepo.findAll();
    const presentacionesTotal = await presentacionRepo.findAll();
    const temasTotal = await temaRepo.findAll();
    const slidesTotal = await slideRepo.findAll();
    const calificacionesTotal = await calificacionRepo.findAll();
    
    console.log("Estadísticas de la base de datos:");
    console.log(`- Usuarios: ${usuariosTotal.length}`);
    console.log(`- Presentaciones: ${presentacionesTotal.length}`);
    console.log(`- Temas: ${temasTotal.length}`);
    console.log(`- Slides: ${slidesTotal.length}`);
    console.log(`- Calificaciones: ${calificacionesTotal.length}`);

  } catch (error) {
    console.error("Error en la aplicación:", error);
  } finally {
    // Opcional: cerrar la conexión al finalizar
    // await AppDataSource.destroy();
  }
}

// Ejecutar la función principal
main();