import React from "react";
import "./Project.css";
import featuredImage from "./healinglandingpage.jpg";
import pythonApp from "./pythondashboard.png";
import tmiworld from "./tmiworld.png";
import logo from "./logo.png";

function Project({ projects }) {
  return (
    <div>
      <h3 className="title project-title">Projects</h3>
      <div className="container-project">
        <div className="row g-0 project-row pb-3">


          <div className="col-12">
            <div className="card g-0 border-0 round featured-card">
              <div className="card-header featured-project-title text-light">
                <p className="text-light mt-3">MERN + GraphQl + Firebase  Web Site</p>
              </div>
              <div className="card-body card-body-overlay">
                <img
                  className="featured-img"
                  src={tmiworld}
                  alt="website landing page"
                />
                <div className="card-img-overlay" >
                  <a
                    className="featured-project"
                    href="https://tmiworld-5f7c04c2f838.herokuapp.com/"
                  >
                    <h4 className="card-title">TMIWORLD</h4>
                  </a>
                  <a href="https://github.com/Saidou25/Meditating-neighbor">
                    <img  src={logo} alt="minicat" />
                  </a>
                </div>
              </div>
            </div>
          </div>

         
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card g-0 border-0 round">
                <div className="card-header featured-project-title">
                <p className="card-header text-light">
                        MERN + GraphQl website
                      </p>
                </div>
                <div className="card-body card-body-overlay">
                  <img
                    className="image"
                    src={featuredImage}
                    alt="flowers"
                  />
                  <div className="card-img-overlay">
                    <a  className="link" href={"https://healing.herokuapp.com/"}>
                      <h4 className="card-title">{"Healing"}</h4>
                    </a>
                    <a href={"https://github.com/Saidou25/Healing"}>
                      <img
                        src={logo}
                        alt="minicat"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card g-0 border-0 round">
              <div className="card-header featured-project-title">
                <p className="card-header text-light">
                  Python Full Stack Project
                </p>
              </div>
              <div className="card-body card-body-overlay">
                <img
                  className="image"
                  src={pythonApp}
                  alt="application dashboard"
                />
                <div className="card-img-overlay px-5">
                  <a className="link"
                    href={
                      "https://python-comments-votes-46685824ef0e.herokuapp.com/"
                    }
                  >
                    <h4 className="card-title">comments & votes</h4>
                  </a>
                  <a href="https://github.com/Saidou25/python-newsfeed">
                    <img src={logo} alt="minicat" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {projects.map((project) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={project.id}>
              <div className="card project-cards g-0 border-0">
                <div className="card-header featured-project-title">
                  {project.name === "weather" && (
                    <>
                      <p className="card-header text-light">
                        Third-Party APIs & Server-Side APIs
                      </p>
                    </>
                  )}
                  {project.name === "Password" && (
                    <>
                      <p className="card-header text-light">
                        Javacript & Web APIs Application
                      </p>
                    </>
                  )}
                  {project.name === "Print" && (
                    <>
                      <p className="card-header text-light">
                        Interactive Front-End Project
                      </p>
                    </>
                  )}
                  {project.name === "My Team" && (
                    <>
                      <p className="card-header text-light">
                        Node application
                      </p>
                    </>
                  )}
                </div>
                <div className="card-body card-body-overlay">
                  <img
                    className="image"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="card-img-overlay">
                    <a  className="link" href={`https://saidou25.github.io/${project.title}`}>
                      <h4 className="card-title">{project.name}</h4>
                    </a>
                    <a href={`https://github.com/Saidou25/${project.title}`}>
                      <img
                        src={project.logo}
                        alt="minicat"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
