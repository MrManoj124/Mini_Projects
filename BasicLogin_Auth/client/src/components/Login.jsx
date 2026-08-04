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

    

    

    

    

    


    
 };

 