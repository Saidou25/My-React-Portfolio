import weatherDashboard from "./../weather.png";
import password from "./../newpassword.png";
import team from "./../myteam.png";
import print from "./../print.jpg";
import logo from "./../logo.png";
import pythonApp from "./../pythondashboard.png";
import featuredImage from "./../healinglandingpage.jpg";
import pizza from "./../menu.jpg"
import tmiworld from "./../tmiworld.png"

export const gitHubProjects = [
  {
    id: 2,
    cardHeader: "Third-Party APIs & Server-Side APIs",
    title: "Weather-Dashboard",
    name: "weather",
    image: weatherDashboard,
    logo: logo,
  },
  {
    id: 3,
    cardHeader: "Javacript & Web APIs Application",
    title: "Password-Generator",
    name: "Password",
    image: password,
    logo: logo,
  },
  {
    id: 4,
    title: "Team",
    cardHeader: "Node application s",
    name: "My Team",
    image: team,
    logo: logo,
  },
  {
    id: 5,
    title: "Print-or-Film",
    cardHeader: "Interactive Front-End Projects",
    name: "Print",
    image: print,
    logo: logo,
  },
];
export const herokuProjects = [
  {
    id: 8,
    title: "MERN + GraphQl + Firebase Web Site",
    urlTitle: "tmiworld-5f7c04c2f838",
    repoUrl: "Meditating-neighbor",
    name: "tmiworld",
    image: tmiworld,
    logo: logo,
  },
  {
    id: 7,
    title: "MERN + GraphQl single page application",
    repoUrl: "healing",
    urlTitle: "healing",
    name: "Healing Reiki",
    image: featuredImage,
    logo: logo,
  },
  {
    id: 6,
    title: "Python Full Stack Project",
    urlTitle: "python-comments-votes-46685824ef0e",
    name: "Comnents and votes",
    repoUrl: "python-newsfeed",
    image: pythonApp,
    logo: logo,
  },
];
export const featuredProject = {
  id: 1,
  title: "Vite, React, Redux, Tailwindcss single page application",
  urlTitle: "fast-pizza-bcc00f457b13",
  name: "Fast pizza",
  repoUrl: "fast-react-pizza",
  image: pizza,
  logo: logo,
};
