const formlogin = document.querySelector('#form-login');

formlogin.addEventListener('submit', async function(evento) {
    evento.preventDefault();

    document.querySelector('#error-login-email').textContent    = '';
    document.querySelector('#error-login-password').textContent = '';

    const email   = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value;

    if (!email) {
        document.querySelector('#error-login-email').textContent = 'Ingresa tu correo';
        return;
    }
    if (!password) {
        document.querySelector('#error-login-password').textContent = 'Ingresa tu contraseña';
        return;
    }

    try {
        const respuesta = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body:    JSON.stringify({ email, password: password })
        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {
            document.querySelector('#error-login-email').textContent =
               datos.error || 'Correo o contraseña incorrectos';
            return;
        }

        localStorage.setItem('token', datos.token);
        localStorage.setItem('usuario-nombre', datos.nombre);

        // Llama a la función global para actualizar la barra de navegación de inmediato
      if (typeof actualizarNavSesion === 'function') {
        actualizarNavSesion();
      }

        const exito = document.querySelector('#login-exito');
        exito.innerHTML = '<div style="background:#dcfce7;border:1px solid #bbf7d0;border-radius:12px;padding:20px;">'
      + '<p style="color:#15803d;font-weight:700;">✅ Bienvenido, ' + datos.nombre + '</p>'
      + '<p style="color:#166534;font-size:13px;margin-top:6px;">Token guardado en localStorage</p>'
      + '</div>';
    exito.style.display = 'block';
    formlogin.reset();

    } catch (error) {
        document.querySelector('#error-login-email').textContent =
        'No se pudo conectar. ¿Está corriendo node server.js?';
    }
});