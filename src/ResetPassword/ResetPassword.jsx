import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";
import placementLogo from "../assets/placement-recruitment.png";
import resetPasswordImage from "../assets/reset-password.png";
import lockIcon from "../assets/lock.png";
import eyeIcon from "../assets/eye.png";
import googleIcon from "../assets/google.png";
import shieldIcon from "../assets/shield.png";
import backArrow from "../assets/arrowleft.png";
import rightArrow from "../assets/arrowright.png";

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return { text: "Weak", width: "0%", className: "ResetPassword-Strength-Weak" };
    }
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    if (score <= 1) {
      return { text: "Weak", width: "25%", className: "ResetPassword-Strength-Weak" };
    }
    if (score === 2) {
      return { text: "Medium", width: "50%", className: "ResetPassword-Strength-Medium" };
    }
    if (score === 3) {
      return { text: "Good", width: "75%", className: "ResetPassword-Strength-Good" };
    }
    return { text: "Strong", width: "100%", className: "ResetPassword-Strength-Strong" };
  };

  const strength = getPasswordStrength();

  const validatePassword = () => {
    let isValid = true;

    setPasswordError("");
    setConfirmPasswordError("");

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must contain at least 8 characters");
      isValid = false;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least 1 uppercase letter");
      isValid = false;
    } else if (!/[0-9]/.test(password)) {
      setPasswordError("Password must contain at least 1 number");
      isValid = false;
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      setPasswordError("Password must contain at least 1 special character");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleResetPassword = () => {
    if (validatePassword()) {
      navigate("/success");
    }
  };

  return (
    <div className="ResetPassword-Container">
      <section className="ResetPassword-Left-Section">
        <div className="ResetPassword-Brand">
          <img src={placementLogo} alt="Placement and Recruitment" className="ResetPassword-Placement-Logo" />
          <div className="ResetPassword-Brand-Text">
            <h3>Placement & Recruitment Platform</h3>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>
        <div className="ResetPassword-Left-Content">
          <p className="ResetPassword-Small-Title">RESET YOUR PASSWORD</p>
          <h1>
            Reset your Password?
            <br />
            Get Back on Track.
          </h1>
          <p className="ResetPassword-Description">
            Enter your registered email address and we'll send you a link to reset your password.
          </p>
          <div className="ResetPassword-Illustration-Container">
            <img src={resetPasswordImage} alt="Reset Password" className="ResetPassword-Illustration" />
          </div>
          <div className="ResetPassword-Quote-Box">
            <div className="ResetPassword-Quote-Icon">
              <img src={shieldIcon} alt="Security" />
            </div>
            <div className="ResetPassword-Quote-Content">
              <strong>“A unified platform that simplifies training, placements, and recruitment management.”</strong>
              <p>Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ResetPassword-Right-Section">
        <div className="ResetPassword-Back-Login">
          <img
            src={backArrow}
             alt="Back"
             className="ResetPassword-Back-Arrow"
          />
          <Link to="/login">Back to Login</Link>
        </div>
        <div className="ResetPassword-Form-Container">
          <h2>Reset Password</h2>
          <p className="ResetPassword-Form-Subtitle">Choose a strong password to keep ur account secure</p>
          <form>
            <div className="ResetPassword-Form-Group">
              <label htmlFor="password">New Password</label>
              <div className="ResetPassword-Input-Wrapper">
                <img src={lockIcon} alt="Lock" className="ResetPassword-Lock-Icon" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError("");
                  }}
                />
                <button type="button" className="ResetPassword-Eye-Button" onClick={() => setShowPassword(!showPassword)}>
                  <img src={eyeIcon} alt="Show Password" />
                </button>
              </div>
              <div className="ResetPassword-Strength-Row">
                <div className="ResetPassword-Strength-Bar">
                  <div
                    className={`ResetPassword-Strength-Progress ${strength.className}`}
                    style={{ width: strength.width }}
                  ></div>
                </div>
                <p className="ResetPassword-Strength-Text">
                  Password strength:
                  <span className={strength.className}> {strength.text}</span>
                </p>
              </div>
              {passwordError && <p className="ResetPassword-Input-Error">{passwordError}</p>}
            </div>

            <div className="ResetPassword-Form-Group ResetPassword-Confirm-Group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="ResetPassword-Input-Wrapper">
                <img src={lockIcon} alt="Lock" className="ResetPassword-Lock-Icon" />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setConfirmPasswordError("");
                  }}
                />
                <button type="button" className="ResetPassword-Eye-Button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <img src={eyeIcon} alt="Show Password" />
                </button>
              </div>
              {confirmPasswordError && <p className="ResetPassword-Input-Error">{confirmPasswordError}</p>}
            </div>

            <div className="ResetPassword-Signed-In">
              <input type="checkbox" id="signedIn" />
              <label htmlFor="signedIn">Keep me signed in</label>
            </div>

            <button type="button" className="ResetPassword-Reset-Btn" onClick={handleResetPassword}>
              <span>Reset Password</span>
              <img
                src={rightArrow}
                alt="Reset"
                className="ResetPassword-Button-Arrow"
              />
            </button>

            <div className="ResetPassword-Or-Section">
              <div className="ResetPassword-Or-Line"></div>
              <span>OR CONTINUE WITH</span>
              <div className="ResetPassword-Or-Line"></div>
            </div>

            <button type="button" className="ResetPassword-Google-Btn">
              <img src={googleIcon} alt="Google" className="ResetPassword-Google-Icon" />
              <span>Google</span>
            </button>

            <p className="ResetPassword-Create-Account">
              Don't have an account?
              <Link to="/register"> Create Account</Link>
            </p>
          </form>

          <div className="ResetPassword-Footer-Links">
            <a href="#help">Help</a>
            {/* <span>•</span> */}
            <a href="#privacy">Privacy</a>
            {/* <span>•</span> */}
            <a href="#terms">Terms</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResetPassword;