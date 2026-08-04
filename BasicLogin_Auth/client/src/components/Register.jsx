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

    
}
