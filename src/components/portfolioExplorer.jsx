//react
import { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";

//framer motion and styled components
import { motion as m } from "framer-motion";
import { detailPopUp } from "../styles/animations";
//import Loader from "../components/Loader";
import ExplorerProjects from "../components/explorerProjects";

//data
import { getCollection } from "../api/api";

//uuid
//import { v4 as uuidv4 } from "uuid";
//import { serverBaseURL } from "../config/config";

//components
import CloseButton from "./closeButton";
import SectionTitle from "./sectionTitle";

//dates
//import { DateTime } from "luxon";

//image gallery
//import ImageGallery from "react-image-gallery";
//import "react-image-gallery/styles/css/image-gallery.css";

//icons
import Icon from "./Icon";

const PortfolioExplorer = ({
   portfolio = false,
   explorer = false,
   setShowFull,
   allIcons,
}) => {
   const [projects, setProjects] = useState([]);
   const [loading, setLoading] = useState(true);
   const [type, setType] = useState("all");
   const [tech, setTech] = useState("all");
   const [library, setLibrary] = useState("all");
   const [name, setName] = useState("all");
   const [technologies, setTechnologies] = useState([]);
   const [libraries, setLibraries] = useState([]);

   useEffect(() => {
      async function getProjects() {
         return await getCollection("projects");
      }
      async function getTechnologies() {
         return await getCollection("technologies");
      }
      async function getLibraries() {
         return await getCollection("libraries");
      }

      getProjects()
         .then((results) => {
            if (results.status === 200) {
               setProjects(
                  results.data.filter((project) => project.included === true)
               );
            }
         })
         .then(() => {
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });

      getTechnologies()
         .then((results) => {
            if (results.status === 200) {
               setTechnologies(results.data);
            }
         })
         .then(() => {
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });

      getLibraries()
         .then((results) => {
            if (results.status === 200) {
               setLibraries(results.data);
            }
         })
         .then(() => {
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

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

   const filterByType = () => {
      switch (type) {
         case "featured":
            return projects.filter((project) => project.featured === true);
         case "all":
            return [...projects];
         default:
            return [...projects];
      }
   };

   const filterProjects = () => {
      const filteredProjects = filterByType();

      //filter projects by technology
      //map over technology names for each project then check if resulting array includes the currently selected technology
      //if so return as part of the filtered array
      if (tech !== "all") {
         return filteredProjects.filter((proj) => {
            return proj.technologies.map((t) => t.name).includes(tech);
         });
      } else if (library !== "all") {
         return filteredProjects.filter((proj) => {
            return proj.libraries.map((l) => l.name).includes(library);
         });
      } else if (name !== "all") {
         return filteredProjects.filter((proj) => proj.projectName === name);
      } else {
         return [...filteredProjects];
      }
   };

   const projectClose = () => {
      setShowFull(false);
   };

   return (
      <div className="z-[60] fixed top-0 left-0 flex items-start justify-center w-screen h-screen bg-[rgba(256,256,256,0.5)] py-[5vh] font-poppins">
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
               {loading ? (
                  <>{/* <Loader /> */}</>
               ) : (
                  <>
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
                                 Type
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
                                 Name
                              </label>
                              <select
                                 name="name"
                                 onChange={handleNameChange}
                                 value={name}
                                 className="rounded-md border-primary text-sm"
                              >
                                 <option value="all">All</option>
                                 {projects.map((project) => (
                                    <option
                                       value={project.projectName}
                                       key={project.projectName}
                                    >
                                       {project.projectName}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           <h5>OR</h5>
                           <div className="flex flex-col gap-y-1 items-center">
                              <label
                                 htmlFor="technology"
                                 className="font-semibold"
                              >
                                 Technology
                              </label>
                              <select
                                 name="technology"
                                 onChange={handleTechChange}
                                 value={tech}
                                 className="rounded-md border-primary text-sm"
                              >
                                 <option value="all">All</option>
                                 {technologies.map((tech) => (
                                    <option
                                       value={tech.name}
                                       key={tech.name}
                                    >
                                       {tech.name}
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
                                 Library
                              </label>
                              <select
                                 name="library"
                                 onChange={handleLibraryChange}
                                 value={library}
                                 className="rounded-md border-primary text-sm"
                              >
                                 <option value="all">All</option>
                                 {libraries.map((library) => (
                                    <option
                                       value={library.name}
                                       key={library.name}
                                    >
                                       {library.name}
                                    </option>
                                 ))}
                              </select>
                           </div>
                        </div>
                        <h4>
                           No. of projects:{" "}
                           <span className="projectNumber">
                              {filterProjects().length}
                           </span>
                        </h4>
                     </div>
                     {/* <StyledLine /> */}
                     <div className="projects">
                        {filterProjects().length > 0 ? (
                           <ExplorerProjects
                              projects={filterProjects()}
                              allIcons={allIcons}
                           />
                        ) : (
                           <h1 className="noresult">No projects to show.</h1>
                        )}
                     </div>
                  </>
               )}
            </div>
         </main>
      </div>
   );
};

export default PortfolioExplorer;
