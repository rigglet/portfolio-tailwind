import { useState, useEffect } from "react";
//framer motion and styled components
import { motion as m } from "framer-motion";
//import { selection, slideDown, bounceUp } from "../styles/animations";
import { getCollection } from "../api/api";
import FeatureBox from "../components/featureBox";
import IconSection from "../components/IconSection";
import SectionTitle from "../components/sectionTitle";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/loader";
import Icon from "../components/Icon";

const Skills = ({ skillsRef, skillsControls, allIcons, showDropMenu }) => {
   const [technologies, setTechnologies] = useState([]);
   const [tools, setTools] = useState([]);
   const [text, setText] = useState([]);
   const [loadingSkills, setLoadingSkills] = useState(true);
   const [loadingTexts, setLoadingTexts] = useState(true);

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
               setLoadingSkills(() => false);
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
               setLoadingTexts(() => false);
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

   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.5,
         },
      },
   };

   const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
   };

   return (
      <main
         ref={skillsRef}
         className={`lg:mt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-8 ${
            showDropMenu && "blur-sm"
         }`}
      >
         <m.section
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            //animate={skillsControls}
            whileInView={"show"}
         >
            <SectionTitle title="Skills" />
            {loadingSkills ? (
               <div className="w-full flex justify-center items-start p-8 h-auto">
                  <Loader rows="2" />
               </div>
            ) : (
               <m.div
                  className="flex flex-wrap gap-8 justify-center"
                  // variants={container}
                  // initial="hidden"
                  // //animate={skillsControls}
                  // whileInView={"show"}
               >
                  <m.div
                     variants={item}
                     className="grow"
                  >
                     {frontend.length > 0 && (
                        <FeatureBox title="Frontend">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={frontend}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
                  <m.div variants={item}>
                     {backend.length > 0 && (
                        <FeatureBox title="Backend">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={backend}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
                  <m.div variants={item}>
                     {database.length > 0 && (
                        <FeatureBox title="Database">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={database}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
                  <m.div variants={item}>
                     {infrastructure.length > 0 && (
                        <FeatureBox title="Deployment">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={infrastructure}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
                  <m.div variants={item}>
                     {other.length > 0 && (
                        <FeatureBox title="Other">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={other}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
                  <m.div variants={item}>
                     {tools.length > 0 && (
                        <FeatureBox title="Tools">
                           <IconSection
                              allIcons={allIcons}
                              arrIcons={tools}
                           />
                        </FeatureBox>
                     )}
                  </m.div>
               </m.div>
            )}
         </m.section>

         {softSkills.length > 0 && (
            <m.section
               className="flex flex-col justify-start gap-y-4"
               variants={container}
               initial="hidden"
               //animate={skillsControls}
               whileInView={"show"}
            >
               <SectionTitle title="Soft Skills" />

               {loadingTexts ? (
                  <div className="w-full flex justify-center items-start p-8 h-fit">
                     <Loader rows="1" />
                  </div>
               ) : (
                  <m.div variants={item}>
                     <FeatureBox>
                        <div className="text-textdark dark:text-textlight flex flex-col gap-y-4">
                           {softSkills.map((skill) => (
                              <div
                                 key={uuidv4()}
                                 className="flex"
                              >
                                 <div className="flex w-8 mr-4">
                                    <Icon
                                       icon="IoArrowForwardCircleSharp"
                                       color=""
                                       size="30px"
                                       allIcons={allIcons}
                                    />
                                 </div>
                                 <div className="flex-wrap self-center">
                                    {skill.content}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </FeatureBox>
                  </m.div>
               )}
            </m.section>
         )}
      </main>
   );
};

export default Skills;
