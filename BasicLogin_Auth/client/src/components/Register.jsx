//Enhanced Register page
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { registerUser, googleLogin, facebookLogin } from '../services/api';
import { validateEmail, checkPasswordStrength } from '../utils/validation';
import './Register.css';

export default function Register() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Clear error when user types
        if (errors[name]) {
        setErrors({ ...errors, [name]: '' });
        }

        // Check password strength in real-time
        if (name === 'password') {
        const strength = checkPasswordStrength(value);
        setPasswordStrength(strength);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name) {
        newErrors.name = 'Name is required';
        } else if (formData.name.length < 2) {
        newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email) {
        newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Invalid email format';
        }

        if (!formData.password) {
        newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if (!validateForm()) {
        return;
        }

        setLoading(true);

        try {
        const data = await registerUser({
            name: formData.name,
            email: formData.email,
            password: formData.password
        });

        if (data.success) {
            setMessage('Registration successful! Please verify your email.');
            setTimeout(() => navigate('/verify-email', { state: { email: formData.email } }), 2000);
        } else {
            setMessage(data.message || 'Registration failed');
        }
        } catch (error) {
        setMessage(error.message || 'Error connecting to server');
        } finally {
        setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try {
        setLoading(true);
        const data = await googleLogin();
        if (data.success) {
            login(data.user, data.token);
            navigate('/dashboard');
        }
        } catch (error) {
        setMessage('Google login failed');
        } finally {
        setLoading(false);
        }
    };

    const handleFacebookLogin = async () => {
        try {
        setLoading(true);
        const data = await facebookLogin();
        if (data.success) {
            login(data.user, data.token);
            navigate('/dashboard');
        }
        } catch (error) {
        setMessage('Facebook login failed');
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="auth-container">
        <div className="auth-card">
            <div className="auth-header">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Sign up to get started</p>
            </div>

            
        </div>
        </div>
    );
}
