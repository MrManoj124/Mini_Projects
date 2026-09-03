import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(loaclStorage.setItem('token'));
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    
}