import React from "react";
import Project from "./Project";
import weatherDashboard from "./weather.png";
import password from "./newpassword.png";
import team from "./myteam.png";
import print from "./print.jpg";
import logo from "./logo.png";

const projects = [
  {
    id: 2,
    title: "Weather-Dashboard",
    name: "weather",
    image: weatherDashboard,
    logo: logo,
  },
  {
    id: 3,
    title: "Password-Generator",
    name: "Password",
    image: password,
    logo: logo,
  },
  {
    id: 4,
    title: "Team",
    name: "My Team",
    image: team,
    logo: logo,
  },
  {
    id: 6,
    title: "Print-or-Film",
    name: "Print",
    image: print,
    logo: logo,
  },
];

function Portfolio() {
  return (
    <div>
      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
