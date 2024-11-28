// Espera a que el DOM se cargue antes de agregar los manejadores de eventos
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y los elementos de mensaje
    const form = document.getElementById('contactForm');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío real del formulario para validarlo

        // Validaciones
        const nombre = document.getElementById('nombre').value.trim();
        const motivo = document.getElementById('motivo').value.trim();
        const correo = document.getElementById('correo').value.trim();

        // Verificar que los campos no estén vacíos
        if (nombre === "" || motivo === "" || correo === "") {
            message.style.display = 'block'; // Mostrar el mensaje de error
            successMessage.style.display = 'none'; // Ocultar el mensaje de éxito
        } else {
            // Si los campos son válidos
            message.style.display = 'none'; // Ocultar el mensaje de error
            successMessage.style.display = 'block'; // Mostrar el mensaje de éxito

            // Simular el envío del formulario (esto solo se muestra para el ejemplo)
            form.reset(); // Limpiar el formulario
        }
    });
});
