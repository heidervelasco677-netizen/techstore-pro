// middleware: verifica que el usuario autenticado tenga rol admin
function verificarAdmin(req, res, next) {
    if (!req.usuario) {
        return res.status(401).json({ error: 'sin autenticación' });
    }
    if (req.usuario.rol !== 'admin') {
    return res.status(403).json({ error: 'Acceeso denegado - se requiere rol admin'});
    }
next();
}

module.exports = verificarAdmin;