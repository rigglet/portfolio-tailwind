//framer motion
import { motion as m } from "framer-motion";
import SectionTitle from "../components/sectionTitle";
import codingImage from "../img/coding.svg";
import underline from "../img/underline.svg";

//animations
import {
   fadeInOut,
   slideLeft,
   scaleUpRight,
   slideUp,
} from "../styles/animations";

const About = ({ aboutRef, aboutControls, showDropMenu }) => {
   return (
      <section
         ref={aboutRef}
         className={`py-10 lg:pt-20 flex flex-col justify-around w-full h-auto min-h-screen bg-bglight dark:bg-bgdark mb-4 ${
            showDropMenu && "blur-sm"
         }`}
      >
         <SectionTitle title="About me" />

         <m.div
            className="pb-8 gap-y-4 lg:pb-0 lg:gap-y-0 flex flex-col items-center lg:flex-row lg:justify-between h-auto"
            variants={scaleUpRight}
            initial="initial"
            animate={aboutControls}
         >
            <m.img
               className="w-full lg:w-1/2 h-auto"
               src={codingImage}
               alt="Author of portfolio Neil Rigg"
            />

            <m.article
               variants={slideUp}
               initial="initial"
               animate={aboutControls}
               className="flex flex-col gap-y-4 justify-center items-center lg:items-end w-full"
            >
               <p className="font-poppins text-textdark dark:text-textlight font-normal text-4xl">
                  Hi, I'm
               </p>
               <div className="flex flex-col gap-y-2 items-center lg:items-end">
                  <p className="font-montserrat text-textdark dark:text-textlight font-semibold text-7xl">
                     Neil{" "}
                  </p>
                  <p className="font-montserrat text-secondary font-semibold text-7xl relative justify-end">
                     Rigg
                     {/* <span className="text-primary">.</span> */}
                     <img
                        className="absolute top-20 left-0 -z-10 "
                        src={underline}
                        alt="underline"
                     />
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
                  BSc in Computer Systems and Networks,&nbsp;
               </span>
               the emphasis of which was programming, software systems
               development and web technologies, with &nbsp;
               <span className="text-primary font-semibold">
                  years of relevant industry experience
               </span>
               &nbsp; in IT and the full software development life-cycle. From
               requirements gathering, to designing and building systems in
               response to the needs of the customer.
            </p>
            <p>
               Most recently, I have been expanding my knowledge of fundamental
               web technologies and building a portfolio of projects, including
               full-stack web applications with the{" "}
               <span className="text-primary font-semibold">MERN stack,</span>{" "}
               focusing on using{" "}
               <span className="text-primary font-semibold">React</span> for
               frontend development. Whilst I'm keen to improve my skills in the
               MERN stack, I am always eager to learn new technologies.
            </p>
         </m.article>
      </section>
   );
};

export default About;
