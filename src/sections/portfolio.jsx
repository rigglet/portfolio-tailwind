import { useState, useEffect } from "react";

//framer motion and styled components
import { motion as m } from "framer-motion";
import { Button } from "@material-tailwind/react";

//animations
// import {
//    fadeInOut,
//    slideLeft,
//    scaleUpRight,
//    slideUp,
// } from "../styles/animations";

//components
import Projects from "../components/projects";
import PortfolioExplorer from "../components/portfolioExplorer";
//import Loader from "../components/Loader";
import Icon from "../components/Icon";
import SectionTitle from "../components/sectionTitle";
import Loader from "../components/loader";

//data
import { getCollection } from "../api/api";
import { buttonVariants } from "../styles/animations";

const Portfolio = ({
   portfolioRef,
   portfolioControls,
   //portfolioInView,
   allIcons,
   showNav,
   showDropMenu,
}) => {
   const [loading, setLoading] = useState(true);
   const [showFull, setShowFull] = useState(false);
   const [projects, setProjects] = useState([]);
   const [text, setText] = useState([]);
   const [loadingText, setLoadingText] = useState(true);

   async function getProjects() {
      return await getCollection("projects");
   }

   async function getText() {
      return await getCollection("texts");
   }

   useEffect(() => {
      getProjects()
         .then((results) => {
            if (results.status === 200) {
               setProjects(() => results.data);
            }
         })
         .then(() => {
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });

      getText()
         .then((results) => {
            if (results.status === 200) {
               setText(results.data);
            }
         })
         .then(() => {
            setLoadingText(false);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const featuredProjects = projects.filter((project) => {
      return project.featured === true && project.included === true;
   });

   const strWorkingOnText = text.filter((t) => t.name === "working_on")[0]
      ?.content;

   const handleExploreClick = () => {
      setShowFull(true);
   };

   return (
      <section
         ref={portfolioRef}
         showNav={showNav}
         className={`flex flex-col sm:pt-10 lg:pt-24 gap-y-8 w-full h-auto min-h-screen bg-bglight dark:bg-bgdark ${
            showDropMenu && "blur-sm"
         }`}
      >
         <div className="flex justify-between">
            <SectionTitle title="Portfolio" />

            <m.div
               variants={buttonVariants}
               initial="initial"
               animate="animate"
               whileHover={{ scale: 1.05 }}
               onClick={handleExploreClick}
            >
               <Button
                  ripple={true}
                  variant="outlined"
                  className="!text-primary dark:!text-textlight border-primary dark:border-textlight border-2 text-l font-bold font-nunito p-2"
               >
                  All Projects
               </Button>
            </m.div>
         </div>

         <div className="h-auto">
            {loading ? (
               <div className="w-full flex justify-center items-start p-8 h-fit">
                  <Loader rows="3" />
               </div>
            ) : (
               <div className="h-auto">
                  {featuredProjects.length > 0 ? (
                     <Projects
                        projects={featuredProjects}
                        allIcons={allIcons}
                     />
                  ) : (
                     <h1 className="noresult">No projects to show.</h1>
                  )}
               </div>
            )}

            {showFull && (
               <PortfolioExplorer
                  explorer={true}
                  setShowFull={setShowFull}
                  allIcons={allIcons}
                  projects={projects}
               />
            )}
         </div>

         {/* "Currently working on" banner */}
         {loadingText ? (
            <div className="w-full flex justify-center items-start p-8 h-fit">
               <Loader rows="1" />
            </div>
         ) : (
            <div className=" h-14 flex w-full rounded-lg justify-center items-center bg-gradient-to-b from-secondary to-primary">
               <div className="flex items-center justify-around gap-x-4">
                  <Icon
                     icon="FaLaptopCode"
                     color="#e2e2e2"
                     size="40px"
                     allIcons={allIcons}
                  />
                  <div className="flex flex-col items-start justify-around text-m !text-textlight font-poppins">
                     <h1 className="font-semibold">Currently working on:</h1>
                     <p className="font-normal">{strWorkingOnText}</p>
                  </div>
               </div>
            </div>
         )}
      </section>
   );
};

export default Portfolio;
