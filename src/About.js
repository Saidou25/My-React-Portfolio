import React from "react";
import me from "./sycroped.jpeg";
import "./About.css";

function About() {
  return (
    <div className="container-about">
      <div className="about">
        <h3 className="title">About Me</h3>
        <div className="row row-about">
          <div className="col-lg-5 col-md-12 worker">
            <img src={me} className="responsive me" alt="Workerme"></img>
          </div>
          <div className="col-lg-7 col-md-12 flex about-me">
            <p className="story">
              As a native French speaker who has called the United States home
              for over 15 years, I bring a unique blend of cultural perspectives
              and experiences to the table. With a background in competitive
              swimming at the national level, I've cultivated a spirit of
              determination and a strong work ethic from a young age. My
              professional journey has been diverse, initially beginning as a
              musician and later transitioning into the restaurant industry in
              the bustling heart of New York City. Starting as a dishwasher, I
              tirelessly worked my way up the ranks to become a general manager.
            </p>
            <p className="story">
              Throughout my diverse career path, I've honed a wide array of
              skills, including adaptability, a relentless work ethic, effective
              teamwork, strong communication abilities, meticulous attention to
              detail, and a willingness to go the extra mile to achieve success.{" "}
            </p>
            <p className="story">
              Driven by a newfound passion for web development, I am embarking
              on a new career journey. I am highly motivated and eager to take
              on an entry-level full-stack web developer role. My goal is to
              leverage my problem-solving, organizational, and research skills
              to contribute to web projects, build innovative websites and
              applications, and continuously evolve as a professional within a
              forward-thinking company.{" "}
            </p>
            <p className="story">
              I am excited about the opportunities that lie ahead and look
              forward to the challenges and growth that come with pursuing my
              passion for web development.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
