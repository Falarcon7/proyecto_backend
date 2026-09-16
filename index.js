const express = require('express');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos de PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'mi_password',
    port: 5432,
});

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname))); // <--- ESTO ES LO QUE FALTABA: Lee el index.html y los estilos

// Ruta principal: Envía directamente el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para consultar los productos en formato JSON (para que el HTML los lea)
app.get('/productos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM productos');
        res.json(resultado.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al consultar la base de datos');
    }
});

// Ruta POST para guardar productos nuevos
app.post('/productos', async (req, res) => {
    const { nombre, precio, stock } = req.body;
    try {
        const query = 'INSERT INTO productos (nombre, precio, stock) VALUES ($1, $2, $3) RETURNING *';
        const valores = [nombre, precio, stock];
        const resultado = await pool.query(query, valores);
        res.status(201).json({
            mensaje: '¡Producto creado exitosamente!',
            productoCreado: resultado.rows[0]
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al guardar el producto');
    }
});

// Encendemos el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});