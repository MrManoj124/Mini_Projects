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

        try{
            const data = await requestPasswordReset(email);

            if(data.success){
                setMessage('Password reset link has been sent to your email!');
                setEmailSent(true);
            }
            else{
                setError(data.message || 'Failed to send reset email');
            }
        }catch{
            setError('Error connecting to server');
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-title">Forgot Password?</h1>
                    <p className="auth-subtitle">
                        {emailSent ? 'Check your email for reset instructions'
                        : 'Enter your email to receive a password reset link'}
                    </p>
                </div>

                {!emailSent ? (
                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                                <input type="email" name="email" value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className={`form-input ${error ? 'input-error' : ''}`}
                                placeholder="Enter your email"/>
                                {error && <span className="error-text">{error}</span>}
                           </div>
                           {message && (
                            <div className="message message-success">
                                {message}
                            </div>
                           )}
                           <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Reset Link'}
                           </button>
                    </form>
                ) : (
                    <div className="success-container">
                        <div className="success-icon">✓</div>
                        <p className="success-message">
                            We've sent a password reset link to <strong>{email}</strong>
                        </p>
                        <p className="info-text">
                            Please check your email and click the link to reset your password.
                            The link will expire in 1 hour.
                        </p>
                    </div>
                )}

                
         
        </div>
    );
}