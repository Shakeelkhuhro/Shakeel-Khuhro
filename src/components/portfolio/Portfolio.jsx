import React from "react";
import "./portfolio.css";
import IMG1 from "./portfolio1.PNG";
import IMG2 from "./portfolio2.PNG";
import IMG3 from "./portfolio3.png";
import IMG4 from "./portfolio4.PNG";
import IMG5 from "./portfolio5.PNG";
import IMG6 from "./portfolio6.PNG";

// Rest of your component code...

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Covid-19 website</h3>
          <p>
            The COVID-19 Landing Page is a responsive website designed to
            provide users with essential information about the COVID-19
            pandemic. It offers an overview of the current COVID-19 situation,
            prevention measures, and curated resources for further information.
            It features a visually appealing and user-friendly interface,
            ensuring easy navigation and accessibility.
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/Shakeelkhuhro/Covid-19-Landing-Page"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://shakeelkhuhro.github.io/Covid-19-Landing-Page/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-shop (E-commerce Website)</h3> <br />
          <p>
            E-shop is a responsive and visually appealing website template. It
            includes a responsive navigation bar, featured section, product
            introduction, latest products section, trending items section, and a
            footer. <br />
          </p> <br />
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/Shakeelkhuhro/E-Shop"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://shakeelkhuhro.github.io/E-Shop/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>BugBlog (Blogging website)</h3>
          <p>
            Bug Blog is a blogging web application built with the MERN stack, allowing users to create their own blogs, view and react to others' blogs, and share their thoughts with each other.
            <br/>
            <br/>
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/Shakeelkhuhro/Bug-Blog"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://bugblog.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Expense Tracker</h3>
          <p>
            This is a web application for tracking expenses. The user can add
            transactions, which include an amount, description, and whether it's
            an income or an expense. The app then calculates the user's balance
            based on their total income and expenses. The user can also view a
            breakdown of their expenses by category.
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/Shakeelkhuhro/Expense-Tracker"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://shakeelkhuhro.github.io/Expense-Tracker/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Count Down App</h3>
          <p>
            The Countdown App is a simple web application that allows users to
            set a countdown to a specific date and time. It provides a visual
            representation of the remaining time in days, hours, minutes, and
            seconds
          </p>
          <div className="portfolio-item-cta">
            <a
              href="hhttps://github.com/Shakeelkhuhro/countDownApp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://shakeelkhuhro.github.io/countDownApp/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Signup & Signin App</h3>
          <p>
            This is a simple React application that demonstrates Firebase
            Authentication signup and signin functionality. Users can create an account by
            providing their email and password and also can signin if alreadhy had created account.
          </p>
          <div className="portfolio-item-cta">
            <a
              href="https://github.com/Shakeelkhuhro/Firebase-with-React"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://shakeelkhuhro.github.io/Firebase-with-React/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
