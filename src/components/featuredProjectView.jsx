import { useEffect, useState } from "react";
import { serverBaseURL } from "../config/config";

//API
//import { getDocumentById } from "../api/api";

//framer motion and styled components
import { motion as m } from "framer-motion";
import { detailPopUp } from "../styles/animations";

//icons
//import { MdWeb } from "react-icons/md";
import Icon from "./Icon";
//import { AiOutlineCalendar} from "react-icons/ai";
import underline from "../img/underline.svg";
import placeholderImage from "../img/college.jpg";

//components
import CloseButton from "./closeButton";
import IconSection from "./IconSection";
import FeatureBox from "./featureBox";
import ImageComponent from "./imageComponent";

//uuid
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "./sectionTitle";

const FeaturedProject = ({
   project,
   projectClose,
   allIcons,
   showGallery,
   setShowGallery,
   setImageArray,
   imageArray,
   items,
}) => {
   useEffect(() => {
      setImageArray(
         project.screenshots?.map((image) => {
            return {
               original: `${serverBaseURL()}/images/${image?.fileName}`,
               thumbnail: `${serverBaseURL()}/images/${image?.fileName}`,
            };
         })
      );
      // setMainImage(
      //   project.screenshots?.filter((image) => {
      //     return image._id === project?.mainImage;
      //   })[0]
      // );
   }, [project.screenshots, setImageArray]);

   return (
      <section className="z-[60] fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-[rgba(256,256,256,0.5)] py-[5vh] font-poppins">
         <section
            className="flex flex-col justify-start px-8 py-6 shadow-md shadow-secondary relative z-[70] w-[95vw] h-[100%] border-[0.05rem] border-secondary rounded-md bg-bglight dark:bg-bgdark text-textdark  overflow-y-scroll"
            variants={detailPopUp}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <CloseButton closeFunction={projectClose} />

            <SectionTitle title="Project Details" />

            <div className="flex gap-4 flex-wrap mt-4">
               <FeatureBox title="Overview">
                  <div className="my-4 text-textdark dark:text-textlight">
                     <h1 className="font-semibold">
                        {project?.projectName
                           ? project?.projectName
                           : "Project name"}
                     </h1>
                     <p>
                        {project?.projectDescription
                           ? project?.projectDescription
                           : "Description"}
                     </p>
                  </div>

                  <div className="flex items-start gap-2 justify-evenly flex-wrap text-textdark dark:text-textlight">
                     <div className="flex flex-col items-center gap-y-1">
                        <label
                           htmlFor="version"
                           className="font-semibold"
                        >
                           Version
                        </label>
                        <p>{project?.version ? project?.version : "Version"}</p>
                     </div>
                     <div className="flex flex-col items-center gap-y-1">
                        <label
                           htmlFor="featured"
                           className="font-semibold"
                        >
                           Featured
                        </label>
                        <div className="version-featured-item">
                           {project.featured ? (
                              <Icon
                                 icon="FaStar"
                                 color="gold"
                                 size="25px"
                                 title="Featured project"
                                 allIcons={allIcons}
                              />
                           ) : (
                              <Icon
                                 icon="FaRegStar"
                                 color="#313131"
                                 size="25px"
                                 title="Not featured project"
                                 allIcons={allIcons}
                              />
                           )}
                        </div>
                     </div>

                     <div className="flex flex-col items-center gap-y-1">
                        <label className="font-semibold">Github</label>
                        <a href={project?.githubLink}>
                           <Icon
                              icon="FaGithub"
                              color="black"
                              size="50px"
                              title="Github link"
                              allIcons={allIcons}
                           />
                        </a>
                     </div>

                     <div className="flex flex-col items-center gap-y-1">
                        <label className="font-semibold">Live site</label>
                        <a href={project?.website}>
                           <Icon
                              icon="CgWebsite"
                              color="black"
                              size="50px"
                              title="Live site link"
                              allIcons={allIcons}
                           />
                        </a>
                     </div>

                     <div className="flex flex-col items-center gap-y-1">
                        <label className="font-semibold">
                           Walkthough video
                        </label>
                        <a
                           href={project?.walkthroughVideo}
                           referrerpolicy="no-referrer"
                           rel="noReferrer"
                           target="_blank"
                        >
                           <Icon
                              icon="FaYoutube"
                              color="#ff0000"
                              size="50px"
                              title="Site walkthrough link"
                              allIcons={allIcons}
                           />
                        </a>
                     </div>
                  </div>
               </FeatureBox>

               <FeatureBox title="Screenshots">
                  <p className="font-semibold text-textdark my-4 text-center text-secondary">
                     Click image to zoom, click again to close
                  </p>
                  <div className="w-[100%] flex flex-wrap gap-4 justify-evenly p-4">
                     {project.screenshots.map((screenshot) => {
                        return (
                           <ImageComponent
                              setShowGallery={setShowGallery}
                              showGallery={showGallery}
                              fileName={screenshot.fileName}
                              allIcons={allIcons}
                              key={uuidv4()}
                           />
                        );
                     })}
                  </div>
               </FeatureBox>

               <div className="flex w-full flex-wrap gap-4 text-textdark dark:text-textlight">
                  {project?.features?.length > 0 && (
                     <FeatureBox title="Features">
                        {project?.features?.map((feature) => (
                           <div
                              className="flex grow"
                              key={uuidv4()}
                           >
                              <Icon
                                 icon="GoArrowSmallRight"
                                 className="text-primary"
                                 size="25px"
                                 title="Highlights icon"
                                 allIcons={allIcons}
                              />
                              <h4>{feature}</h4>
                           </div>
                        ))}
                     </FeatureBox>
                  )}

                  {project?.highlights?.length > 0 && (
                     <FeatureBox title="Highlights">
                        {project?.highlights?.map((highlight) => (
                           <div
                              className="flex grow"
                              key={uuidv4()}
                           >
                              <Icon
                                 icon="GoArrowSmallRight"
                                 className="text-primary"
                                 size="25px"
                                 title="Highlights icon"
                                 allIcons={allIcons}
                              />
                              <h4>{highlight}</h4>
                           </div>
                        ))}
                     </FeatureBox>
                  )}
               </div>

               {project?.technologies?.length > 0 && (
                  <FeatureBox title="Technologies">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={project.technologies}
                     />
                  </FeatureBox>
               )}

               {project?.packages?.length > 0 && (
                  <FeatureBox title="Packages">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={project.packages}
                     />
                  </FeatureBox>
               )}

               {project?.libraries?.length > 0 && (
                  <FeatureBox title="Libraries">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={project.libraries}
                     />
                  </FeatureBox>
               )}
            </div>
         </section>
      </section>
   );
};

export default FeaturedProject;
