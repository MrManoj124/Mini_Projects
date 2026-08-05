import {useState, useEffect} from 'react';
import {useNavigate , useSearchParams} from 'react-router-dom';
import {verifyEmail, sendVerificationEmail} from '../services/api';
import './VerifyEmail.css';