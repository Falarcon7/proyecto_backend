#  Fase 3: Frontend con Angular

Interfaz de usuario desarrollada en **Angular** que se conecta al backend de Spring Boot para gestionar el inventario de productos en tiempo real.

##  Tecnologías Utilizadas
- **Angular 18+** (TypeScript, Componentes Standalone)
- **HttpClient** (Consumo de API REST)
- **FormsModule** (Gestión de formularios bidireccionales)
- **CSS3 Moderno** (Diseño adaptable y limpio)

##  Funcionalidades
-  **Listado en tiempo real** de productos obtenidos desde la API de Java.
-  **Registro de nuevos productos** con validación de campos.
-  **Edición de productos** existentes.
-  **Eliminación de registros** con confirmación.
-  **Manejo de estados visuales** (Carga y errores de conexión con el backend).

##  Cómo Ejecutar la Aplicación
Asegúrate de tener instalado [Node.js](https://nodejs.org/) y Angular CLI.

### 1. Clonar el repositorio: 
git clone https://github.com/Falarcon7/proyecto_backend.git
cd proyecto_backend
cd 03_frontend_angular

### 2. Instala las dependencias:
npm install

### 3. Levanta el servidor de desarrollo
ng serve

### 4. Abre tu navegador en http://localhost:4200 (Asegúrate de tener corriendo previamente la Base de Datos en Docker y el Backend en Spring Boot).
