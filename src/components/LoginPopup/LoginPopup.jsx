import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'; // ✅ Ensure path is correct

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login"); // Default to login first

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
        
        {/* Title + Close Button */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img 
            onClick={() => setShowLogin(false)} 
            src={assets.cross_icon} 
            alt="Close"
            style={{ cursor: 'pointer' }}
          />
        </div>

        {/* Inputs */}
        <div className="login-popup-inputs">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        {/* Submit Button */}
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Checkbox - only show for Sign Up */}
        {currState === "Sign Up" && (
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

        {/* Switch Link */}
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")} style={{ cursor: 'pointer', color: 'blue' }}>
              Click Here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")} style={{ cursor: 'pointer', color: 'blue' }}>
              Login here
            </span>
          </p>
        )}

      </form>
    </div>
  );
};

export default LoginPopup;
