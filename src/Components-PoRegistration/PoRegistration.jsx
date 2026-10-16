import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PoRegistration.css";
import poPlacement from "../assets/PoRegistrationAssets/PoPlacement.png";
import poOpportunities from "../assets/PoRegistrationAssets/PoOpportunities.png";
import poSecurity from "../assets/PoRegistrationAssets/PoSecurity.png";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[6-9]\d{9}$/;
const bioMaxLength = 500;

const roleOptions = ["Placement Officer"];

const textFields = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name" },
  { name: "emailAddress", label: "Email Address", type: "email", placeholder: "Enter your email address" },
  { name: "mobileNumber", label: "Mobile Number", type: "tel", placeholder: "123567890" },
  { name: "institutionName", label: "University / Institution Name", type: "text", placeholder: "Search or type university name" },
  { name: "department", label: "Department / Placement Cell", type: "text", placeholder: "Corporate Relations" },
  { name: "employeeId", label: "Employee ID", type: "text", placeholder: "EMP-2024-001" },
];

const PoRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: roleOptions[0],
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    institutionName: "",
    department: "",
    employeeId: "",
    bio: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((previous) => ({ ...previous, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email address is required";
    } else if (!emailRegex.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!phoneRegex.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Enter a valid 10-digit mobile number";
    }

    if (!formData.institutionName.trim()) newErrors.institutionName = "Institution name is required";
    if (!formData.department.trim()) newErrors.department = "Department is required";
    if (!formData.employeeId.trim()) newErrors.employeeId = "Employee ID is required";

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters";
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Password must contain at least 1 uppercase letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least 1 number";
    } else if (!/[^A-Za-z0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain at least 1 special character";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) newErrors.agreeTerms = "Please accept the Terms of service and privacy policy";

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    // TODO: call the registration API here
    navigate("/login");
  };

  return (
    <main className="Prp-Po-Registration-Page">
      <section className="Prp-Po-Registration-Left-Section">
        <header className="Prp-Po-Registration-Brand">
          <img src={poPlacement} alt="Placement platform logo" className="Prp-Po-Registration-Brand-Logo" />
          <div className="Prp-Po-Registration-Brand-Text">
            <h2>AI Education &; Workforce Development Platform</h2>
            {/* <p>Connect • Discover • Succeed</p> */}            
            <p className="Prp-Po-Registration-Brand-Tagline">  <span className="Prp-Po-Registration-Brand-Tagline-Item">Connect</span>  <span className="Prp-Po-Registration-Brand-Tagline-Item">Discover</span>  <span className="Prp-Po-Registration-Brand-Tagline-Item">Succeed</span></p>
          </div>
        </header>

        <div className="Prp-Po-Registration-Hero">
          <h1>
            Manage Placements.
            <br />
            Create Opportunities.
          </h1>
          <p>
            Streamline training, placement activities and recruitment
            coordination - all in one platform.
          </p>
        </div>

        <div className="Prp-Po-Registration-Illustration-Stage">
          <img
            src={poOpportunities}
            alt="A placement officer managing placements at a desk"
            className="Prp-Po-Registration-Illustration"
          />
        </div>

        <div className="Prp-Po-Registration-Trust-Card">
          <img src={poSecurity} alt="" className="Prp-Po-Registration-Trust-Icon" />
          <span className="Prp-Po-Registration-Trust-Divider" />
          <div>
            <p>Your trust, our priority</p>
            <p>Secure, reliable and built for your institution.</p>
          </div>
        </div>
      </section>

      <section className="Prp-Po-Registration-Right-Section" aria-labelledby="po-registration-title">
        <div className="Prp-Po-Registration-Form-Container">
          <h2 id="po-registration-title" className="Prp-Po-Registration-Form-Title">
            Your Journey Starts Here
          </h2>
          <p className="Prp-Po-Registration-Form-Subtitle">
            Join our ecosystem of professional employers.
          </p>

          <form className="Prp-Po-Registration-Form" onSubmit={handleSubmit} noValidate>
            <div className="Prp-Po-Registration-Field Prp-Po-Registration-Field-Full">
              <label htmlFor="role" className="Prp-Po-Registration-Label">
                Select your role
              </label>
              <div className="Prp-Po-Registration-Select-Container">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="Prp-Po-Registration-Select"
                >
                  {roleOptions.map((roleOption) => (
                    <option key={roleOption} value={roleOption}>
                      {roleOption}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {textFields.map((field) => (
              <div key={field.name} className="Prp-Po-Registration-Field">
                <label htmlFor={field.name} className="Prp-Po-Registration-Label">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`Prp-Po-Registration-Input ${errors[field.name] ? "Prp-Po-Registration-Input-Error" : ""}`}
                  aria-invalid={Boolean(errors[field.name])}
                />
                {errors[field.name] && (
                  <p className="Prp-Po-Registration-Validation-Error" role="alert">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <div className="Prp-Po-Registration-Field Prp-Po-Registration-Field-Full">
              <div className="Prp-Po-Registration-Label-Row">
                <label htmlFor="bio" className="Prp-Po-Registration-Label">
                  Bio / About You
                </label>
                <span className="Prp-Po-Registration-Bio-Counter">
                  {formData.bio.length}/{bioMaxLength}
                </span>
              </div>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell us about yourself, your background and why you're passionate about mentoring..."
                maxLength={bioMaxLength}
                value={formData.bio}
                onChange={handleChange}
                className="Prp-Po-Registration-Textarea"
              />
            </div>

            <div className="Prp-Po-Registration-Field">
              <label htmlFor="password" className="Prp-Po-Registration-Label">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                className={`Prp-Po-Registration-Input ${errors.password ? "Prp-Po-Registration-Input-Error" : ""}`}
                aria-invalid={Boolean(errors.password)}
              />
              {errors.password && (
                <p className="Prp-Po-Registration-Validation-Error" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="Prp-Po-Registration-Field">
              <label htmlFor="confirmPassword" className="Prp-Po-Registration-Label">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`Prp-Po-Registration-Input ${errors.confirmPassword ? "Prp-Po-Registration-Input-Error" : ""}`}
                aria-invalid={Boolean(errors.confirmPassword)}
              />
              {errors.confirmPassword && (
                <p className="Prp-Po-Registration-Validation-Error" role="alert">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="Prp-Po-Registration-Field Prp-Po-Registration-Field-Full">
              <label className="Prp-Po-Registration-Terms">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="Prp-Po-Registration-Terms-Checkbox"
                />
                <span>
                  I agree to the{" "}
                  <strong className="Prp-Po-Registration-Terms-Link">Terms of service</strong> and{" "}
                  <strong className="Prp-Po-Registration-Terms-Link">privacy policy</strong>{" "}
                  regarding my administrative access.
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="Prp-Po-Registration-Validation-Error" role="alert">
                  {errors.agreeTerms}
                </p>
              )}
            </div>

            <button type="submit" className="Prp-Po-Registration-Submit-Button">
              Complete Registration
            </button>
          </form>

          <p className="Prp-Po-Registration-Login-Prompt">
            Already have an account?
            <Link to="/login" className="Prp-Po-Registration-Login-Link">
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PoRegistration;
