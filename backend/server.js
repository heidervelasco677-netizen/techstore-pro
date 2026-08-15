// 1. Importar las dependencias
require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const producto = require('./models/producto'); // ← AGREGAR esta linea

//2. crear la aplicacion y definir el puerto
const app = express();
const PORT = process.env.PORT ||   3000;

//3. Activar middLewares
app.use(cors());
app.use(express.json());

//4. conectar a MongoDB Atlas NUEVO en s12
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ conectado a MongoDB Atlas'))
.catch((err) => console.error('❌ Error de conexion:', err));

//5. ruta GET /api/productos - ahora lee de MongoDB Atlas
app.get('/api/productos', async (req, res) => {
    try {
        const productos = await producto.find(); // tare todos los docs de Atlas
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener productos'});
    }
});

//6. Ruta de prueba
app.get('/', (req, res) => {
    res.json({mensaje: 'servidor de techstore pro ✅'});
});

//6. Arrancar el servidor
app.listen(PORT, () => {
    console.log(`servidor en http://localhost:${PORT}`);
});