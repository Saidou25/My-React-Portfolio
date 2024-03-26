import React from "react";
import "./Resume.css";

function Resume() {

  return (

    <div className="container-resume">
      <div className="title-link">
      <h3 className='title-resume'>My Resume</h3>
      <a className="resume-link" 
      href="https://drive.google.com/file/d/1gjAas0oOI66gILxkcmh5p6qh_s5RBn6R/view?usp=sharing">(Link to downloadable Resume)</a>
      </div>
      <h3 className="title-fondation">Foundation</h3>

      <p className="description"> HTML and CSS</p>
      <p className="description">Git</p>
      <p className="description">Third-party APIs (jQuery, Bootstrap)</p>
      <p className="description">Server-side APIs, AJAX, and JSON</p>

      <h3 className="titles">Technical</h3>

      <p className="description">Node.js</p>
      <p className="description">Object-oriented programming (OOP)</p>
      <p className="description">Express.js servers</p>
      <p className="description">MySQL</p>
      <p className="description">Object-relational mapper, or ORM (Sequelize)</p>
      <p className="description">Model-view-controller (MVC) framework (Handlebars.js)</p>
      <p className="description">Unit testing</p>
      <p className="description">Agile methodology</p>
      <p className="description">Heroku</p>

      <h3 className="titles">Performance</h3>

      <p className="description">React</p>
      <p className="description">MERN</p>
      <p className="description">Computer science</p>
      <p className="description">Redux</p>
      <p className="description">MongoDB and NoSQL</p>
      <p className="description">GraphQl</p>
      <p className="description">Progressive web apps (PWAs)</p>
      <p className="description">Firebase</p>
    </div>
  );
}

export default Resume;

