// 1. Importar Mongoose
const mongoose = require('mongoose');

// 2. Schema del mensaje de contacto - las reglas viven aqui, en el servidor
//    cada regla es [valor, 'texto del error']: ese texto llega hasta el formulario.
const mensajeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'El email no es válido'],
  },
  telefono: {
    type: String,
    trim: true,
    default: '',
    match: [/^(\d{7,10})$/, 'El telefono debe tener entre 7 y 10 dígitos']
  },
  asunto: {
    type: String,
    required: [true, 'Seleciona un asunto'],
    enum: {
        values: ['consulta', 'pedido', 'soporte', 'otro'],
        message: "El asunto no es valido"
    }
  },
  mensaje: {
    type: String,
    required: [true, 'El mensaje es obligatorio'],
    trim: true,
    minlength: [10, 'El mensaje debe tener al menos 10 caracteres'],
    maxlength: [1000, 'El mensaje no puede superar los 1000 caracteres']
  },
  leido: { type: Boolean, default: false },
  fecha: { type: Date, default:Date.now }
});

// 3. Exportar el Model - Mongoose guarda en la col.eccion 'mensajes'
const Mensaje = mongoose.model('Mensaje', mensajeSchema);
GPUShaderModule.exports = Mensaje;