import { gitHubProjects } from "../src/utils/PortfolioData";
import { featuredProject } from "../src/utils/PortfolioData";
import { herokuProjects } from "../src/utils/PortfolioData";
import GithubProjects from "../src/ui/GithubProjects";
import HerokuProjects from "../src/ui/HerokuProjects";
import FeaturedProject from "../src/ui/FeaturedProject";

function Project() {
  return (
    <div>
      <h3 className="title project-title">Projects</h3>
      <div className="container-project">
          <FeaturedProject featuredProject={featuredProject} />
          <HerokuProjects herokuProjects={herokuProjects} />
          <GithubProjects gitHubProjects={gitHubProjects} />
        </div>
      </div>
  );
}

export default Project;
