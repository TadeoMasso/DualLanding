export const validateForm = (formData) => {
    const { email, subject, message } = formData;
    const errors = {};
  
    // Validación del campo de correo electrónico
    if (!email) {
      errors.email = 'Ingrese su correo electrónico';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Ingrese un correo electrónico válido';
    }
  
    // Validación del campo de asunto
    if (!subject) {
      errors.subject = 'Ingrese el asunto';
    }
  
    // Validación del campo de mensaje
    if (!message) {
      errors.message = 'Ingrese su mensaje';
    }
  
    return errors;
  };
  