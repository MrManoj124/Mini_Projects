import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {AuthProvider} from "./context/AuthContext";
import LoginForm from './components/JsFiles/LoginForm ';
import RegisterForm from './components/JsFiles/RegisterForm';
import ForgotPassword from './components/JsFiles/ForgotPassword';
import ResetPassword from './components/JsFiles/ResetPassword';
import VerifyEmail from './components/JsFiles/VerifyEmail';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './components/JsFiles/Navbar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import './App.css';

// Protected Route Component
function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
}


//Public Route Component
function PublicRoute({children}){
    const{isAuthenticated, loading} = useContext(AuthContext);

    if(loading){
        return (
            <div className="loading-screen">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }
    return !isAuthenticated  ? children : <Navigate to="/dashboard"/>;
}


function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

        return (
            <>
            {isAuthenticated && <Navbar />}
            <Routes>
                {/* Public Routes */}
                <Route 
                path="/login" 
                element={
                    <PublicRoute>
                    <LoginForm />
                    </PublicRoute>
                } 
                />
                 <Route 
                    path="/register" 
                    element={
                        <PublicRoute>
                        <RegisterForm />
                        </PublicRoute>
                    } 
                />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/verify-email" element={<VerifyEmail />} />

                    {/* Protected Routes */}
                <Route 
                    path="/dashboard" 
                    element={
                        <ProtectedRoute>
                        <Dashboard />
                        </ProtectedRoute>
                    } 
                    />
                     <Route 
                    path="/profile" 
                    element={
                        <ProtectedRoute>
                        <Profile />
                        </ProtectedRoute>
                    } 
                    />
                    {/* Default Routes */}
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
            </>
        );
    }   

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <AppRoutes />
        </div>
      </AuthProvider>
    </Router>
  );


  export default App;