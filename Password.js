import React, { useState } from 'react';
import './PasswordReset.css';  
import Navbar from './Navbar';
import Footer from './Footer';

const PasswordReset = () => {
    const [personalID, setPersonalID] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handlePasswordReset = (e) => {
        e.preventDefault();
        
        const passwordRegex = /^[a-zA-Z0-9]{6,}$/; 
        if (!passwordRegex.test(newPassword)) {
            setError("Password must be at least 6 characters long and contain only letters and numbers.");
            setSuccess("");
            return;
        }

        setSuccess("Password has been reset successfully.");
        setError(""); 
        setPersonalID("");
        setNewPassword("");
    };

    return (
        <div>
        <Navbar />
        <div className="password-reset-container">
            <h1>Reset Your Password</h1>
             <form onSubmit={handlePasswordReset}>
                <label htmlFor="personal-id">Personal ID:</label>
                <input
                    type="text"
                    id="personal-id"
                    placeholder="Enter your Personal ID"
                    value={personalID}
                    onChange={(e) => setPersonalID(e.target.value)}
                    required
                />
                <label htmlFor="new-password">Create New Password:</label>
                <input
                    type="password"
                    id="new-password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
            </form>
        </div>
        <Footer />
        </div>
    );
};

export default PasswordReset;
