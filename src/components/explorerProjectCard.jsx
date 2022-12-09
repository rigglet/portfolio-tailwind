import { serverBaseURL } from "../config/config";
//framer motion and styled components
import { motion as m } from "framer-motion";
//uuid
import { v4 as uuidv4 } from "uuid";
//components
import Icon from "./Icon";
import ImageComponent from "./imageComponent";

const explorerProjectCard = ({
   project,
   handleProjectClick,
   portfolio = false,
   allIcons,
   mainImage,
}) => {
   return (
      <m.div className="h-auto rounded-xl flex flex-col font-poppins border-secondary border-2 bg-input w-1/4 min-w-[300px]">
         {/* image container */}
         <div className={`flex items-center justify-center cursor-pointer m-4`}>
            {mainImage?.fileName && (
               // <img
               //    src={`${serverBaseURL()}/images/${mainImage?.fileName}`}
               //    alt="project"
               //    className="z-10 rounded-md w-[300px] min-w-[100%]"
               //    onClick={() => handleProjectClick(project)}
               // />
               <ImageComponent
                  //clickEvent={() => handleProjectClick(project)}
                  clickEvent={{
                     isFunc: true,
                     param: project,
                     function: handleProjectClick,
                  }}
                  fileName={mainImage?.fileName}
                  allIcons={allIcons}
                  key={uuidv4()}
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
         </div>
      </m.div>
   );
};

export default explorerProjectCard;
