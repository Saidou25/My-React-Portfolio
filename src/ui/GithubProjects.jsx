import React from "react";
import "../Project.css";
export default function githubProjects({ gitHubProjects }) {
  return (
    <main
      className="row g-0 project-row pb-3"
      style={{ width: "92%", margin: "auto" }}
    >
      {gitHubProjects.map((project) => (
        <div
          className="col-lg-4 col-md-6 col-sm-12"
          key={project.id}
        >
          <div className="card project-cards g-0 border-0">
            <div className="card-header text-light featured-project-title">
              <p className="text-light">{project.cardHeader}</p>
              {project.cardHeader.length < 31 && <br />}
            </div>
            <div className="card-body card-body-overlay">
              <img className="image" src={project.image} alt={project.title} />
              <div className="card-img-overlay">
                <a
                  className="link"
                  href={`https://saidou25.github.io/${project.title}`}
                >
                  <h4 className="card-title mx-4">{project.name}</h4>
                </a>
                <a href={`https://github.com/Saidou25/${project.title}`}>
                  <img src={project.logo} alt="minicat" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
