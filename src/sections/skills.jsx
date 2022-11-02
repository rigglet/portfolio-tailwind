import { useState, useEffect } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//framer motion and styled components
import { motion as m } from "framer-motion";
import Icon from "../components/Icon";
import { selection, slideDown, bounceUp } from "../styles/animations";
import { getCollection } from "../api/api";
import underline from "../img/underline.svg";

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
    <main ref={skillsRef} className="pt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-8">
      
      <section className="flex flex-col gap-8">
        
        <div className="flex">
            <div className="flex items-start">
                <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">Technical Skills
                    <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow">
                    </div>
                </h1>
            </div>
        </div>

        <div className="flex flex-wrap gap-8 justify-center">
          {frontend.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
                
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Frontend
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>
              

              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={bounceUp}
                // initial="initial"
                // animate={skillsControls}
              >
                {frontend.map((technology) => {
                  return (
                    <div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </div>
                  );
                })}
              </m.div>
            </section>
          )}
          
          {backend.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
              
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Backend
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>
              
              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={bounceUp}
                // initial="initial"
                // animate={skillsControls}
              >
                {backend.map((technology) => {
                  return (
                    <m.div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </m.div>
                  );
                })}
              </m.div>
            </section>
          )}

          {database.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Database
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>

              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={bounceUp}
                // initial="initial"
                // animate={skillsControls}
              >
                {database.map((technology) => {
                  return (
                    <m.div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </m.div>
                  );
                })}
              </m.div>
            </section>
          )}
          {infrastructure.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Deployment
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>
              
              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={bounceUp}
                // initial="initial"
                // animate={skillsControls}
              >
                {infrastructure.map((technology) => {
                  return (
                    <m.div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </m.div>
                  );
                })}
              </m.div>
            </section>
          )}
          {other.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Other
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>

              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={selection}
                // initial="initial"
                // animate={skillsControls}
              >
                {other.map((technology) => {
                  return (
                    <m.div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </m.div>
                  );
                })}
              </m.div>
            </section>
          )}
          {tools.length > 0 && (
            <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
              <div className="inline-block mb-2">
                <h2
                  // variants={slideDown}
                  // initial="initial"
                  // animate={skillsControls}
                  className="relative font-semibold font-poppins"
                >
                  Tools
                  <img className="absolute top-6 left-0 z-50 w-full" src={underline} alt="underline"/>
                </h2>
              </div>

              <m.div
                className="flex flex-wrap gap-6 justify-center"
                // variants={bounceUp}
                // initial="initial"
                // animate={skillsControls}
              >
                {tools?.map((tool) => {
                  return (
                    <m.div key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={tool.address}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-col items-center justify-around"
                      >
                        <h4>{tool.name}</h4>
                        <Icon
                          icon={tool.icon}
                          color={tool.color}
                          size="50px"
                          allIcons={allIcons}
                        />
                      </a>
                    </m.div>
                  );
                })}
              </m.div>
            </section>
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
                <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">Soft Skills
                    <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow">
                    </div>
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
          <p>Organised. Able to plan time and work autonomously to achieve goals.</p>
          <p>All round good egg</p>
        </m.div>
      </section>
    </main>
  );
};

export default Skills;