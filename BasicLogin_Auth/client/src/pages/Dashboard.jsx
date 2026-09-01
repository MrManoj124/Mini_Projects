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
                <div className="dashboard-grid">
                    <div className="dashboard-card">
                        <h3>Profile</h3>
                        <p>Manage your personal information</p>
                        <button onClick={() => navigate('/profile')} className="card-button">
                            View Profile
                        </button>
                    </div>

                    <div className="dashboard-card">
                        <div className="card-icon">⚙️</div>
                        <h3>Settings</h3>
                        <p>Configure your preferences</p>
                        <button className="card-button">Open Settings</button>
                    </div>
                </div>

                
            </div>
        </div>
    );
}