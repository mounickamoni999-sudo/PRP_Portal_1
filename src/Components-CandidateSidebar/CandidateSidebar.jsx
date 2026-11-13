import { useState } from "react";
import "./CandidateSidebar.css";
import sidebarDownArrowIcon from "../assets/Candidate dashboard/Sidebar downarrow.png";

const menuItems = [
  { id: 1, label: "Dashboard" },
  { id: 2, label: "Job Search" },
  { id: 3, label: "Interview Schedule" },
  { id: 4, label: "Assessments" },
  { id: 5, label: "Applications", hasDropdown: true },
  { id: 6, label: "offers" },
  { id: 7, label: "Training & Courses" },
  { id: 8, label: "Resume Manager" },
  { id: 9, label: "Profile" },
  { id: 10, label: "Notification" },
  { id: 11, label: "Settings" },
];

const CandidateSidebar = () => {
  return (
    <aside className="Prp-Candidate-Sidebar-container">
      <ul className="Prp-Candidate-Sidebar-list">
        {menuItems.map((item) => (
          <li key={item.id} className="Prp-Candidate-Sidebar-item">
            <span className="Prp-Candidate-Sidebar-label">{item.label}</span>
            {item.hasDropdown && (
              <img
                className="Prp-Candidate-Sidebar-downArrow"
                src={sidebarDownArrowIcon}
                alt="sidebarDownArrowIcon"
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CandidateSidebar;