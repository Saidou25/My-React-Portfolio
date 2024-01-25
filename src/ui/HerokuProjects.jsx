import React from "react";
import logo from "../logo.png";
import '../Project.css';

export default function HerokuProjects({ herokuProjects }) {
  return (
    <main className="row g-0 herokuProjects-row pb-3">
      {herokuProjects &&
        herokuProjects.map((project) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={project.name}>
            <div className="card g-0 border-0 round">
              <div className="card-header featured-project-title">
                <p className="text-light">{project.title}</p>
                {project.title.length < 31 && <br />}
              </div>
              <div className="card-body card-body-overlay">
                <img
                  className="image"
                  src={project.image}
                  alt="application dashboard"
                />
                <div className="card-img-overlay px-5">
                  <a
                    className="link"
                    href={`https://${project.urlTitle}.herokuapp.com/`}
                  >
                    <h4 className="card-title mx-4">{project.name}</h4>
                  </a>
                  <a href={`https://github.com/Saidou25/${project.repoUrl}`}>
                    <img src={logo} alt="minicat" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </main>
  );
}
