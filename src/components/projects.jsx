import { useState } from "react";
//framer motion and styled components
//import { detailPopUp } from "../styles/animations";
//import useScroll from "../components/useScroll";

//uuid
import { v4 as uuidv4 } from "uuid";

//components
import ProjectCard from "./projectCard";
import ProjectDetailView from "./featuredProjectView";

const Projects = ({
   projects,
   explorer = false,
   portfolio = false,
   showStar = false,
   allIcons,
}) => {
   //const [element, controls] = useScroll();

   //state
   const [currentProject, setCurrentProject] = useState({});
   const [showProjectDetails, setShowProjectDetails] = useState(false);
   //const [currentImage, setCurrentImage] = useState(null);

   const handleProjectClick = (project) => {
      //document.body.style.overflowY = "hidden";
      setCurrentProject(project);
      setShowProjectDetails(true);
   };

   // const handleImageChange = (image) => {
   //   console.log(image);
   //   setCurrentImage(image);
   // };

   const projectClose = () => {
      document.body.style.overflowY = "auto";
      setShowProjectDetails(false);
   };

   return (
      <div className="flex flex-wrap flex-col gap-8 h-auto">
         {showProjectDetails && (
            <ProjectDetailView
               id={uuidv4()}
               project={currentProject}
               projectClose={projectClose}
               allIcons={allIcons}
            />
         )}

         {projects.map((project) => {
            const mainImage = project.screenshots?.filter((image) => {
               return image._id === project?.mainImage;
            })[0];

            return (
               <ProjectCard
                  key={uuidv4()}
                  project={project}
                  mainImage={mainImage}
                  handleProjectClick={handleProjectClick}
                  portfolio={portfolio}
                  explorer={explorer}
                  showStar={showStar}
                  allIcons={allIcons}
               />
            );
         })}
      </div>
   );
};

export default Projects;
