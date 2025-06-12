// Formulario de contacto: simulación de envío
const form = document.getElementById('contactForm');
const response = document.getElementById('formResponse');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    response.textContent = 'Por favor, rellena todos los campos.';
    response.style.color = 'red';
    return;
  }

  // Aquí podrías agregar envío real con fetch/AJAX, pero para ejemplo solo mostramos mensaje:
  response.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado.`;
  response.style.color = 'green';

  form.reset();
});
