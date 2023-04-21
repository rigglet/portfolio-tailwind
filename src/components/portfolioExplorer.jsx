//react
import { useState } from "react";

//framer motion and styled components
//import { motion as m } from "framer-motion";
import { detailPopUp } from "../styles/animations";
//import Loader from "../components/Loader";
import ExplorerProjects from "../components/explorerProjects";

//components
import CloseButton from "./closeButton";
import SectionTitle from "./sectionTitle";

//icons
import Icon from "./Icon";
import { useEffect } from "react";

const PortfolioExplorer = ({ setShowFull, allIcons, projects }) => {
   //state for each select input selected state
   const [selectedType, setSelectedType] = useState("all");
   const [selectedTechnology, setSelectedTechnology] = useState("all");
   const [selectedLibrary, setSelectedLibrary] = useState("all");
   const [selectedName, setSelectedName] = useState("all");

   //all values for
   let technologies = [];
   let libraries = [];

   const includedProjects = projects.filter(
      (project) => project.included === true
   );

   const filterByType = (type, arrProjects) => {
      //console.log("filterByType: selectedType", selectedType);
      switch (type) {
         case "featured":
            return arrProjects.filter((project) => project.featured === true);
         case "all":
            return [...arrProjects];
         default:
            return [...arrProjects];
      }
   };

   const [displayProjects, setDisplayProjects] = useState([]);

   useEffect(() => {
      console.log("Set display projects on load");
      setDisplayProjects(filterByType(selectedType, includedProjects));
   }, []);

   //GET VALUES FOR SELECT INPUTS
   //get technologies
   const getTechnologies = () => {
      return [
         ...new Set(
            displayProjects.reduce(
               (accumulator, project) => [
                  ...accumulator,
                  ...project.technologies.map((technology) => technology.name),
               ],
               []
            )
         ),
      ];
   };

   //get libraries
   const getLibraries = () => {
      return [
         ...new Set(
            displayProjects.reduce(
               (accumulator, project) => [
                  ...accumulator,
                  ...project.libraries.map((library) => library.name),
               ],
               []
            )
         ),
      ];
   };

   //initialise select options
   libraries = getLibraries();
   technologies = getTechnologies();

   //handle selection from select inputs
   const handleTypeChange = (e) => {
      setSelectedType(() => e.target.value);
      setDisplayProjects(() => filterByType(e.target.value, includedProjects));
   };

   const filterProjectsByTechnology = (techName) => {
      return includedProjects.filter((project) =>
         project.technologies
            .map((technology) => technology.name)
            .includes(techName)
      );
   };

   const filterProjectsByLibrary = (libraryName) => {
      return includedProjects.filter((project) =>
         project.libraries.map((library) => library.name).includes(libraryName)
      );
   };

   const filterProjectsByName = (projectName) => {
      return includedProjects.filter(
         (project) => project.projectName === projectName
      );
   };

   const handleNameChange = (e) => {
      //console.log(`Handle name change ${e.target.value}`);

      setSelectedName(e.target.value);
      setSelectedTechnology("all");
      setSelectedLibrary("all");

      if (e.target.value !== "all") {
         setDisplayProjects(filterProjectsByName(e.target.value));
      } else {
         setDisplayProjects(filterByType(selectedType, includedProjects));
      }
   };

   const handleTechChange = (e) => {
      //console.log(`Handle technology change ${e.target.value}`);

      setSelectedTechnology(e.target.value);
      setSelectedLibrary("all");
      setSelectedName("all");

      if (e.target.value !== "all") {
         setDisplayProjects(filterProjectsByTechnology(e.target.value));
      } else {
         setDisplayProjects(filterByType(selectedType, includedProjects));
      }
      //technologies = getTechnologies();
   };

   const handleLibraryChange = (e) => {
      //console.log(`Handle library change ${e.target.value}`);

      setSelectedLibrary(e.target.value);
      setSelectedTechnology("all");
      setSelectedName("all");

      if (e.target.value !== "all") {
         setDisplayProjects(filterProjectsByLibrary(e.target.value));
      } else {
         setDisplayProjects(filterByType(selectedType, includedProjects));
      }
      //libraries = getLibraries();
   };

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
                           className="font-semibold dark:text-textlight"
                        >
                           {`Type`}
                        </label>
                        <select
                           name="type"
                           onChange={handleTypeChange}
                           value={selectedType}
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
                     <h5 className="dark:text-textlight">AND</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="name"
                           className="font-semibold dark:text-textlight"
                        >
                           {`Name (${
                              filterByType(selectedType, includedProjects)
                                 .length
                           })`}
                        </label>
                        <select
                           name="name"
                           onChange={handleNameChange}
                           value={selectedName}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>

                           {includedProjects.map((project) => {
                              if (
                                 (selectedType === "featured" &&
                                    project.featured) ||
                                 selectedType === "all"
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
                     <h5 className="dark:text-textlight">OR</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="technology"
                           className="font-semibold dark:text-textlight"
                        >
                           {`Technology (${technologies.length})`}
                        </label>
                        <select
                           name="technology"
                           onChange={handleTechChange}
                           value={selectedTechnology}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>
                           {technologies.map((technology) => (
                              <option
                                 value={technology}
                                 key={technology}
                              >
                                 {technology}
                              </option>
                           ))}
                        </select>
                     </div>
                     <h5 className="dark:text-textlight">OR</h5>

                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="library"
                           className="font-semibold dark:text-textlight"
                        >
                           {`Library (${libraries.length})`}
                        </label>
                        <select
                           name="library"
                           onChange={handleLibraryChange}
                           value={selectedLibrary}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>
                           {libraries.map((library) => (
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
                  <h4 className="dark:text-textlight">
                     No. of projects:{" "}
                     <span className="font-semibold dark:text-textlight">
                        {displayProjects.length}
                     </span>
                  </h4>
               </div>

               {/* Display projects */}
               <div className="projects">
                  {displayProjects.length > 0 ? (
                     <ExplorerProjects
                        projects={displayProjects}
                        allIcons={allIcons}
                     />
                  ) : (
                     <h1 className="noresult dark:text-textlight">
                        No projects to show.
                     </h1>
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
