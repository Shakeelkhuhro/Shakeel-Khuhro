import React, { useState } from "react";
import "./about.css";
import AboutImage from "../../assets/me-2.jpg";
import TabTitles from "./TabTitles";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2 className="sub-title">About Me</h2>
      <p className="about-text">
        I am Shakeel Khuhro, a React Developer currently working at Hifah Technologies. I am also a Microsoft Certified Azure Administrator and have taken on the role of a Gold Microsoft Learn Student Ambassador and the EMEA Regional Lead. Previously, I served as the Marketing Manager at MLSA MUET Khairpur Mir's until December 2023. 
        Additionally, I have spoken on different technologies, empowering over 5,000 individuals both online and offline. Through my journey, I actively contribute to the tech community, sharing knowledge and collaborating with others.
      </p>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={AboutImage} alt="About Pic" />
          </div>
        </div>
        <div className="about-content">
          <TabTitles activeTab={activeTab} openTab={openTab} />
          <div
            className={`tab-contents ${
              activeTab === "skills" ? "active-tab" : ""
            }`}
            id="skills"
          >
            {activeTab === "skills" && (
              <ul>
                <li>
                  <span className="skills-span">JavaScript</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">React native</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">ReactJS</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">NextJS</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">Microsoft Azure</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">AWS Cloud</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">Networking</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">Git</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div
            className={`tab-contents ${
              activeTab === "experience" ? "active-tab" : ""
            }`}
            id="experience"
          >
            <ul>
              <li>
                <span>June 2024 - Current</span>
                <br /> React Developer at Hifah Technologies
              </li>
              <li>
                <span>Jan 2023 - Current </span>
                <br /> Gold Student Ambassador & EMEA Regional Lead at Microsoft Learn
              </li>
              <li>
                <span>Dec 2022 - Dec 2023</span>
                <br /> Marketing Manager at MLSA MUET Khairpur
              </li>
            </ul>
          </div>
          <div
            className={`tab-contents ${
              activeTab === "education" ? "active-tab" : ""
            }`}
            id="education"
          >
            <ul>
              <li>
                <span>April-2023 - June-2023</span>
                <br /> Front-End Development
                <br />
                <small>Bytewise Limited</small>{" "}
              </li>
              <li>
                <span>May-2024 - July-2024</span>
                <br /> Azure Cloud
                <br />
                <small>Bytewise Limited</small>{" "}
              </li>
              <li>
                <span>May-2024 - June-2024</span>
                <br /> CCNA and Azure Enterprise
                <br />
                <small>Corvit System</small>{" "}
              </li>
              <li>
                <span>2021 - Continue</span>
                <br /> Bachelor of Software Engineering
                <br />
                <small>
                  Mehran University of Engineering and Technology
                </small>{" "}
              </li>
            </ul>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;