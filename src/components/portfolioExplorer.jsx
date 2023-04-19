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
import { useEffect } from "react";

const PortfolioExplorer = ({ setShowFull, allIcons, projects }) => {
   //state for each select input selected state
   const [selectedType, setSelectedType] = useState("all");
   const [selectedTechnology, setSelectedTechnology] = useState("all");
   const [selectedLibrary, setSelectedLibrary] = useState("all");
   const [selectedName, setSelectedName] = useState("all");
   const [displayProjects, setDisplayProjects] = useState([]);

   //all values for
   let technologies = [];
   let libraries = [];
   let filteredProjects = [];

   const filterByType = (arrProjects) => {
      console.log("filterByType: selectedType", selectedType);
      switch (selectedType) {
         case "featured":
            return arrProjects.filter((project) => project.featured === true);
         case "all":
            return [...arrProjects];
         default:
            return [...arrProjects];
      }
   };

   //get array of included projects
   const includedProjects = projects.filter(
      (project) => project.included === true
   );

   //filter projects according to selected 'selectedType' [all/featured]
   filteredProjects = filterByType(includedProjects);

   useEffect(() => {
      setDisplayProjects(() => filteredProjects);
   }, []);

   // useEffect(() => {
   //    setDisplayProjects(filteredProjects);
   // }, []);

   //GET VALUES FOR SELECT INPUTS
   //get technologies

   const getTechnologies = () => {
      return [
         ...new Set(
            filteredProjects.reduce(
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
            filteredProjects.reduce(
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

   //get names
   //

   //handle selection from select inputs
   const handleTypeChange = (e) => {
      setSelectedType(() => e.target.value);
      console.log(`Filter by selectedType ${e.target.value}`);
      //console.log(`Filter by selectedType ${selectedType}`);
      //filteredProjects = filterByType(includedProjects);
      setDisplayProjects(() => filteredProjects);
   };

   const filterProjectsByTechnology = (techName) => {
      return filteredProjects.filter((project) =>
         project.technologies
            .map((technology) => technology.name)
            .includes(techName)
      );
   };

   const filterProjectsByLibrary = (libraryName) => {
      return filteredProjects.filter((project) =>
         project.libraries.map((library) => library.name).includes(libraryName)
      );
   };

   const filterProjectsByName = (projectName) => {
      return filteredProjects.filter(
         (project) => project.projectName === projectName
      );
   };

   const handleTechChange = (e) => {
      setSelectedTechnology(e.target.value);
      setSelectedLibrary("all");
      setSelectedName("all");
      filteredProjects = filterProjectsByTechnology(e.target.value);
      if (e.target.value !== "all") {
         setDisplayProjects(() => filteredProjects);
      }
      technologies = getTechnologies();
      console.log(`Handle technology change ${e.target.value}`);
   };

   const handleLibraryChange = (e) => {
      setSelectedLibrary(e.target.value);
      setSelectedTechnology("all");
      setSelectedName("all");
      if (e.target.value !== "all") {
         filteredProjects = filterProjectsByLibrary(e.target.value);
      }
      setDisplayProjects(() => filteredProjects);
      libraries = getLibraries();
      console.log(`Handle library change ${e.target.value}`);
   };

   const handleNameChange = (e) => {
      setSelectedName(e.target.value);
      setSelectedTechnology("all");
      setSelectedLibrary("all");
      if (e.target.value !== "all") {
         filteredProjects = filterProjectsByName(e.target.value);
      }
      setDisplayProjects(() => filteredProjects);
      console.log(`Handle name change ${e.target.value}`);
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
                           className="font-semibold"
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
                     <h5>AND</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="name"
                           className="font-semibold"
                        >
                           {`Name (${filteredProjects.length})`}
                        </label>
                        <select
                           name="name"
                           onChange={handleNameChange}
                           value={selectedName}
                           className="rounded-md border-primary text-sm"
                        >
                           <option value="all">All</option>

                           {filteredProjects.map((project) => {
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
                     <h5>OR</h5>
                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="technology"
                           className="font-semibold"
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
                     <h5>OR</h5>

                     <div className="flex flex-col gap-y-1 items-center">
                        <label
                           htmlFor="library"
                           className="font-semibold"
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
                  <h4>
                     No. of projects:{" "}
                     <span className="font-semibold">
                        {filteredProjects.length}
                     </span>
                  </h4>
               </div>

               {/* Filtered projects */}
               <div className="projects">
                  {displayProjects.length > 0 ? (
                     <ExplorerProjects
                        projects={displayProjects}
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
