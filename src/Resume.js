import React from "react";
import "./Resume.css";

function Resume() {

  return (

    <div className="container-resume">
      <div className="title-link">
      <h3 className='title-resume'>My Resume</h3>
      <a className="resume-link text-primary" 
      href="https://drive.google.com/file/d/1gjAas0oOI66gILxkcmh5p6qh_s5RBn6R/view?usp=sharing">(Link to downloadable Resume)</a>
      </div>
      <h3 className="title-fondation">Foundation</h3>

      <p className="description text-primary"> HTML and CSS</p>
      <p className="description text-primary">Git</p>
      <p className="description text-primary">Third-party APIs (jQuery, Bootstrap)</p>
      <p className="description text-primary">Server-side APIs, AJAX, and JSON</p>

      <h3 className="titles">Technical</h3>

      <p className="description text-primary">Node.js</p>
      <p className="description text-primary">Object-oriented programming (OOP)</p>
      <p className="description text-primary">Express.js servers</p>
      <p className="description text-primary">MySQL</p>
      <p className="description text-primary">Object-relational mapper, or ORM (Sequelize)</p>
      <p className="description text-primary">Model-view-controller (MVC) framework (Handlebars.js)</p>
      <p className="description text-primary">Unit testing</p>
      <p className="description text-primary">Agile methodology</p>
      <p className="description text-primary">Heroku</p>

      <h3 className="titles">Performance</h3>

      <p className="description text-primary">Computer science</p>
      <p className="description text-primary">MongoDB and NoSQL</p>
      <p className="description text-primary">GraphQl</p>
      <p className="description text-primary">Progressive web apps (PWAs)</p>
      <p className="description text-primary">React</p>
      <p className="description text-primary">MERN</p>
      <p className="description text-primary">Firebase</p>
    </div>
  );
}

export default Resume;

