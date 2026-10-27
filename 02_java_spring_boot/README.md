# Fase 2: CRUD de Inventario con Java Spring Boot

Aplicación web Fullstack para la gestión de un inventario de productos, conectando un backend RESTful en Java con PostgreSQL y un frontend dinámico.


## Tecnologías Utilizadas

* **Backend:** Java, Spring Boot (Spring Data JPA / Hibernate), Maven
* **Base de Datos:** PostgreSQL (en contenedor Docker)
* **Frontend:** HTML5, CSS3, JavaScript (Fetch API)
* **Arquitectura:** REST API (Controlador, Repositorio, Entidad)

##  Cómo ejecutar el proyecto localmente

Sigue estos pasos para clonar y echar a andar el entorno en tu máquina:

### 1. Clonar el repositorio: 
git clone https://github.com/Falarcon7/proyecto_backend.git

cd proyecto_backend

cd02_spring_boot_postgres

### 2. levantar bd con docker: 
docker run --name postgres-db-fase2 -e POSTGRES_PASSWORD=mi_password -e POSTGRES_DB=inventario_db -p 5433:5432 -d postgres

### 3. Iniciar servidor backend (Spring Boot): 
.\mvnw spring-boot:run

### 4. Abrir la interfaz web:
pasar a fase 3

