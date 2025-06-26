# API RESTful con NestJS, TypeORM y SQLite

## Descripción

Este proyecto es una API REST desarrollada con [NestJS](https://nestjs.com/), utilizando una arquitectura por capas y conexión a base de datos SQLite mediante [TypeORM](https://typeorm.io/).  
La API gestiona tres entidades principales: **Usuarios**, **Presentaciones** y **Slides**, permitiendo operaciones CRUD completas para cada una de ellas.

---

## Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/AnThony69x/AplicacionesWEB/tree/80943c05be073de2679d9cba49014041488cc501/SegundoParcial/Semana10

cd api-servicios
```

2. **Instala las dependencias:**

```bash
npm install
```

---

## Ejecución

```bash
npm run start:dev
```
El servidor estará disponible en: [http://localhost:3000](http://localhost:3000)

---

## Pruebas de la API

Puedes probar los endpoints usando [Postman](https://www.postman.com/) importando las colecciones o mediante los ejemplos de curl.

---

### 1. Colecciones de Postman

- [Colección Usuarios](postman-usuarios.json)
- [Colección Presentaciones](postman-presentaciones.json)
- [Colección Slides](postman-slides.json)

**Importa cada archivo desde Postman:**
1. Abre Postman y haz clic en "Importar".
2. Selecciona el archivo JSON correspondiente.
3. Ejecuta los endpoints.

---

### 2. Ejemplos de pruebas con curl

#### **Usuarios**
```bash
# Crear usuario
curl -X POST http://localhost:3000/api/usuarios -H "Content-Type: application/json" -d '{"nombre":"Tony","correo":"tony@mail.com","password":"123456","rol":"admin"}'

# Obtener todos los usuarios
curl http://localhost:3000/api/usuarios

# Obtener usuario por id
curl http://localhost:3000/api/usuarios/1

# Actualizar usuario
curl -X PATCH http://localhost:3000/api/usuarios/1 -H "Content-Type: application/json" -d '{"nombre":"Tony Actualizado"}'

# Eliminar usuario
curl -X DELETE http://localhost:3000/api/usuarios/1
```

#### **Presentaciones**
```bash
# Crear presentación
curl -X POST http://localhost:3000/api/presentaciones -H "Content-Type: application/json" -d '{"titulo":"API REST","descripcion":"Presentación de ejemplo","fecha":"2025-06-25","usuarioId":1}'

# Obtener todas las presentaciones
curl http://localhost:3000/api/presentaciones

# Obtener presentación por id
curl http://localhost:3000/api/presentaciones/1

# Actualizar presentación
curl -X PATCH http://localhost:3000/api/presentaciones/1 -H "Content-Type: application/json" -d '{"titulo":"API REST Actualizada"}'

# Eliminar presentación
curl -X DELETE http://localhost:3000/api/presentaciones/1
```

#### **Slides**
```bash
# Crear slide
curl -X POST http://localhost:3000/api/slides -H "Content-Type: application/json" -d '{"titulo":"Introducción","contenido":"Bienvenidos a la presentación","orden":1,"presentacionId":1}'

# Obtener todos los slides
curl http://localhost:3000/api/slides

# Obtener slide por id
curl http://localhost:3000/api/slides/1

# Actualizar slide
curl -X PATCH http://localhost:3000/api/slides/1 -H "Content-Type: application/json" -d '{"titulo":"Introducción Modificada"}'

# Eliminar slide
curl -X DELETE http://localhost:3000/api/slides/1
```

---

## Notas

- Puedes modificar los ejemplos de curl según los datos reales que vayas generando.
- Cada entidad tiene 5 endpoints principales: crear, obtener todos, obtener por id, actualizar y eliminar.

---

## Licencia

Proyecto con fines educativos.