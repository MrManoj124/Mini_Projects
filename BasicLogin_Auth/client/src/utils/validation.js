// Email validation function
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

//Password strength validation function
export const validatePasswordStrength = (password) => {
    if(password.length === 0) return '';

    let strength = 0;

    if(password.length >= 8) strength++;
    if(password.length >= 12)strength++;
    if(/[a-z]/.test(password)) strength++;
    if(/[A-Z]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^A-Za-z0-9]/.test(password)) strength++;

    if(strength <= 2) return 'Weak';
    if(strength <= 4) return 'Moderate';
    return 'Strong';
};

//