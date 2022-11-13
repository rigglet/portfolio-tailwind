//react
import { useEffect, useState } from "react";

//framer motion and styled components
import { motion } from "framer-motion";
import { detailPopUp } from "../styles/animations";
//import Loader from "../components/Loader";
import Projects from "../components/projects";
//import { MdWeb } from "react-icons/md";
//import { FaStar } from "react-icons/fa";
//import StyledLine from "../styles/styledLine";
//import Select, { components } from "react-select";
//data
import { getCollection } from "../api/api";

//uuid
//import { v4 as uuidv4 } from "uuid";
//import { serverBaseURL } from "../config/config";

//components
//import CloseButton from "./closeButton";

//dates
//import { DateTime } from "luxon";

//image gallery
//import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
      <div>
         <main
            variants={detailPopUp}
            initial="initial"
            animate="animate"
            exit="exit"
         >
            {/* <CloseButton closeFunction={projectClose} /> */}
            <Icon
               icon="MdWeb"
               color="#313131"
               size="50px"
               className="title-icon"
               allIcons={allIcons}
               onClickFunction={projectClose}
            />
            <div className="title-header">
               {/* <MdWeb className="title-icon" /> */}
               <Icon
                  icon="MdWeb"
                  color="#313131"
                  size="50px"
                  className="title-icon"
                  allIcons={allIcons}
               />
               <h1>Explore Projects</h1>
            </div>

            <div className="content">
               {loading ? (
                  <>{/* <Loader /> */}</>
               ) : (
                  <>
                     <div className="options">
                        <div className="filters">
                           <Icon
                              icon="FiFilter"
                              color="#313131"
                              size="30px"
                              className="title-icon"
                              allIcons={allIcons}
                           />
                           <div className="filter">
                              <label htmlFor="type">Type:</label>
                              <select
                                 name="type"
                                 onChange={handleTypeChange}
                                 value={type}
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
                           <h5>- AND -</h5>
                           <div className="filter">
                              <label htmlFor="name">Name:</label>
                              <select
                                 name="name"
                                 onChange={handleNameChange}
                                 value={name}
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
                           <h5>- OR -</h5>
                           <div className="filter">
                              <label htmlFor="technology">Technology:</label>
                              <select
                                 name="technology"
                                 onChange={handleTechChange}
                                 value={tech}
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
                           <h5>- OR -</h5>

                           <div className="filter">
                              <label htmlFor="library">Library:</label>
                              <select
                                 name="library"
                                 onChange={handleLibraryChange}
                                 value={library}
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
                           <Projects
                              projects={filterProjects()}
                              explorer={true}
                              showStar={true}
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

// const StyledOuterContainer = styled(motion.div)`
//    z-index: 1001;
//    position: fixed;
//    top: 0;
//    left: 0;
//    display: flex;
//    align-items: flex-start;
//    justify-content: center;
//    width: 100vw;
//    height: 100vh;
//    background-color: rgba(256, 256, 256, 0.5);
//    //overflow-y: scroll;
//    padding: 5vh 0;
// `;

// const StyledInnerContainer = styled(motion.div)`
//    display: flex;
//    flex-direction: column;
//    justify-items: flex-start;
//    padding: 2rem;
//    box-shadow: 0 0 10px 5px #689ed0;
//    position: relative;
//    z-index: 10;
//    width: 95vw;
//    //min-height: 95vh;
//    height: 90vh;
//    border: 0.05rem #689ed0 solid;
//    border-radius: 4px;
//    background-color: var(--color-light-background);
//    color: #313131;
//    overflow-y: scroll;
//    .featured {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: auto;
//       height: auto;
//       padding: 0.25rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//    }
//    .projects {
//       //border: 1px solid red;
//    }
//    .options {
//       width: 100%;
//       //background: #c6c6c6;
//       border: 2px solid #65617d;
//       border-radius: 4px;
//       padding: 0.5rem;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       row-gap: 1rem;
//       select {
//          background-color: #313131;
//          border-radius: 4px;
//       }
//       h4 {
//          font-weight: 500;
//          .projectNumber {
//             font-weight: bold;
//             font-size: 1.2rem;
//          }
//       }
//    }
//    .filters {
//       width: 100%;
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-around;
//       align-items: stretch;
//       row-gap: 0.5rem;
//       column-gap: 0.5rem;
//       h5 {
//          color: #313131;
//       }
//       .filter {
//          width: auto;
//          display: flex;
//          label {
//             color: #313131;
//             font-weight: 600;
//          }
//       }
//    }
//    h2 {
//       margin-bottom: 1rem;
//       font-weight: lighter;
//    }
//    .arrow {
//       color: #313131;
//       height: 40px;
//       width: 40px;
//       cursor: pointer;
//    }
//    .form-information {
//       //border: 1px solid red;
//       //width: 100%;
//       height: auto;
//       display: flex;
//       //flex-direction: column;
//       //flex-grow: 1;
//       flex-wrap: wrap;
//       row-gap: 2rem;
//       column-gap: 2rem;
//       .top-section {
//          display: flex;
//          align-items: center;
//          gap: 1rem;
//          //justify-content: center;
//          //flex-grow: 1;
//          //flex-wrap: wrap;
//          //border: 1px solid red;
//          .images {
//             display: flex;
//             flex-basis: 50%;
//             flex-grow: 1;
//             flex-shrink: 1;
//             padding: 1rem;
//             box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
//          }
//          .main-image {
//             display: flex;
//             flex-grow: 1;
//             flex-shrink: 2;
//             flex-basis: 45%;
//             max-width: 50%;
//             border-radius: 10px;
//             object-fit: scale-down;
//             border: 2px solid red;
//          }
//          .details {
//             display: flex;
//             //flex-shrink: 0;
//             //flex-shrink: 0;
//             flex-direction: column;
//             flex-basis: 50%;
//             flex-grow: 1;
//             //height: 100%;
//             padding: 1rem;
//             gap: 1rem;
//             //flex-wrap: wrap;
//             box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
//             p {
//                color: whitesmoke;
//                color: rgb(49, 49, 49);
//                //color: black;
//                font-size: 12pt;
//                background: rgba(104, 158, 208, 10%);
//                background: rgba(49, 49, 49, 25%);
//                border-radius: 10px;
//                padding: 0.5rem;
//             }
//             .addresses {
//                display: flex;
//                justify-content: space-evenly;
//                //gap: 1rem;
//                .address-item {
//                   display: flex;
//                   flex-direction: column;
//                   align-items: center;
//                }
//             }
//          }
//       }
//       .dates {
//          display: flex;
//          //flex-direction: column;
//          width: 100%;
//          height: auto;
//          padding: 1rem;
//          //gap: 1rem;
//          justify-content: space-evenly;
//          align-items: center;
//          flex-grow: 1;
//       }
//       .features,
//       .highlights {
//          display: flex;
//          flex-direction: column;
//          //align-items: center;
//          flex-grow: 1;
//          padding: 1rem;
//          //width: 100%;
//          box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
//          .feature-item,
//          .highlight-item {
//             display: flex;
//             align-items: center;
//             justify-content: flex-start;
//          }
//       }
//       .libraries,
//       .technologies,
//       .packages {
//          padding: 1rem;
//          width: 100%;
//          box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
//          ul {
//             list-style-type: none;
//             li {
//                text-decoration: none;
//                width: 100%;
//                border-radius: 4px;
//                margin-bottom: 0.5rem;
//                padding: 0.25rem;
//                background-color: rgba(131, 169, 204, 0.5);
//                font-family: "Poppins", sans-serif;
//                font-weight: 300;
//                font-size: 10pt;
//             }
//          }
//       }
//       fieldset {
//          border-radius: 10px;
//          border: 2px solid #313131;
//          z-index: 2;
//       }
//       legend {
//          z-index: 1;
//          //background: rgb(104, 158, 208, 50%);
//          border-top: 2px solid #313131;
//          border-left: 2px solid #313131;
//          border-right: 2px solid #313131;
//          box-shadow: 0px 0px 10px rgba(101, 97, 125, 1);
//          background: whitesmoke;
//          border-radius: 10px;
//          display: flex;
//          align-items: center;
//          text-align: center;
//          gap: 0.5rem;
//          padding: 0 1rem;
//          font-weight: bold;
//          font-size: 16pt;
//          font-variant-caps: all-small-caps;
//       }
//       .input-item {
//          display: flex;
//          flex-direction: column;
//       }
//       label {
//          font-weight: bold;
//          font-size: 14pt;
//          font-variant-caps: all-small-caps;
//          //margin-bottom: 0.5rem;
//       }
//    }
//    .image-gallery {
//       height: 70vh;
//       width: auto;
//    }
//    .image-gallery-thumbnails-container {
//       max-width: 65vw;
//    }
//    .image-gallery-thumbnails-container img {
//       height: 100px;
//       object-fit: scale-down;
//    }
//    .image-gallery-slide {
//       height: 55vh;
//       //background: white;
//    }
//    .image-gallery-slide img {
//       height: 400px;
//       object-fit: scale-down;
//       object-position: center center;
//    }
//    //fullscreen view
//    .fullscreen .image-gallery-slide {
//       height: 80vh;
//    }
//    .fullscreen .image-gallery-slide img {
//       height: 80vh;
//    }
// `;

export default PortfolioExplorer;
