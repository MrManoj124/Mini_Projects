import { useContext } from "react";
import {useNavigate} from 'react-route-dom';
import {AuthContext} from '../context/AuthContext';
import './Dashboard.css';

export default function Dashboard(){
    const navigate = useState();
    const {user, logout} = useContext(AuthContext);

    const handleLogout  = () => {
        logout();
        navigate('/login');
    };

    
}