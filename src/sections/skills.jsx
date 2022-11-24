import { useState, useEffect } from "react";
//framer motion and styled components
import { motion as m } from "framer-motion";
import { selection, slideDown, bounceUp } from "../styles/animations";
import { getCollection } from "../api/api";
import FeatureBox from "../components/featureBox";
import IconSection from "../components/IconSection";
import SectionTitle from "../components/sectionTitle";

const Skills = ({ skillsRef, skillsControls, allIcons }) => {
   const [technologies, setTechnologies] = useState([]);
   const [tools, setTools] = useState([]);
   const [text, setText] = useState([]);

   async function getTechnologies() {
      return await getCollection("technologies");
   }
   async function getTools() {
      return await getCollection("tools");
   }
   async function getText() {
      return await getCollection("texts");
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

      getText()
         .then((results) => {
            if (results.status === 200) {
               setText(results.data);
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

   const softSkills = text.filter((t) => t.name === "soft_skill");

   return (
      <main
         ref={skillsRef}
         className="pt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-8"
      >
         <section className="flex flex-col gap-8">
            <SectionTitle title="Skills" />

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

         {softSkills.length > 0 && (
            <section className="flex flex-col justify-start gap-y-4">
               <SectionTitle title="Soft Skills" />

               <FeatureBox>
                  <div className="text-textdark dark:text-textlight">
                     {softSkills.map((skill) => (
                        <p>{skill.content}</p>
                     ))}
                  </div>
               </FeatureBox>
            </section>
         )}
      </main>
   );
};

export default Skills;
