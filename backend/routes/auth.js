// 1. Importar dependencias
const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const Usuario = require('../models/Usuaruio');
const router = express.Router();

// 2. POST /api/auth/registro - crear cuenta nueva
router.post('/registro', async (req, res) => {
    try {
        const {nombre, email, password } = req.body;

        // Verificar que el email no exista ya
        const existe = await Usuario.findOne({ email });
        if (existe) return res.status(400).json({ error: 'El email ya esta registrado' });


        // Encriptar la contraseña con 10 rondas de bcrypt
        const hash = await bcrypt.hash(password, 10);

        // Guardar el usuario con la conttraseña encriptada
        const usuario = await Usuario.create({ nombre, email, password: hash });

        res.status(201).json({mensaje: 'Usuario creado correcytamente', id: usuario._id });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 3. POST /api/auth/login - iniciar sesion y recivir token
router.post('/login', async (req, res) => {
    try {
        const {email, password } = req.body;

        // Buscar usuario por email
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(401).json({ error: 'email o contaseña incorrectos' });

        // Comparar la contraseña con el hash guardado en Atlas
        const valida = await bcrypt.compare(password, usuario.password);
        if (!valida) return res.status(401).json({ error: 'Email o contaseña incorrectos' });

        // Crear el token JWT -dura 24 horas
        const token = jwt.sign(
            { id: usuario._id, email: usuario.email },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({ token, nombre: usuario.nombre });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. Exportar el router
module.exports = router;