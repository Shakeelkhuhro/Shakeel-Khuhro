import React from "react";
import "./services.css";
import { TfiCheckBox } from "react-icons/tfi";

const Services = () => {
  return (
    <section id="services">
      <h5>My Offers</h5>
      <h2>Services</h2>
      <div className="container services-container">
        {/* 1st services */}
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service-list">
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* 2nd service */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* 3rd services */}
        <article className="service">
          <div className="service-head">
            <h3>Community Guidelines</h3>
          </div>

          <ul className="service-list">
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <TfiCheckBox className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
