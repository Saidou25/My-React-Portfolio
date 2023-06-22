import React from 'react';
import "./About.css";
import me from './me.jpg';


function About() {

  return (
    <div className="container-about">
      <div className='about'>
        <h3 className='title'>About Me</h3>
        <div className='row'>
          <div className='col-lg-5 col-md-12 worker'>
            <img src={me} className="responsive me" alt="Workerme"></img>
          </div>
          <div className='col-lg-7 col-md-12 flex about-me'>

            <p className='story text-primary'>
              Entry-level full stack web developer with proven problem solving, organization and research Skills.</p>
            <p className='story text-primary'>
              Native French I have been living in the US for over 15 years. Growing up training in
              swimming at a national level I have developed competitiveness and a hard working mentality.
              My work journey started as a musician followed with the restaurant industry in which
              I started in New York City as a dishwasher and climbed my way up to general manager.
            </p>
            <p className='story text-primary'>
              Through my work experiences I have developed a lot of skills such as adaptability,
              strong work ethic, team work, communication, attention to details, doing the "extra step" and many more.
            </p>
            <p className='story text-primary'>
              Starting a new career, highly motivated and seeking an entry level full stack web developer role to pursue my new passion for building web sites, applications and grow with and within a company.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default About;