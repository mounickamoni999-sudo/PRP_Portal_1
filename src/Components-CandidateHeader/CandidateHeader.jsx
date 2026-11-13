import React from "react";
import "./CandidateHeader.css";
import graduationIcon from "../assets/Candidate dashboard/GraduationIcon.png";
import searchIcon from "../assets/Candidate dashboard/SearchIcon.png";
import notificationIcon from "../assets/Candidate dashboard/NotificationICon.png";
import aiIcon from "../assets/Candidate dashboard/AI-Icon.png";
import helpIcon from "../assets/Candidate dashboard/HelpIcon.png";
import displayIcon from "../assets/Candidate dashboard/DisplayIcon.png";
import downArrowIcon from "../assets/Candidate dashboard/downarrowIcon.png";

const CandidateHeader = () => {
  return (
    <header className="Prp-Candidate-Header-container">
      <div className="Prp-Candidate-Header-brand">
        <div className="Prp-Candidate-Header-logo">
          <img
            className="Prp-Candidate-Header-logoIcon"
            src={graduationIcon}
            alt="graduationIcon"
          />
        </div>
        <div className="Prp-Candidate-Header-brandText">
          <h1 className="Prp-Candidate-Header-title">
            AI Education & Workforce Development Platform
          </h1>
          <p className="Prp-Candidate-Header-tagline">
            <span className="Prp-Candidate-Header-taglineItem">Connect</span>
            <span className="Prp-Candidate-Header-taglineItem">Discover</span>
            <span className="Prp-Candidate-Header-taglineItem">Succeed</span>
          </p>
        </div>
      </div>

      <div className="Prp-Candidate-Header-search">
        <img
          className="Prp-Candidate-Header-searchIcon"
          src={searchIcon}
          alt="searchIcon"
        />
        <input
          className="Prp-Candidate-Header-searchInput"
          type="text"
          placeholder="Search Keyword, Location...,"
        />
      </div>

      <div className="Prp-Candidate-Header-actions">
        <img
          className="Prp-Candidate-Header-actionIcon"
          src={notificationIcon}
          alt="notificationIcon"
        />
        <img
          className="Prp-Candidate-Header-actionIcon"
          src={aiIcon}
          alt="aiIcon"
        />
        <img
          className="Prp-Candidate-Header-actionIcon"
          src={helpIcon}
          alt="helpIcon"
        />
        <img
          className="Prp-Candidate-Header-avatar"
          src={displayIcon}
          alt="displayIcon"
        />
        <img
          className="Prp-Candidate-Header-actionIcon"
          src={downArrowIcon}
          alt="downArrowIcon"
        />
      </div>
    </header>
  );
};

export default CandidateHeader;