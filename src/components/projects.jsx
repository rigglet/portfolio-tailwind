import { useState } from "react";
//framer motion and styled components
//import { detailPopUp } from "../styles/animations";
//import useScroll from "../components/useScroll";

//uuid
import { v4 as uuidv4 } from "uuid";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
   //const [currentImage, setCurrentImage] = useState(null);

   //state
   const [currentProject, setCurrentProject] = useState({});
   const [showProjectDetails, setShowProjectDetails] = useState(false);
   const [showGallery, setShowGallery] = useState(false);
   let [imageArray, setImageArray] = useState([]);

   const handleProjectClick = (project) => {
      //document.body.classList.add("pointer-events-none");
      //document.body.classList.add("overflow-y-hidden");
      document.getElementById("portfolio").style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
      setCurrentProject(project);
      setShowProjectDetails(true);
   };

   // const handleImageChange = (image) => {
   //   console.log(image);
   //   setCurrentImage(image);
   // };

   const projectClose = () => {
      //document.body.classList.add("pointer-events-auto");
      //document.body.style.overflowY = "auto";
      setShowProjectDetails(false);
   };

   return (
      <div className="flex flex-wrap flex-col gap-8 h-auto ">
         {showGallery && (
            <div className="w-full h-full fixed top-0 left-0 z-[100] backdrop-blur-md flex items-center justify-center">
               <ImageGallery
                  items={imageArray}
                  showPlayButton={false}
                  thumbnailPosition={"bottom"}
                  showIndex={true}
                  autoPlay={false}
                  showThumbnails={false}
                  showBullets={false}
                  showNav={true}
                  showFullscreenButton={false}
                  onClick={() => setShowGallery(!showGallery)}
               />
            </div>
         )}
         {showProjectDetails && (
            <ProjectDetailView
               id={uuidv4()}
               project={currentProject}
               projectClose={projectClose}
               allIcons={allIcons}
               showGallery={showGallery}
               setShowGallery={setShowGallery}
               setImageArray={setImageArray}
               items={imageArray}
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
                  setShowGallery={setShowGallery}
               />
            );
         })}
      </div>
   );
};

export default Projects;
