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
        else if(formData.password.length<8){
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        }else if(!passwordsMatch(formData.password, formData.confirmPassword)){
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (formData.password && !checkPasswordStrength(formData.password)) {
            newErrors.password = 'Password is too weak';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setMessage('');

        if(!token){
            setMessage('Invalid or Expired token.Please request a new reset link');
            return;
        }
        if(!validateForm()){
            return;
        }
        setLoading(true);
    }
};
