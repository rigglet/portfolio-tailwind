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
//import { AiOutlineCalendar } from "react-icons/ai";
import underline from "../img/underline.svg";

//components
import CloseButton from "./closeButton";
import IconSection from "./IconSection";
import FeatureBox from "./featureBox";

//uuid
import { v4 as uuidv4 } from "uuid";

//dates
//import { DateTime } from "luxon";

//image gallery
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SectionTitle from "./sectionTitle";

const FeaturedProject = ({ project, projectClose, allIcons }) => {
   let [imageArray, setImageArray] = useState([]);
   //let [mainImage, setMainImage] = useState({});

   //console.log(project);

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
   }, [project.screenshots]);

   //console.log(mainImage);

   return (
      <section className="z-[60] fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-[rgba(256,256,256,0.5)] py-[5vh] font-poppins">
         <section
            className="flex flex-col justify-start px-8 py-6 shadow-md shadow-secondary relative z-[70] w-[95vw] h-[100%] border-[0.05rem] border-secondary rounded-md bg-bglight dark:bg-bgdark text-textdark dark:text-textlight overflow-y-scroll"
            variants={detailPopUp}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <CloseButton closeFunction={projectClose} />

            <div className="flex">
               <div className="flex items-start">
                  <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
                     Project Details
                     <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
                  </h1>
               </div>
            </div>

            <div className="flex gap-4 flex-wrap mt-4">
               <fieldset className="details border-2 border-red-600 flex flex-col gap-y-4 items-center">
                  <legend>
                     <SectionTitle title="Overview" />
                  </legend>
                  <div className="">
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
                  <div className="version-featured flex gap-4">
                     <div className="flex flex-col items-center gap-y-2">
                        <label
                           htmlFor="version"
                           className="font-semibold"
                        >
                           Version
                        </label>
                        <p>{project?.version ? project?.version : "Version"}</p>
                     </div>
                     <div className="flex flex-col items-center gap-y-2">
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
                  </div>

                  <div className="addresses flex gap-4">
                     <div className="flex flex-col items-center gap-y-2">
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

                     <div className="flex flex-col items-center gap-y-2">
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

                     <div className="flex flex-col items-center gap-y-2">
                        <label className="font-semibold">
                           Walkthough video
                        </label>
                        <a
                           href={project?.walkthroughVideo}
                           referrerpolicy="no-referrer"
                           rel="noreferrer"
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
               </fieldset>

               <fieldset className="images flex-1">
                  <legend>
                     <SectionTitle title="Screenshots" />
                  </legend>

                  {imageArray?.length > 0 ? (
                     <ImageGallery
                        items={imageArray}
                        showPlayButton={false}
                        thumbnailPosition={"bottom"}
                        showIndex={true}
                        autoPlay={false}
                        //showThumbnails={false}
                        showBullets={false}
                        showNav={true}
                     />
                  ) : (
                     <Icon
                        icon="BsImageFill"
                        color="#65617d"
                        size="300px"
                        title="project"
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
                <Icon
                  icon="BsImageFill"
                  color="#65617d"
                  size="50%"
                  title="project"
                />
              )} */}
               </fieldset>

               <div className="flex w-full flex-wrap gap-4">
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

               {/* <fieldset className="dates">
            <legend>
              Dates <AiOutlineCalendar />
            </legend>
            <div className="input-item">
              <label htmlFor="started">Started:</label>
              <p>
                {DateTime.fromISO(project?.startedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
            <div className="input-item">
              <label htmlFor="started">Completed:</label>
              <p>
                {DateTime.fromISO(project?.completedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
            <div className="input-item">
              <label htmlFor="started">Added:</label>
              <p>
                {DateTime.fromISO(project?.addedDate)
                  .setLocale("uk")
                  .toLocaleString({
                    timeZoneName: "short",
                  })}
              </p>
            </div>
          </fieldset> */}
            </div>
         </section>
      </section>
   );
};

export default FeaturedProject;
