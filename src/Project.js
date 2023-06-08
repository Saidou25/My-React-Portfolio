import React from 'react';
import './Project.css';
import featuredImage from './herokuapp.jpg';
import logo from './logo.png';

function Project({ projects }) {

  return (
    <div>
      <h3 className='title'>Projects</h3>
      <div className='container-project'>
        <div className='row'>
          <div className='col-12'>
            <p className='featured-title'>(MERN + GraphQl application)</p>
            <div className='card featured-card round'>
              <img className="featured-img" src={featuredImage} alt='website dashboard' />
              <div className="card-img-overlay" id="text">
                <a className='featured-project' href='https://healing.herokuapp.com/' >
                  <h4 className="card-title">Healing</h4>
                </a>
                <a href='https://github.com/Saidou25/Healing'>
                  <img className='logo' id="text" src={logo} alt="minicat" />
                </a>
              </div>
            </div>

          </div>
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