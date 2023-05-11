function validar() {
    const nameField = document.getElementById("nombre");
    const emailField = document.getElementById("correo");
    const phoneField = document.getElementById("telefono");
  
    const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%]+.com$/;
    const phoneRegex = /^9\d{8}$/;
  
    const showError = (message) => {
      alert(message);
    };
  
    if (!nameRegex.test(nameField.value)) {
      showError("Por favor ingresa un nombre válido");
      return;
    }
  
    if (!emailRegex.test(emailField.value)) {
      showError("Por favor ingresa un correo válido");
      return;
    }
  
    if (!phoneRegex.test(phoneField.value)) {
      showError("Por favor ingresa un número válido");
      return;
    }

    alert('¡Formulario enviado correctamente!')
      
  }
  