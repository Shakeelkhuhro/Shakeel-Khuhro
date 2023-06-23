import React from "react";

const TabTitles = ({ activeTab, openTab }) => {
  return (
    <div className="tab-titles">
      <p
        className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
        onClick={() => openTab("skills")}
      >
        Skills
      </p>
      <p
        className={`tab-links ${
          activeTab === "experience" ? "active-link" : ""
        }`}
        onClick={() => openTab("experience")}
      >
        Experience
      </p>
      <p
        className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
        onClick={() => openTab("education")}
      >
        Education
      </p>
    </div>
  );
};

export default TabTitles;
