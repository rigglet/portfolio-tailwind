//react
import { useState } from "react";

//framer motion and styled components
//import { motion as m } from "framer-motion";
import { detailPopUp } from "../styles/animations";
//import Loader from "../components/Loader";
import ExplorerProjects from "../components/explorerProjects";

//data
//import { getCollection } from "../api/api";

//components
import CloseButton from "./closeButton";
import SectionTitle from "./sectionTitle";

//icons
import Icon from "./Icon";

const PortfolioExplorer = ({ setShowFull, allIcons, projects }) => {
   //const [projects, setProjects] = useState([]);

   const includedProjects = projects.filter(
      (project) => project.included === true
   );

   //const [loading, setLoading] = useState(true);
   const [type, setType] = useState("all");
   const [tech, setTech] = useState("all");
   const [library, setLibrary] = useState("all");
   const [name, setName] = useState("all");

   const handleTypeChange = (e) => {
      setType(e.target.value);
   };
   const handleTechChange = (e) => {
      setTech(e.target.value);
      setLibrary("all");
      setName("all");
   };
   const handleLibraryChange = (e) => {
      setLibrary(e.target.value);
      setTech("all");
      setName("all");
   };
   const handleNameChange = (e) => {
      setName(e.target.value);
      setTech("all");
      setLibrary("all");
   };

   const filterByType = (arrProjects = []) => {
      switch (type) {
         case "featured":
            return arrProjects.filter((project) => project.featured === true);
         case "all":
            return [...arrProjects];
         default:
            return [...arrProjects];
      }
   };

   const getFilteredProjectsBySelection = (arrProjects = []) => {
      //filter projects by selection
      //map over selection names for each project then check if resulting array includes the currently selected item
      //if so return as part of the filtered array
      if (tech !== "all") {
         return arrProjects.filter((proj) => {
            return proj.technologies.map((t) => t.name).includes(tech);
         });
      } else if (library !== "all") {
         return arrProjects.filter((proj) => {
            return proj.libraries.map((l) => l.name).includes(library);
         });
      } else if (name !== "all") {
         return arrProjects.filter((proj) => proj.projectName === name);
      } else {
         return [...arrProjects];
      }
   };

   let projectsByType = filterByType(includedProjects);
   let filteredProjects = filterByType(includedProjects);
   //getFilteredProjectsBySelection()
   // getFilteredProjectsBySelection(filteredProjects);
   // let filteredProjects = getFilteredProjectsBySelection(
   //    filterByType(includedProjects)
   // );

   const getTechnologiesForAllProjects = (projects) => {
      let projectSet = new Set();

      projects.map((project) => {
         return project.technologies.map((t) => projectSet.add(t.name));
      });

      return projectSet;
   };

   const getLibrariesForAllProjects = (projects) => {
      let projectSet = new Set();

      projects.map((project) => {
         return project.libraries.map((l) => projectSet.add(l.name));
      });

      return projectSet;
   };

   let technologiesForAllProjects = [
      ...getTechnologiesForAllProjects(projectsByType),
   ];
   let librariesForAllProjects = [
      ...getLibrariesForAllProjects(projectsByType),
   ];

   //close modal
   const projectClose = () => {
      setShowFull(false);
   };

   return (
      <div className="overscroll-contain z-[60] fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-[rgba(256,256,256,0.5)] py-[5vh] font-poppins">
         <main
            className="flex flex-col justify-start px-8 py-6 shadow-md shadow-secondary relative z-[70] w-[95vw] h-[100%] border-[0.05rem] border-secondary rounded-md bg-bglight dark:bg-bgdark text-textdark  overflow-y-scroll"
            variants={detailPopUp}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            <CloseButton closeFunction={projectClose} />
            <SectionTitle title="Explore Projects" />

            <div className="flex flex-col gap-y-8">
               {/* {loading ? (
                  <>{/* <Loader /> }</>
               ) : (
                  <> */}
               <div className="w-full rounded-md flex flex-col p-2 gap-4 justify-center items-center text-sm mt-6">
                  <div className="flex flex-col md:flex-row items-center justify-evenly flex-wrap w-full gap-2">
                     <Icon
                        icon="FiFilter"
                        //color="#d478d1"
                        color="#5156b8"
                        size="30px"
                        className="title-icon"
                        allIcons={allIcons}
                     />
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="type"
                           className="font-semibold"
                        >
                           {`Type`}
                        </label>
                        <select
                           name="type"
                           onChange={handleTypeChange}
                           value={type}
                           className="rounded-md border-primary text-sm"
                        >
                           <option
                              key="all"
                              value="all"
                           >
                              All
                           </option>
                           <option
                              key="featured"
                              value="featured"
                           >
                              Featured
                           </option>
                        </select>
                     </div>
                     <h5>AND</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="name"
                           className="font-semibold"
                        >
                           {`Name (${projectsByType.length})`}
                        </label>
                        <select
                           name="name"
                           onChange={handleNameChange}
                           value={name}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>

                           {includedProjects.map((project) => {
                              if (
                                 (type === "featured" && project.featured) ||
                                 type === "all"
                              ) {
                                 return (
                                    <option
                                       value={project.projectName}
                                       key={project.projectName}
                                    >
                                       {project.projectName}
                                    </option>
                                 );
                              }
                           })}
                        </select>
                     </div>
                     <h5>OR</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="technology"
                           className="font-semibold"
                        >
                           {`Technology (${includedProjects.length})`}
                        </label>
                        <select
                           name="technology"
                           onChange={handleTechChange}
                           value={tech}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>
                           {technologiesForAllProjects.map((tech) => (
                              <option
                                 value={tech}
                                 key={tech}
                              >
                                 {tech}
                              </option>
                           ))}
                        </select>
                     </div>
                     <h5>OR</h5>

                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="library"
                           className="font-semibold"
                        >
                           {`Library (${librariesForAllProjects.length})`}
                        </label>
                        <select
                           name="library"
                           onChange={handleLibraryChange}
                           value={library}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>
                           {librariesForAllProjects.map((library) => (
                              <option
                                 value={library}
                                 key={library}
                              >
                                 {library}
                              </option>
                           ))}
                        </select>
                     </div>
                  </div>
                  {/* No of projects in filtered results */}
                  <h4>
                     No. of projects:{" "}
                     <span className="font-semibold">
                        {filteredProjects.length}
                     </span>
                  </h4>
               </div>

               {/* Filtered projects */}
               <div className="projects">
                  {filteredProjects.length > 0 ? (
                     <ExplorerProjects
                        projects={filteredProjects}
                        allIcons={allIcons}
                     />
                  ) : (
                     <h1 className="noresult">No projects to show.</h1>
                  )}
               </div>
               {/* </>
               )} */}
            </div>
         </main>
      </div>
   );
};

export default PortfolioExplorer;
