import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/mentors.css';

const Mentors = () => {
  const [isForgotPasswordVisible, setIsForgotPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');

  const toggleForgotPassword = () => {
    setIsForgotPasswordVisible(!isForgotPasswordVisible);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your password recovery logic here using the email state
    console.log('Password recovery submitted:', email);
    // Navigate back to the login form
    setIsForgotPasswordVisible(false);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1 id="title">Mentors Sign In</h1>
        {!isForgotPasswordVisible && (
          <form>
            <div className="input-group">
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
              </div>

              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <p>
                Forgot password{' '}
                <Link to="#" onClick={toggleForgotPassword}>
                  click Here
                </Link>
              </p>
            </div>
            <div className="btn-field">
              <Link to="portal.html" className="action_btn">
                Sign In
              </Link>
              <Link to="create-account.html" className="action_btn">
                Create Account
              </Link>
            </div>
          </form>
        )}
        {isForgotPasswordVisible && (
          <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-field">
                <i className="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
              </div>
              <button type="submit">Recover Password</button>
            </form>
            <p>
              Remember your password?{' '}
              <Link to="#" onClick={toggleForgotPassword}>
                Go back to login
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentors;
