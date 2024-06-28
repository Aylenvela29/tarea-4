window.onload = function() {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe automáticamente
      
      const email = document.getElementById('email').value.trim();
      const emailConfirm = document.getElementById('email_confirm').value.trim();
      
      // Verificar que los correos electrónicos coincidan
      if (email !== emailConfirm) {
        displayError('Los correos electrónicos no coinciden.', document.getElementById('email_confirm'));
        return false;
      } else {
        form.submit(); // Envía el formulario si los correos coinciden
      }
    });
  
    // Función para mostrar mensaje de error estilizado
    function displayError(message, targetElement) {
      const errorElement = document.createElement('p');
      errorElement.textContent = message;
      errorElement.style.color = 'rgba(213,69,57,1)'; // Color de fuente
      errorElement.style.marginTop = '5px'; // Espacio superior
      errorElement.style.fontSize = '0.9em'; // Tamaño de fuente menor
      
      // Insertar el mensaje de error debajo del cuadro de confirmar email
      const confirmEmailRow = targetElement.closest('.contact_line');
      confirmEmailRow.parentNode.insertBefore(errorElement, confirmEmailRow.nextSibling);
      
  };
}
  
  