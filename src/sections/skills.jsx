import { useState, useEffect } from "react";
//uuid
import { v4 as uuidv4 } from "uuid";
//framer motion and styled components
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import { selection, slideDown, bounceUp } from "../styles/animations";
import { getCollection } from "../api/api";

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
    <section ref={skillsRef} className="pt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark">
      <section
        className="skill-section"
        // variants={slideRight}
        // initial="initial"
        // animate={skillsControls}
      >
        <div className="section-header">
          <motion.div
            variants={slideDown}
            initial="initial"
            animate={skillsControls}
            className="section-title-content"
          >
            <Icon
              icon="HiCode"
              size="30px"
              color="#313131"
              title="Skills icon"
              allIcons={allIcons}
            />
            <h1 className="section-heading heading-dark">Technical Skills</h1>
          </motion.div>
          <motion.div
            variants={slideDown}
            initial="initial"
            animate={skillsControls}
            className="wrapper"
          >
          </motion.div>
        </div>

        <div className="content">
          {frontend.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Frontend
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
           
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={bounceUp}
                initial="initial"
                animate={skillsControls}
              >
                {frontend.map((technology) => {
                  return (
                    <div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </div>
                  );
                })}
              </motion.div>
            </section>
          )}
          {backend.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Backend
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
                  
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={bounceUp}
                initial="initial"
                animate={skillsControls}
              >
                {backend.map((technology) => {
                  return (
                    <motion.div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          )}
          {database.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Database
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
                  
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={bounceUp}
                initial="initial"
                animate={skillsControls}
              >
                {database.map((technology) => {
                  return (
                    <motion.div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          )}
          {infrastructure.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Deployment
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
                  
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={bounceUp}
                initial="initial"
                animate={skillsControls}
              >
                {infrastructure.map((technology) => {
                  return (
                    <motion.div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          )}
          {other.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Other
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
                  
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={selection}
                initial="initial"
                animate={skillsControls}
              >
                {other.map((technology) => {
                  return (
                    <motion.div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={technology.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{technology.name}</h4>
                        <Icon
                          icon={technology.icon}
                          color={technology.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          )}
          {tools.length > 0 && (
            <section>
              <div className="section-header">
                <div className="section-title-content">
                  <motion.h2
                    variants={slideDown}
                    initial="initial"
                    animate={skillsControls}
                    className="section-subheading heading-dark"
                  >
                    Tools
                  </motion.h2>
                </div>
                <motion.div
                  variants={slideDown}
                  initial="initial"
                  animate={skillsControls}
                  className="wrapper"
                >
                  
                </motion.div>
              </div>
              <motion.div
                className="selection"
                variants={bounceUp}
                initial="initial"
                animate={skillsControls}
              >
                {tools?.map((tool) => {
                  return (
                    <motion.div className="skill-item" key={uuidv4()}>
                      <a
                        key={uuidv4()}
                        href={tool.address}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <h4>{tool.name}</h4>
                        <Icon
                          icon={tool.icon}
                          color={tool.color}
                          size="70px"
                          allIcons={allIcons}
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>
            </section>
          )}
        </div>
      </section>

      <section className="skill-section">
        <div className="section-header">
          <motion.div
            className="section-title-content"
            variants={slideDown}
            initial="initial"
            animate={skillsControls}
          >
            <Icon
              icon="BsPersonFill"
              size="30px"
              color="#313131"
              title="Skills icon"
              allIcons={allIcons}
            />
            <h1 className="section-heading heading-dark">Soft Skills</h1>
          </motion.div>
          <motion.div
            variants={slideDown}
            initial="initial"
            animate={skillsControls}
            className="wrapper"
          >
            
          </motion.div>
        </div>

        <motion.div
          className="soft-content"
          variants={slideDown}
          initial="initial"
          animate={skillsControls}
        >
          <p>Effective communicator</p>
          <p>Pramatic approach</p>
          <p>
            Organised. Able to plan time and work autonomously to achieve goals.
          </p>
          <p>All round good egg</p>
        </motion.div>
      </section>
    </section>
  );
};

// const SkillsSection = styled(motion.div)`
//   //edit justify content if switching sides
//   //justify-content: flex-end;
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   width: 100%;
//   z-index: 2;
//   padding: 4rem 4rem 4rem 4rem;
//   row-gap: 3rem;
//   //wrapper to animate styledLine
//   .wrapper {
//     width: 100%;
//     height: auto;
//   }
//   .skill-section {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     z-index: 1;
//     row-gap: 1rem;
//     .content {
//       display: flex;
//       flex-wrap: wrap;
//       width: 100%;
//       height: auto;
//       align-items: flex-start;
//       justify-content: space-evenly;
//       row-gap: 3rem;
//       column-gap: 5rem;
//       z-index: 1;
//       section {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         gap: 0.5rem;
//         .selection {
//           display: flex;
//           flex-wrap: wrap;
//           column-gap: 2rem;
//           row-gap: 2rem;
//           //align-items: space-between;
//           justify-content: center;
//           .skill-item {
//             a {
//               text-decoration: none;
//               display: flex;
//               flex-direction: column;
//               align-items: center;
//               justify-content: center;
//               column-gap: 3rem;
//               h4 {
//                 color: #1c3b57;
//               }
//             }
//           }
//         }
//       }
//     }
//     .soft-content {
//       display: flex;
//       flex-wrap: wrap;
//       flex-direction: column;
//       width: 100%;
//       height: auto;
//       align-items: center;
//       justify-content: space-evenly;
//       gap: 1rem;
//       z-index: 1;
//     }
//   }
// `;

export default Skills;