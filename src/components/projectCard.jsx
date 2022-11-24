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

const ProjectCard = ({
   project,
   handleProjectClick,
   explorer = false,
   portfolio = false,
   showStar = false,
   allIcons,
   mainImage,
}) => {
   return (
      <div className="h-auto w-full rounded-xl flex flex-wrap gap-y-8 font-poppins border-secondary border-1 bg-input dark:bg-[#2B2B37] odd:flex-row-reverse">
         {/* image container */}
         <div className={`flex-1 flex items-center justify-center p-4`}>
            <div
               className={`z-10 flex items-center justify-center relative h-full`}
            >
               <img
                  src={screen}
                  alt="computer screen"
                  onClick={() => handleProjectClick(project)}
                  className="z-20 cursor-pointer min-w-[300px] max-w-[33vw]"
               />
               {mainImage?.fileName && (
                  <img
                     src={`${serverBaseURL()}/images/${mainImage?.fileName}`}
                     alt="project"
                     className="absolute top-2 left-0 z-10 rounded-md h-[70%] w-auto"
                  />
               )}
            </div>

            {/* bg-[url(${serverBaseURL()}/images/${mainImage?.fileName})] */}
            {/* {project.featured && showStar && (
               <Icon
               icon="FaStar"
                  color="gold"
                  size="25px"
                  title="Featured project"
                  className="featured"
                  allIcons={allIcons}
               />
            )} */}
         </div>

         {/* Information */}
         <div className="flex flex-col p-16 gap-y-4 flex-1 min-w-[400px] justify-between">
            <h4
               className={`font-bold text-primary text-xl 
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
               className={`font-semibold text-textdark dark:text-textlight
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
            {/* <div className="flex justify-around items-center border-bgdark border-2 rounded-lg p-2 text-sm font-semibold uppercase"> */}
            <div className="flex justify-around items-center rounded-lg gap-x-8 text-sm font-semibold uppercase">
               {project.githubLink && (
                  <Button
                     ripple={true}
                     variant="outlined"
                     className="flex gap-x-4 items-center !text-primary border-primary dark:border-textlight dark:!text-textlight border-2 text-l font-bold font-nunito py-2 px-4"
                  >
                     <FaGithubSquare
                        title="Open project in github"
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
                        size="30px"
                     />
                     View live
                  </Button>
               )}
            </div>
         </div>
      </div>
   );
};

export default ProjectCard;
