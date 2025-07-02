# API GraphQL - Sistema de Presentaciones

API GraphQL con NestJS para gestionar presentaciones educativas.

## Entidades

- **Usuario**: Gestión de usuarios (id, name, email)
- **Presentación**: Administrar presentaciones (id, title, description)
- **Slide**: Contenido de diapositivas (id, title, content)

## Tecnologías

- NestJS + GraphQL + TypeORM + SQLite + TypeScript

## Instalación

  ### 1. Clonar el repositorio
```bash
git clone https://github.com/AnThony69x/AplicacionesWEB/tree/main/SegundoParcial/Semana11/practica2 
cd practica2
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno
Crear archivo `.env` en la raíz:
```env
DATABASE=db.sqlite
```

### 4. Ejecutar el proyecto
```bash
# Modo desarrollo
npm run start:dev

# Modo producción 
npm run start:prod

# Compilar proyecto
npm run build
```

## Uso

Accede a GraphQL Playground en: `http://localhost:3000/graphql`

### Ejemplos de uso:

**Crear usuario:**
```graphql
mutation {
  createUsuario(createUsuarioInput: {
    name: "Juan Pérez"
    email: "juan@email.com"
  }) {
    id name email
  }
}
```

**Obtener usuarios:**
```graphql
query {
  usuarios { id name email }
}
```

**Crear presentación:**
```graphql
mutation {
  createPresentacion(createPresentacionInput: {
    title: "Mi Presentación"
    description: "Descripción de la presentación"
  }) {
    id title description
  }
}
```

## Operaciones disponibles

Cada entidad tiene operaciones CRUD completas:
- Create, Read, Update, Delete

