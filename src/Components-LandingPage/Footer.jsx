import React from "react";
import "./Footer.css";
import FacebookIcon from "../assets/LandingPageAssets/FacebookIcon.png";
import XIcon from "../assets/LandingPageAssets/XIcon.png";
import InstagramIcon from "../assets/LandingPageAssets/InstagramIcon.png";

const footerGroups = [
  { title: "COMPANY", links: [{ label: "About Us", href: "#about" }, { label: "Careers", href: "#careers" }, { label: "Contact", href: "#contact" }] },
  { title: "PLATFORM", links: [{ label: "Job Postings", href: "#features" }, { label: "AI Resume Matching", href: "#features" }, { label: "Training & Skill Readiness", href: "#training" }, { label: "Placement Analytics", href: "#features" }] },
  { title: "SUPPORT", links: [{ label: "Help Center", href: "#help" }, { label: "FAQ", href: "#faq" }, { label: "Raise Issue", href: "#support" }, { label: "Contact Support", href: "#contact" }] },
  { title: "LEGAL", links: [{ label: "Privacy Policy", href: "#privacy" }, { label: "Terms & Conditions", href: "#terms" }, { label: "Cookie Policy", href: "#cookies" }] }
];

const Footer = () => {
  return (
    <footer className="Footer-wrapper">
      <div className="Footer-linkGroups">
        {footerGroups.map((group) => (
          <div className="Footer-linkGroup" key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map((link) => (
              <a href={link.href} key={link.label}>{link.label}</a>
            ))}
          </div>
        ))}
      </div>
      <div className="Footer-copyRow">
        <p>© 2026 Placement and Recruitment Platform.</p>
        <div className="Footer-socialRow">
          <a href="https://www.facebook.com/" aria-label="Facebook"><img src={FacebookIcon} alt="Facebook" /></a>
          <a href="https://x.com/" aria-label="X"><img src={XIcon} alt="X" /></a>
          <a href="https://www.instagram.com/" aria-label="Instagram"><img src={InstagramIcon} alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;