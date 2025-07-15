# WebSocket CRUD - NestJS

API en tiempo real con WebSockets para 3 entidades: usuarios, presentaciones y slides.

## 🚀 Instalación

```bash
npm install
npm run start:dev
```

## 🔌 Conexión WebSocket

URL: `ws://localhost:3000`

## 📨 Eventos disponibles

### Usuarios
```json
// Crear
{"event": "crearUsuario", "data": {"nombre": "Juan", "correo": "juan@email.com", "rol": "estudiante"}}

// Listar
{"event": "listarUsuarios", "data": {}}

// Obtener por ID
{"event": "obtenerUsuario", "data": {"id": 1}}

// Actualizar
{"event": "actualizarUsuario", "data": {"id": 1, "updateUsuarioDto": {"nombre": "Juan Pérez"}}}

// Eliminar
{"event": "eliminarUsuario", "data": {"id": 1}}
```

### Presentaciones
```json
// Crear
{"event": "crearPresentacion", "data": {"titulo": "Mi Presentación", "descripcion": "Descripción"}}

// Listar
{"event": "listarPresentaciones", "data": {}}
```

### Slides
```json
// Crear
{"event": "crearSlide", "data": {"titulo": "Slide 1", "contenido": "Contenido del slide"}}

// Listar
{"event": "listarSlides", "data": {}}
```

## 🧪 Pruebas

1. **Postman**: Crear WebSocket Request a `ws://localhost:3000`
2. **Colección**: Importar `postman-websocket-collection.json`
3. Enviar eventos JSON y verificar respuestas en tiempo real

## � Base de datos

SQLite (`app.db`) - Se crea automáticamente

---

**Desarrollado por**: [Tu Nombre]  
**Fecha**: Julio 2025  
**Curso**: Aplicación para el Servidor Web - Práctica 3

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
