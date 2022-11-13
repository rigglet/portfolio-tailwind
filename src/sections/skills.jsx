import { useState, useEffect } from "react";
//framer motion and styled components
import { motion as m } from "framer-motion";
import { selection, slideDown, bounceUp } from "../styles/animations";
import { getCollection } from "../api/api";
import FeatureBox from "../components/featureBox";
import IconSection from "../components/IconSection";

const Skills = ({ skillsRef, skillsControls, allIcons }) => {
   const [technologies, setTechnologies] = useState([]);
   const [tools, setTools] = useState([]);

   async function getTechnologies() {
      return await getCollection("technologies");
   }
   async function getTools() {
      return await getCollection("tools");
   }

   useEffect(() => {
      getTechnologies()
         .then((results) => {
            if (results.status === 200) {
               setTechnologies(results.data);
            }
         })
         .catch((err) => {
            console.log("Skills: get Technologies error: ", err);
         });

      getTools()
         .then((results) => {
            if (results.status === 200) {
               setTools(results.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   const frontend = technologies.filter((t) => t.category === "frontend");
   const backend = technologies.filter((t) => t.category === "backend");
   const database = technologies.filter((t) => t.category === "database");
   const infrastructure = technologies.filter(
      (t) => t.category === "infrastructure"
   );
   const other = technologies.filter(
      (t) =>
         t.category !== "frontend" &&
         t.category !== "backend" &&
         t.category !== "database" &&
         t.category !== "infrastructure"
   );

   return (
      <main
         ref={skillsRef}
         className="pt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-8"
      >
         <section className="flex flex-col gap-8">
            <div className="flex">
               <div className="flex items-start">
                  <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
                     Technical Skills
                     <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
                  </h1>
               </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
               {frontend.length > 0 && (
                  <FeatureBox title="Frontend">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={frontend}
                     />
                  </FeatureBox>
               )}
               {backend.length > 0 && (
                  <FeatureBox title="Backend">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={backend}
                     />
                  </FeatureBox>
               )}
               {database.length > 0 && (
                  <FeatureBox title="Database">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={database}
                     />
                  </FeatureBox>
               )}
               {infrastructure.length > 0 && (
                  <FeatureBox title="Deployment">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={infrastructure}
                     />
                  </FeatureBox>
               )}
               {other.length > 0 && (
                  <FeatureBox title="Other">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={other}
                     />
                  </FeatureBox>
               )}
               {tools.length > 0 && (
                  <FeatureBox title="Tools">
                     <IconSection
                        allIcons={allIcons}
                        arrIcons={tools}
                     />
                  </FeatureBox>
               )}
            </div>
         </section>

         <section className="flex flex-col justify-start gap-y-4">
            <m.div
               // variants={fadeInOut}
               // initial="initial"
               // animate={skillsControls}
               className="flex items-start justify-start"
            >
               <div className="flex items-start">
                  <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
                     Soft Skills
                     <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
                  </h1>
               </div>
            </m.div>

            <m.div
               className="border-primary border-2 bg-white rounded-lg p-4 font-poppins"
               // variants={slideDown}
               // initial="initial"
               // animate={skillsControls}
            >
               <p>Effective communicator</p>
               <p>Pramatic approach</p>
               <p>
                  Organised. Able to plan time and work autonomously to achieve
                  goals.
               </p>
               <p>All round good egg</p>
            </m.div>
         </section>
      </main>
   );
};

export default Skills;
