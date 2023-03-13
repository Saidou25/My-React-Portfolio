import React from 'react';
import './Project.css';

function Project({ projects }) {

  return (


    <div>
      <h3 className='my-projects'>Projects</h3>
      <div className='container'>
        <div className='row'>
          {projects.map((project) => (
            <div className='col-lg-4 col-md-6 col-sm-12 flex effect' key={project.id}>
              <div className='card round'>
                <img className='image' src={project.image} alt={project.title} />
                <div className="card-img-overlay" id="text">
                  <a href={`https://saidou25.github.io/${project.title}`} >
                    <h4 className="card-title">{project.name}</h4>
                  </a>
                  <a href={`https://github.com/Saidou25/${project.title}`}>
                    <img className='logo' id="text" src={project.logo} alt="minicat" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div >
    </div >
  )
};


export default Project;