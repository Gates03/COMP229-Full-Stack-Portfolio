/**
 * File Name: Navbar.jsx
 * Student's Name: Joshua Gates
 * StudentID: 301469968
 * Date: May 22, 2025
 */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from './Logo';
import "./styles/Navbar.css";

// ===================== Navbar Component =====================
function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    };

    return (
        // ===================== Navbar Structure =====================
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><Logo /></Link> 
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Me</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-user">
                {user ? (
                    <div className="navbar-user-info">
                        <span>Welcome, {user.email}</span>
                        {user.role === 'admin' && <span className="admin-badge">(Admin)</span>}
                        <button 
                            onClick={handleSignOut}
                            className="sign-out-button"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div className="auth-links">
                        <Link to="/signin" className="sign-in-link">
                            Sign In
                        </Link>
                        <Link to="/signup" className="sign-up-link">
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;