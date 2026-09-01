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

    return(
        <div className='dashboard-container'>
            <div className='dashboard-content'>
                <div className="welcome-section">
                    <h1>Welcome, {user?.name}!👋</h1>
                    <p>Here's what's happening with your account today.</p>
                </div>
                

                
            </div>
        </div>
    );
}