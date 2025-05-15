# Práctica 2: TypeORM con PostgreSQL

## Descripción
Implementación de TypeORM con PostgreSQL para un módulo de gestión de presentaciones académicas.

## Requisitos
- Node.js
- PostgreSQL
- Docker (Se trato de implemetar pero hubo fallos)

## Instalación
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Configurar PostgreSQL (variables en data-source.ts)
4. Ejecutar la aplicación: `npm run dev` o `npx ts-node src/app.ts`

## Entidades
- Usuario: Estudiantes y docentes del sistema
- Presentación: Documentos presentados por los estudiantes
- Slide: Diapositivas de cada presentación
- Tema: Categorías temáticas
- Calificación: Evaluaciones de los docentes

## Funcionalidades
- CRUD completo para todas las entidades
- Relaciones complejas entre entidades
- Seeds para datos de prueba

## Autor
Anthony Mejia