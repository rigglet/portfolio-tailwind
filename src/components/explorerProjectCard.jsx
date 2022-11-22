import { useEffect, useState } from "react";
import { serverBaseURL } from "../config/config";
import { Button } from "@material-tailwind/react";

//framer motion and styled components
import { motion as m } from "framer-motion";

import screen from "../img/screen.png";

//uuid
import { v4 as uuidv4 } from "uuid";
//functions
import Icon from "./Icon";
import { HiLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const explorerProjectCard = ({
   project,
   handleProjectClick,
   explorer = false,
   portfolio = false,
   showStar = false,
   allIcons,
   mainImage,
}) => {
   return (
      <m.div className="h-auto rounded-xl flex flex-col font-poppins border-secondary border-2 bg-input w-1/4 min-w-[300px]">
         {/* image container */}
         <div className={`flex items-center justify-center cursor-pointer m-4`}>
            {mainImage?.fileName && (
               <img
                  src={`${serverBaseURL()}/images/${mainImage?.fileName}`}
                  alt="project"
                  className="z-10 rounded-md w-[300px] min-w-[100%]"
                  onClick={() => handleProjectClick(project)}
               />
            )}
         </div>

         {/* Information */}
         <div className="flex flex-col p-4 gap-y-4 justify-between">
            <h4
               className={`font-bold text-primary
               ${
                  portfolio
                     ? "project-name light-text"
                     : "project-name dark-text"
               }
               `}
            >
               {project.projectName}
            </h4>
            <h5
               className={`font-semibold text-textdark flex-wrap
                  ${
                     portfolio
                        ? "project-description light-text"
                        : "project-description dark-text"
                  }
               `}
            >
               {project.shortDescription}
            </h5>

            {/* Technology icons */}
            <div
               className={`${
                  portfolio ? "technologies-show" : "technologies-hide"
               } flex flex-wrap gap-4`}
            >
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
                        size="40px"
                        allIcons={allIcons}
                     />
                  </a>
               ))}
            </div>

            {/* Links to sites */}
            {/* <div className="flex justify-around items-center rounded-lg p-2 text-sm font-semibold uppercase">
               {project.githubLink && (
                  <Button
                     ripple={true}
                     variant="outlined"
                     className="flex gap-x-4 items-center !text-primary dark:!text-textlight border-primary dark:border-textlight border-2 text-l font-bold font-nunito py-2 px-4"
                  >
                     <FaGithubSquare
                        title="Open project in github"
                        className={
                           portfolio
                              ? "project-card-link-btn-icon light-text"
                              : "project-card-link-btn-icon dark-text"
                        }
                        size="30px"
                     />
                     View Code
                  </Button>
               )}
               {project.website && (
                  <Button
                     ripple={true}
                     variant="filled"
                     className="flex gap-x-4 py-2 px-4 items-center bg-primary !text-textlight dark:text-textlight text-l font-bold font-nunito hover:!shadow-lg hover:!shadow-indigo-500/40 w-px-100"
                  >
                     <HiLink
                        title="Open live project website"
                        className={
                           portfolio
                              ? "project-card-link-btn-icon light-text"
                              : "project-card-link-btn-icon dark-text"
                        }
                        size="30px"
                     />
                     View live
                  </Button>
               )}
            </div> */}
         </div>
      </m.div>
   );
};

export default explorerProjectCard;
