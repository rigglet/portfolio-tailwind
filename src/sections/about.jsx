//framer motion
import { motion as m } from "framer-motion";
import codingImage from "../img/coding.svg";
import underline from "../img/underline.svg";

//animations
import {
  fadeInOut,
  slideLeft,
  scaleUpRight,
  slideUp,
} from "../styles/animations";

const About = ({ aboutRef, aboutControls }) => {
  return (
    <section ref={aboutRef} className="pt-20 flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark">
        <m.div
        variants={fadeInOut}
        initial="initial"
        animate={aboutControls}
        className="section-header"
        >
            <div className="flex items-start">
            <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">About me
                    <div className="-z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow">
                    </div>
                </h1>
            </div>
        </m.div>

        
        <m.div
        className="flex justify-between align-center h-auto"
        variants={scaleUpRight}
        initial="initial"
        animate={aboutControls}
        >
            <m.img
            className="w-1/2 h-auto"
            src={codingImage}
            alt="Author of portfolio Neil Rigg"
            />

            <m.article
                variants={slideUp}
                initial="initial"
                animate={aboutControls}
                className="flex flex-col gap-y-4 justify-center items-end"
                >
                <p className="font-poppins text-textdark dark:text-textlight font-normal text-4xl">Hi, I'm</p>
                <div className="flex flex-col gap-y-2 items-end">
                    <p className="font-montserrat text-textdark dark:text-textlight font-semibold text-7xl">Neil </p>
                      <p className="font-montserrat text-secondary font-semibold text-7xl relative justify-end">Rigg
                          {/* <span className="text-primary">.</span> */}
                          <img className="absolute top-20 left-0 -z-10 " src={underline} alt="underline" />
                      </p>
                    
                </div>
          </m.article>
        </m.div>
          
          <m.article
            variants={slideLeft}
            initial="initial"
            animate={aboutControls}
            className="font-poppins text-textdark dark:text-textlight font-normal text-xl flex flex-col gap-y-2 text-justify"
            >
            <p>
              I am a graduate with a &nbsp;
              <span className="text-primary font-semibold">
                BSc in Computer Systems and Networks
              </span>
              &nbsp; with &nbsp;
              <span className="text-primary font-semibold">
                years of relevant industry experience
              </span>
              &nbsp; in IT and the full software development life-cycle. From
              requirements gathering, to designing and building systems in
              response to the needs of the customer.
            </p>
            <p>
              Most recently, I have been expanding my knowledge of fundamental web technologies and building a portfolio of projects, including full-stack web applications with the <span className="text-primary font-semibold">MERN stack,</span> focusing on using <span className="text-primary font-semibold">React</span> for frontend development.
            </p>
          </m.article>
    </section>
  );
};

export default About;