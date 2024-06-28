window.onload = function() {
    const form = document.getElementById('form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      
      const email = document.getElementById('email').value.trim();
      const emailConfirm = document.getElementById('email_confirm').value.trim();
      if (email !== emailConfirm) {
        displayError('Los correos electrónicos no coinciden.', document.getElementById('email_confirm'));
        return false;
      } else {
        form.submit(); 
      }
    });
    function displayError(message, targetElement) {
      const errorElement = document.createElement('p');
      errorElement.textContent = message;
      errorElement.style.color = 'rgba(213,69,57,1)'; 
      errorElement.style.marginTop = '5px'; 
      errorElement.style.fontSize = '0.9em'; 
      const confirmEmailRow = targetElement.closest('.contact_line');
      confirmEmailRow.parentNode.insertBefore(errorElement, confirmEmailRow.nextSibling);
      
  };
}
  
  