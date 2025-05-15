import "reflect-metadata";
import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuario";
import { Presentacion } from "../entities/Presentacion";
import { Slide } from "../entities/Slide";
import { Tema } from "../entities/Tema";
import { Calificacion } from "../entities/Calificacion";

async function main() {
  try {
    // Inicializar la conexión
    await AppDataSource.initialize();
    console.log("Conexión establecida con PostgreSQL");
    
    // Limpiar datos existentes (opcional)
    console.log("Limpiando datos existentes...");
    await AppDataSource.query(`DELETE FROM calificacion`);
    await AppDataSource.query(`DELETE FROM slide`);
    await AppDataSource.query(`DELETE FROM presentacion_tema`);
    await AppDataSource.query(`DELETE FROM presentacion`);
    await AppDataSource.query(`DELETE FROM tema`);
    await AppDataSource.query(`DELETE FROM usuario`);
    
    // Crear usuarios (docentes)
    console.log("Creando docentes...");
    const docentes = [];
    for (let i = 1; i <= 3; i++) {
      const docente = new Usuario();
      docente.nombre = `Profesor ${i}`;
      docente.email = `profesor${i}@universidad.edu`;
      docente.password = `password${i}`;
      docente.tipo = "docente";
      await AppDataSource.manager.save(docente);
      docentes.push(docente);
      console.log(`  - Docente creado: ${docente.nombre}`);
    }
    
    // Crear usuarios (estudiantes)
    console.log("Creando estudiantes...");
    const estudiantes = [];
    for (let i = 1; i <= 5; i++) {
      const estudiante = new Usuario();
      estudiante.nombre = `Estudiante ${i}`;
      estudiante.email = `estudiante${i}@universidad.edu`;
      estudiante.password = `password${i}`;
      estudiante.tipo = "estudiante";
      await AppDataSource.manager.save(estudiante);
      estudiantes.push(estudiante);
      console.log(`  - Estudiante creado: ${estudiante.nombre}`);
    }
    
    // Crear temas
    console.log("Creando temas...");
    const temasTitulos = [
      "Inteligencia Artificial",
      "Desarrollo Web",
      "Base de Datos",
      "Seguridad Informática",
      "Cloud Computing"
    ];
    
    const temasDescripciones = [
      "Conceptos y aplicaciones de IA",
      "Tecnologías para el desarrollo web moderno",
      "Gestión y optimización de bases de datos",
      "Protección de sistemas y datos",
      "Servicios y arquitecturas en la nube"
    ];
    
    const temas = [];
    for (let i = 0; i < temasTitulos.length; i++) {
      const tema = new Tema();
      tema.nombre = temasTitulos[i];
      tema.descripcion = temasDescripciones[i];
      await AppDataSource.manager.save(tema);
      temas.push(tema);
      console.log(`  - Tema creado: ${tema.nombre}`);
    }
    
    // Crear presentaciones
    console.log("Creando presentaciones...");
    const presentaciones = [];
    
    for (let estudiante of estudiantes) {
      // Cada estudiante hace 2 presentaciones
      for (let i = 1; i <= 2; i++) {
        const presentacion = new Presentacion();
        presentacion.titulo = `Presentación ${i} de ${estudiante.nombre}`;
        presentacion.descripcion = `Descripción detallada de la presentación ${i} del estudiante ${estudiante.nombre}`;
        presentacion.archivo_pdf = `presentacion_${estudiante.id}_${i}.pdf`;
        presentacion.usuario = estudiante;
        
        // Asignar 1-3 temas aleatorios a cada presentación
        const temasAleatorios: Tema[] = [];
        const numTemas = Math.floor(Math.random() * 3) + 1;
        while (temasAleatorios.length < numTemas) {
          const temaAleatorio = temas[Math.floor(Math.random() * temas.length)];
          if (!temasAleatorios.includes(temaAleatorio)) {
            temasAleatorios.push(temaAleatorio);
          }
        }
        presentacion.temas = temasAleatorios;
        
        await AppDataSource.manager.save(presentacion);
        presentaciones.push(presentacion);
        console.log(`  - Presentación creada: ${presentacion.titulo}`);
      }
    }
    
    // Crear slides para cada presentación
    console.log("Creando slides...");
    for (let presentacion of presentaciones) {
      for (let i = 1; i <= 5; i++) {
        const slide = new Slide();
        slide.numero = i;
        slide.titulo = `Slide ${i}`;
        slide.contenido = `Contenido del slide ${i} de la presentación "${presentacion.titulo}"`;
        
        // Agregar imagen a slides pares
        if (i % 2 === 0) {
          slide.imagen_url = `imagen_slide_${presentacion.id}_${i}.jpg`;
        }
        
        slide.presentacion = presentacion;
        await AppDataSource.manager.save(slide);
      }
      console.log(`  - Creados 5 slides para presentación ID ${presentacion.id}`);
    }
    
    // Crear calificaciones
    console.log("Creando calificaciones...");
    for (let presentacion of presentaciones) {
      // Cada presentación es calificada por 1-2 docentes aleatorios
      const numCalificaciones = Math.floor(Math.random() * 2) + 1;
      
      const docentesAleatorios = [...docentes];
      for (let i = 0; i < numCalificaciones; i++) {
        if (docentesAleatorios.length === 0) break;
        
        const indiceDocente = Math.floor(Math.random() * docentesAleatorios.length);
        const docente = docentesAleatorios.splice(indiceDocente, 1)[0];
        
        const calificacion = new Calificacion();
        calificacion.nota = Math.floor(Math.random() * 5) + 5; // Nota entre 5 y 10
        calificacion.observaciones = `Observaciones del docente ${docente.nombre} sobre la presentación`;
        calificacion.presentacion = presentacion;
        calificacion.docente = docente;
        
        await AppDataSource.manager.save(calificacion);
        console.log(`  - Calificación registrada: ${calificacion.nota} a presentación ID ${presentacion.id}`);
      }
    }
    
    console.log("\n=== RESUMEN DE DATOS GENERADOS ===");
    console.log(`Docentes: ${docentes.length}`);
    console.log(`Estudiantes: ${estudiantes.length}`);
    console.log(`Temas: ${temas.length}`);
    console.log(`Presentaciones: ${presentaciones.length}`);
    console.log(`Slides: ${presentaciones.length * 5}`);
    
    const totalCalificaciones = await AppDataSource.getRepository(Calificacion).count();
    console.log(`Calificaciones: ${totalCalificaciones}`);
    
    console.log("\nLa base de datos ha sido poblada correctamente.");
    
  } catch (error) {
    console.error("Error al ejecutar el seed:", error);
  } finally {
    // Cerrar la conexión
    await AppDataSource.destroy();
  }
}

// Ejecutar el script
main();