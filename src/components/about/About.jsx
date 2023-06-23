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
        I am Shakeel Khuhro, a Front-End Developer specializing in JavaScript,
        React, and Next.js. I am also a Microsoft Learn Student Ambassador and
        the Marketing Manager at MLSA Muet Khairpur Mir's. Additionally, I am
        the Co-Founder of Ritlop, a platform that showcases talented freelancers
        and offers mentorship. Through open-source contributions and
        participation in programs like GSSOC'23 and HacktoberFest, I collaborate
        and make a positive impact on the developer community. I invite you to
        explore my portfolio for examples of my Front-End projects, and I am
        open to connecting for potential opportunities. Thank you for your
        consideration.
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
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">ReactJS</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </li>
                <li>
                  <span className="skills-span">TypeScript</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "70%" }}
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
                  <span  className="skills-span">NodeJS</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "65%" }}
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
                <li>
                  <span className="skills-span">Firebase</span>
                  <div className="skill-line">
                    <div
                      className="skill-progress"
                      style={{ width: "60%" }}
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
                <span>Dec-2022 - Current</span>
                <br /> Front-End Developer at Paidlance
              </li>
              <li>
                <span>Jan-2023 - Current </span>
                <br /> Beta Student Ambassador at Microsoft Learn
              </li>
              <li>
                <span>Dec-2022 - Current</span>
                <br /> Marketing Manager at MLSA MUET Khp
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
                <span>Jun-2022 - July-2022</span>
                <br /> Front-End Development (HTML,CSS,JS)
                <br />
                <small>Saylani Mass Information Technology</small>{" "}
              </li>
              <li>
                <span>April-2023 - Continue</span>
                <br /> Front-End Development (React and NextJS)
                <br />
                <small>Bytewise Limited</small>{" "}
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
