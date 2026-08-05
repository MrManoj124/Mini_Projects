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

    return (
        <div className="dashboard-container">
            <nav className="dashboard-nav">
                <div className="nav-brand">
                    <h2>MyApp</h2>
                </div>
                <div className="nav-menu">
                    <button onClick={() => navigate('/dashboard')} className="nav-link active">
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/profile')} className="nav-link">
                        Profile
                    </button>
                    <button onClick={handleLogout} className="nav-link logout">
                        Logout
                    </button>
                </div>
            </nav>
            
        </div>
    );
}