import React from 'react';
import './Project.css';
import featuredImage from './healinglandingpage.jpg';
import logo from './logo.png';

function Project({ projects }) {

  return (
    <div>
      <h3 className='title project-title text-primary'>Projects</h3>
      <div className='container-project'>
        <div className='row g-0 project-row pb-3'>
          <div className='col-12'>
            <div className='card g-0 border-0 round featured-card'>
              <div className='card-header featured-project-title bg-primary text-light'>
                <p className='text-light mt-3'>MERN + GraphQl Web Site</p>
              </div>
              <div className='card-body'>
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

          </div>
          {projects.map((project) => (
            <div className='col-lg-4 col-md-6 col-sm-12' key={project.id}>
              <div className='card g-0 border-0 round'>
                <div className='card-header featured-project-title bg-primary'>
                  {project.name === 'weather' && (
                    <>
                      <p className='card-header text-light'>Third-Party APIs & Server-Side APIs</p>
                    </>
                  )}
                  {project.name === 'Password' && (
                    <>
                      <p className='card-header text-light'>Javacript & Web APIs Application</p>
                    </>
                  )}
                  {project.name === 'Print' && (
                    <>
                      <p className='card-header text-light'>Interactive Front-End Project</p>
                    </>
                  )}
                </div>
                <div className='card-body'>
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
            </div>
          ))}
        </div>
      </div >
    </div >
  )
};


export default Project;