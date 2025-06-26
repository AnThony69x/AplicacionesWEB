## Ejemplos de curl para los 15 endpoints (5 por cada entidad)

---

### **Usuarios**
```bash
# 1. Crear usuario
curl -X POST http://localhost:3000/api/v1/usuarios -H "Content-Type: application/json" -d '{"nombre":"Tony","correo":"tony@mail.com","password":"123456","rol":"admin"}'

# 2. Obtener todos los usuarios
curl http://localhost:3000/api/v1/usuarios

# 3. Obtener usuario por id
curl http://localhost:3000/api/v1/usuarios/1

# 4. Actualizar usuario
curl -X PATCH http://localhost:3000/api/v1/usuarios/1 -H "Content-Type: application/json" -d '{"nombre":"Tony Actualizado"}'

# 5. Eliminar usuario
curl -X DELETE http://localhost:3000/api/v1/usuarios/1
```

---

### **Presentaciones**
```bash
# 6. Crear presentación
curl -X POST http://localhost:3000/api/v1/presentaciones -H "Content-Type: application/json" -d '{"titulo":"API REST","descripcion":"Presentación de ejemplo","fecha":"2025-06-25","usuarioId":1}'

# 7. Obtener todas las presentaciones
curl http://localhost:3000/api/v1/presentaciones

# 8. Obtener presentación por id
curl http://localhost:3000/api/v1/presentaciones/1

# 9. Actualizar presentación
curl -X PATCH http://localhost:3000/api/v1/presentaciones/1 -H "Content-Type: application/json" -d '{"titulo":"API REST Actualizada"}'

# 10. Eliminar presentación
curl -X DELETE http://localhost:3000/api/v1/presentaciones/1
```

---

### **Slides**
```bash
# 11. Crear slide
curl -X POST http://localhost:3000/api/v1/slides -H "Content-Type: application/json" -d '{"titulo":"Introducción","contenido":"Bienvenidos a la presentación","orden":1,"presentacionId":1}'

# 12. Obtener todos los slides
curl http://localhost:3000/api/v1/slides

# 13. Obtener slide por id
curl http://localhost:3000/api/v1/slides/1

# 14. Actualizar slide
curl -X PATCH http://localhost:3000/api/v1/slides/1 -H "Content-Type: application/json" -d '{"titulo":"Introducción Modificada"}'

# 15. Eliminar slide
curl -X DELETE http://localhost:3000/api/v1/slides/1
```