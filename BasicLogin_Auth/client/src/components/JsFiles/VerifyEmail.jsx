import {useState, useEffect} from 'react';
import {useNavigate , useSearchParams} from 'react-router-dom';
import {verifyEmail, sendVerificationEmail} from '../../services/api';
import './VerifyEmail.css';

export default function VerifyEmail(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const token = searchParams.get('token');
    const emailFromState = location.state?.email;

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [verified, setVerified] = useState(false);
    const [resending, setResending] = useState(false);

    useEffect(() => {
    if (token) {
      verifyEmailToken();
    } else {
      setLoading(false);
    }
  }, [token]);

  
}


