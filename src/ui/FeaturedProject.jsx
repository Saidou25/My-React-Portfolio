import React from "react";
import logo from "../logo.png";
import '../Project.css';

export default function FeaturedProject({ featuredProject }) {
  return (
    <main className="col-12">
      <div className="card g-0 border-0 round featured-card">
        <div className="card-header featured-project-title text-light">
          <p className="text-light mt-3">{featuredProject.title}</p>
        </div>
        <div className="card-body card-body-overlay">
          <img
            className="featured-img"
            src={featuredProject.image}
            alt="website landing page"
          />
          <div className="card-img-overlay">
            <a
              className="featured-project"
              href={`https://${featuredProject.urlTitle}.herokuapp.com/`}
            >
              <h4 className="card-title mx-4">{featuredProject.name}</h4>
            </a>
            <a href={`https://github.com/Saidou25/${featuredProject.repoUrl}`}>
              <img src={logo} alt="minicat" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
