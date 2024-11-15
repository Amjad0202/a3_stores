const validateForm = (formElement) => {
  const inputs = formElement.querySelectorAll('input, textarea');
  let isValid = true;

  inputs.forEach(input => {
    if (input.hasAttribute('required') && !input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    }

    if (input.type === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        showError(input, 'Please enter a valid email');
        isValid = false;
      }
    }
  });

  return isValid;
};

const showError = (input, message) => {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  input.parentNode.appendChild(errorDiv);
  
  setTimeout(() => errorDiv.remove(), 3000);
};