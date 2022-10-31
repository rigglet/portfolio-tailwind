import { useEffect, useState  } from "react";
import { serverBaseURL } from "../config/config";

//framer motion and styled components
import { motion } from "framer-motion";

//uuid
import { v4 as uuidv4 } from "uuid";
//functions
import Icon from "./Icon";
import { HiLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const ProjectCard = ({
  project,
  handleProjectClick,
  explorer = false,
  portfolio = false,
  showStar = false,
  allIcons,
}) => {
  const [mainImage, setMainImage] = useState({});

  useEffect(() => {
    setMainImage(
      project.screenshots?.filter((image) => {
        return image._id === project?.mainImage;
      })[0]
    );
  }, [project.mainImage, project.screenshots]);

  return (
    <div>
      
      {/* START OF CARD */}
      <div className="image-container">
        {project.featured && showStar && (
          <Icon
            icon="FaStar"
            color="gold"
            size="25px"
            title="Featured project"
            className="featured"
            allIcons={allIcons}
          />
        )}
        {/* {project.screenshots[0]?.fileName ? (
          <img
            src={`${serverBaseURL()}/images/${
              project.screenshots[0]?.fileName
            }`}
            alt="project"
          />
        ) : (
          <Icon icon="BsImageFill" color="#65617d" size="50%" title="project" />
        )} */}
        {mainImage?.fileName ? (
          <img
            src={`${serverBaseURL()}/images/${mainImage?.fileName}`}
            alt="project"
            onClick={() => handleProjectClick(project)}
          />
        ) : (
          <Icon
            icon="BsImageFill"
            color="#65617d"
            size="50%"
            title="project"
            allIcons={allIcons}
          />
        )}
      </div>
      <div className="information">
        <h4
          className={
            portfolio ? "project-name light-text" : "project-name dark-text"
          }
        >
          {project.projectName}
        </h4>
        <h5
          className={
            portfolio
              ? "project-description light-text"
              : "project-description dark-text"
          }
        >
          {project.shortDescription}
        </h5>
        <div className="links">
          {project.githubLink && (
            <a
              key={uuidv4()}
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <button className={portfolio
                ? "project-card-link-btn light-text"
                : "project-card-link-btn dark-text"
              }>
                <FaGithubSquare
                  title="Open project in github"
                  className={portfolio
                    ? "project-card-link-btn-icon light-text"
                    : "project-card-link-btn-icon dark-text"
                  }   
                  size="25px"
                />
                View code
              </button>
            </a>
          )}
          {project.website && (
            <a
              key={uuidv4()}
              href={project.website}
              target="_blank"
              rel="noreferrer"
            >
              <button className={portfolio
                ? "project-card-link-btn light-text"
                : "project-card-link-btn dark-text"
              }>
                <HiLink
                  title="Open live project website"
                  className={portfolio
                    ? "project-card-link-btn-icon light-text"
                    : "project-card-link-btn-icon dark-text"
                  }
                  size="25px"
                />
                View live
              </button>
            </a>
          )}
        </div>
      </div>

      <div className={portfolio ? "technologies-show" : "technologies-hide"}>
        <div>
          {project.technologies.map((tech) => (
            <a
              key={uuidv4()}
              href={tech.address}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                key={uuidv4()}
                icon={tech.icon}
                color={tech.color}
                size="30px"
                allIcons={allIcons}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;