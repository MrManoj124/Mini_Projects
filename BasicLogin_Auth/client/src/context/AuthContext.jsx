import {createContext, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(loaclStorage.setItem('token'));
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Initialize navigate function
    useEffect(() => {
        const initAuth = async () =>{
            const savedToken = localStorage.getItem('token';

                if(savedToken){
                    try{
                        const data = await getUserProfile(savedToken);
                        if(data.success){
                            setUser(data.user);
                            setToken(savedToken);
                            setIsAuthenticated(true);
                        }else{
                            localStorage.removeItem('token');
                            setToken(null);
                            setIsAuthenticated(false);
                        }
                    }catch(error){
                        console.error('Auth Initialization failed', error);
                        localStorage.removeItem('token');
                        setToken(null);
                        setIsAuthenticated(false);
                    }
                }

                setLoading(false);
        };
        initAuth();
    }, []);
    
}