import React from 'react';
import { useNavigate } from 'react-router-dom';
import errorImage from '../../assets/image.png';
import './ErrorPage.css'

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <div className="error-page">
            <div className="error-content">
                <h1 className="error-title">Page not found</h1>
                <p className="error-subtitle" style={{ marginTop: '8px', color: '#6b7280' }}>
                    Also like my girlfriend — not found (yet).
                </p>
                <div className="error-image-container">
                    <img 
                        src={errorImage} 
                        alt="404 Error - Page Not Found" 
                        className="error-image"
                    />
                </div>
                <button 
                    onClick={handleGoHome}
                    className="home-button"
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;