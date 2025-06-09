Sistema de Gestión de Entradas - Cine Universitario
Contexto del Negocio
El sistema gestiona un cine universitario que ofrece funciones cinematográficas con tarifas diferenciadas para estudiantes universitarios y público externo. Los usuarios pueden navegar por la cartelera, seleccionar funciones específicas, elegir tipos de entrada y reservar asientos en las salas


Entidades del Dominio
1. Movie (Película)
Descripción: Representa las películas disponibles en la cartelera
Justificación: Es la entidad central del sistema, sin películas no hay servicio
Atributos clave:
Título, descripción, duración
Género, clasificación por edad
URL del poster, estado de disponibilidad

2. Screening (Función/Proyección)
Descripción: Sesión específica de una película en fecha/hora/sala determinada
Justificación: Conecta películas con horarios y salas
Atributos clave:
Referencia a película y sala
Fecha, hora de inicio/fin
Asientos disponibles, estado

3. Theater (Sala)
Descripción: Sala física donde se proyectan las películas
Justificación: Define el espacio físico de proyección
Atributos clave:
Nombre, capacidad total
Distribución de filas y asientos
Estado de disponibilidad

4. Seat (Asiento)
Descripción: Asiento individual dentro de una sala
Justificación: Permite selección específica de ubicaciones
Atributos clave:
Fila, número, tipo (normal/VIP/discapacitado)
Disponibilidad

5. TicketType (Tipo de Entrada)
Descripción: Define tipos de entrada según perfil de usuario
Justificación: Implementa política de precios diferenciados
Atributos clave:
Nombre (Estudiante/Externo/Docente)
Precio, requiere validación

6. Reservation (Reserva)
Descripción: Reserva completa de entradas
Justificación: Nucleo del proceso de compra
Atributos clave:
Referencia a función y tipo de entrada
Monto total, estado
Fechas de creación/expiración

7. ReservationSeat (Asiento Reservado)
Descripción: Asientos específicos en una reserva
Justificación: Mantiene integridad de ocupación
Atributos clave:
Relación reserva-asiento-función

8. CinemaRule (Regla del Cine)
Descripción: Normas de comportamiento en el cine
Justificación: Cumple requerimiento de mostrar reglas
Atributos clave:
Título, descripción, categoría
URL de icono, orden de presentación

Relaciones Clave
Movie → Screening (1:N) - Una película tiene varias funciones

Theater → Seat (1:N) - Una sala contiene múltiples asientos

Screening → Reservation (1:N) - Una función tiene múltiples reservas

TicketType → Reservation (1:N) - Un tipo de entrada en múltiples reservas

Reservation → ReservationSeat (1:N) - Reserva con múltiples asientos