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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if(!validateForm()) {
            return;
        }

        setLoading(true);

        try{
            const data = await loginUser(formData);

            if(data.success){
                setMessage('Login Successful!');
                login(data.user, data.token);
                setTimeout(() => navigate('/dashboard'), 1500);
            }
            else{
                setMessage(data.message || 'Login failed');
            }
        }
        catch(error){
            setMessage(error.message || 'Error connecting to server');
        }
        finally{
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        try{
            setLoading(true);
            const data = await googleLogin();
            if(data.success){
                login(data.user, data.token);
                navigate('/dashboard');
            }
        }
        catch(error){
            setMessage('Google login failed');
        }
        finally{
            setLoading(false);
        }
    };

    const handleFacebookLogin = async () => {
        try{
            setLoading(true);
            const data = await facebookLogin();
            if(data.success){
                login(data.user, data.token);
                navigate('/dashboard');
            }
        }
        catch(error){
            setMessage('Facebook login failed');
        }
        finally{
            setLoading(false);
        }
    };


    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1 className="auth-title">Welcome Back</h1>
                    <p className="auth-subtitle">Login to your account</p>
                </div>
                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email"
                            name = "email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`form-input ${errors.email ? 'input-error' : ''}`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`form-input ${errors.password ? 'input-error' : ''}`}
                            placeholder="Enter your password"
                        />
                        {errors.password && <span className="error-text">{errors.password}</span>}
                    </div>

                    {message && (
                        <div className={`message ${message.includes('successful') ? 'message-success' : 'message-error'}`}>
                            {message}
                        </div>
                    )}

                    <button type="submit" className="submit-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                
            </div>
        </div>
    );
 };

 