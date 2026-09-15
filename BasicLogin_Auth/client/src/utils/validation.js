export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePasswordStrength = (password) => {
  if (!password || password.length === 0) return '';

  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength <= 2) return 'Weak';
  if (strength <= 4) return 'Moderate';
  return 'Strong';
};

export const checkPasswordStrength = (password) => {
  const strength = validatePasswordStrength(password);
  return strength === 'Strong' || strength === 'Moderate' || strength === 'Weak' ? strength : '';
};

export const validateName = (name) => {
  return name && name.length >= 2 && name.length <= 50;
};

export const validatePasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const passwordsMatch = (password, confirmPassword) => {
  return validatePasswordMatch(password, confirmPassword);
};

export const sanitizeInput = (input) => {
  return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

export const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};