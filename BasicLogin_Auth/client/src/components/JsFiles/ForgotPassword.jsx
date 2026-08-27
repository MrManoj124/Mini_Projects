import {useState} from "react";;
import {useNavigate} from "react-router-dom";
import {requestPasswordReset} from "../../services/api";
import {validateEmail} from '../../utils/validation';
import '../CssFiles/ForgotPassword.css';

export default function ForgotPassword(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');;
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('');
        setMessage('');

        if(!email){
            setError('Email is required');
            return;
        }

        if(!validateEmail(email)){
            setError('Invalid email format');
            return;
        }

        setLoading(true);

        
    };

    
}