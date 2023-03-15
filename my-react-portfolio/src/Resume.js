import React from "react";
import "./Resume.css";

function Resume() {

  return (

    <div className="container-resume">
      <div className="title-link">
      <h3 className='title-resume'>My Resume</h3>
      <a className="resume-link" 
      href="https://drive.google.com/file/d/1CvlrOEYrK5wq1DIKuM3wbF0KWkyCQoTq/view?usp=sharing">(Link to downloadable Resume)</a>
      </div>
      <h3 className="title-fondation">Foundation</h3>

      <p> HTML and CSS</p>
      <p>Git</p>
      <p>Third-party APIs (jQuery, Bootstrap)</p>
      <p>Server-side APIs, AJAX, and JSON</p>
      <p></p>

      <h3 className="titles">Technical</h3>

      <p>Node.js</p>
      <p>Object-oriented programming (OOP)</p>
      <p>Express.js servers</p>
      <p>MySQL</p>
      <p>Object-relational mapper, or ORM (Sequelize)</p>
      <p>Model-view-controller (MVC) framework (Handlebars.js)</p>
      <p>Unit testing</p>
      <p>Agile methodology</p>
      <p>Heroku</p>

      <h3 className="titles">Performance</h3>

      <p>Computer science</p>
      <p>MongoDB and NoSQL</p>
      <p>Progressive web apps (PWAs)</p>
      <p>React</p>
      <p>MERN</p>
    </div>
  );
}

export default Resume;

