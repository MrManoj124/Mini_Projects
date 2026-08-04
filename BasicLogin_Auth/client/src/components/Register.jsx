//Enhanced Register page
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { registerUser, googleLogin, facebookLogin } from '../services/api';
import { validateEmail, checkPasswordStrength } from '../utils/validation';
import './Register.css';

