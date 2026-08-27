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

  const verifyEmailToken = async () => {
    try{
      const data = await verifyEmail(token);

      if(data.success){
        setMessage('✓ Email verified successfully!');
        setVerified(true);
        setTimeout(() => navigate('/login'), 3000);
      }else{
        setMessage(data.message || 'Verification failed');
      }
    }catch(error){
      setMessage('Error verifying email');
    }finally{
      setLoading(false);
    }
  };

  const handleResentEmail = async () => {
    if(!emailFromState){
      setMessage('Email address not found');
      return;
    }

    setResending(true);
    setMessage('');

    try {
      const data = await sendVerificationEmail(emailFromState);

      if (data.success) {
        setMessage('✓ Verification email sent! Please check your inbox.');
      } else {
        setMessage(data.message || 'Failed to send email');
      }
    } catch (error) {
      setMessage('Error sending verification email');
    } finally {
      setResending(false);
    }try{
      const data = await sendVerificationEmail(emailFromState);
    }
  }
}


