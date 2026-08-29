import React from "react";
import {useNavigate, useSearchParams} from 'react-router-dom';
import {resetPassword} from '../../services/api';
import {checkPasswordStrength, passwordsMatch} from '../../utils/validation';
import '../CssFiles/ResetPassword.css';


export default function ResetPassword() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [formData, setFormData] = useState({
        password : '',
        confirmPassword : ''
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage]=useState({});
    const [loading, setLoading]= useState(false);
    const [passwordStrength, setPasswordStrength]=useState('');
    const [resetSuccess, setResetSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value}=e.target;
        setFormData({...formData, [name] : value });

        if(errors[name]){
            setErrors({...errors, [name]:''});
        }

        if(name === 'password'){
            const strength = checkPasswordStrength(value);
            setPasswordStrength(strength);
        }
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
}

