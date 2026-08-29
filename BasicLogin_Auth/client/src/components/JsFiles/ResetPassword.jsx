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
}

