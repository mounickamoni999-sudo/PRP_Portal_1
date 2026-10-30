import React from "react";
import "./Header.css";
import Logo from "../assets/LandingPageAssets/PlacementIcon.png";

const Header = () => {
  return (
    <header className="Header-bar">
      <a href="#home" className="Header-logoLink">
        <img src={Logo} alt="Placement and Recruitment Platform logo" />
        <span>Placement &amp;<br />Recruitment Platform</span>
      </a>
      <nav className="Header-menu">
        <a href="#home" className="Header-menuItem active">Home</a>
        <a href="#features" className="Header-menuItem">Features</a>
        <a href="#recruiters" className="Header-menuItem">For Recruiters/Employers</a>
        <a href="#training" className="Header-menuItem">For Training Institutions</a>
        <a href="#success-stories" className="Header-menuItem">Success Stories</a>
      </nav>
      <div className="Header-authButtons">
        <a href="/PRP_Portal/Login" className="Header-btnLogin">Login</a>
        <a href="/PRP_Portal/WelcomeRegistration" className="Header-btnRegister">Register</a>
      </div>
    </header>
  );
};

export default Header;