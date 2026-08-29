import React from "react";
import {useNavigate, useSearchParams} from 'react-router-dom';
import {resetPassword} from '../../services/api';
import {checkPasswordStrength, passwordsMatch} from '../../utils/validation';
import '../CssFiles/ResetPassword.css';




