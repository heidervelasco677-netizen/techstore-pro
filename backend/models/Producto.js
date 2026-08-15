//Importar Mongoose para usar Schema y model
const mongoose = require('mongoose');

// Schema: define los campos de cada documento en Atlas
const productoSchema = new mongoose.Schema({
    id:            {type: Number, required: true },  // número (1, 2, 3...)
    icono:         {type: String, required: true },  // emoji del producto
    nombre:        {type: String, required: true },  // nombre del producto
    descripcion:   {type: String, required: true },  // texto del producto
    precio:        {type: String, required: true },  // "$8.999.000" - texto, no número
    imagen:        {type: String, required: true },  // ruta de la imagen
});

// crea el Model - Mongoose busca la coleccion 'productos' en Atlas
const producto = mongoose.model('producto', productoSchema);

// Exportar para poder usarlo en servcer.js
module.exports = producto;