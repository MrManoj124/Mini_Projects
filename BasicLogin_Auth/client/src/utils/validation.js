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

//Name validation
export const validateName = (name) => {
    return name.length >= 2 && name.length <= 50;
};

//Check if passwords match
export const validatePasswordMatch = (password, confirmPassword) => {
    return password === confirmPassword;
};

//Sanitize input to prevent XSS attacks
export const sanitizeInput = (input) => {
    return input.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

//Debounce function to limit the rate of function execution
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later =() => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};