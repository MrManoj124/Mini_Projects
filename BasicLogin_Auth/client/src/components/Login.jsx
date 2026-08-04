import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {loginUser, googleLogin, facebookLogin} from "../services/api";
import {validateEmail} from '../utils/validation';
import './Login.css';

export default function Login(){
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const [formData , setFormData] = useState({});
    const [message, setMessage] = useState({});
    const [loading, setLoading] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value});

        // Clear error when user types
        if(errors[name]){
            setErrors({...errors, [name] : ''});   
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if(!formData.email) {
            newErrors.email = 'Email is required';
        }
        else if(!validateEmail(formData.email)){
            newErrors.email = 'Invalid email format';
        }

        if(!formData.password){
            newErrors.password = 'Password is required';
        }
        else if(formData.password.length < 6){
            newErrors.password = 'Password must be atleast 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    

    

    


    
 };

 