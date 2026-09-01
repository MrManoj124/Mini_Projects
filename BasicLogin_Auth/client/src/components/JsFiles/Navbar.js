import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';
import '../CssFiles/Navbar.css'; // Import the CSS file for styling

export default function Navbar(){
    const navigate = useNavigate();
    const {user, logout} =useContext(AuthContext);

    const handleLogout = () => {
        Logout();
        navigate('/login');
    };

    return(
        <nav className='navbar'>
            <div className='nav-conatainer'>
                <div className='nav-logo'>
                    <h2>MyApp</h2>
                </div>
                <div className='nav-menu'>
                    <button onClick={() => navigate('/dashboard')} className='nav-link'>
                        Dashboard
                    </button>
                    <button onClick={() => navigate('/profile')} className='nav-link'>Profile</button>
                    <div className='nav-user'>
                        <span className="user-email">{user?.email}</span>
                        <button onClick={handleLogout} className='nav-link Logout'>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    
}