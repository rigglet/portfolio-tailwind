//framer motion and styled components
import { motion as m } from "framer-motion";
import { buttonVariants } from "../styles/animations";
import { Button } from "@material-tailwind/react";
import { HashLink } from "react-router-hash-link";
import {
   VerticalTimeline,
   VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "../components/Icon";
// import {
//   //fadeInOut,
//   //elementSlideInOut,
//   //containerSlideInOutLeft,
// } from "../styles/animations";

const Experience = ({ experienceRef, experienceControls, allIcons }) => {
   const iconStyle = { background: "#d9d9d9" };
   const contentStyle = {
      background: "linear-gradient(45deg, #d478d1, #5156b8)",
      color: "#2f2f2f",
      fontWeight: "bold",
      fontSize: 18,
      borderRadius: 10,
      borderSize: 4,
   };
   const contentArrowStylePrimary = { borderRight: "20px solid #5156b8" };
   const contentArrowStyleSecondary = { borderRight: "20px solid #d478d1" };

   return (
      <main
         ref={experienceRef}
         // variants={containerSlideInOutLeft}
         // initial="initial"
         // animate={experienceControls}
         className="flex flex-col w-full h-auto pt-20 items-start justify-around  bg-bglight dark:bg-bgdark gap-y-4 font-poppins"
      >
         <m.div
            // variants={fadeInOut}
            // initial="initial"
            // animate={experienceControls}
            className="section-header"
         >
            <div className="flex items-start">
               <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
                  Experience
                  <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
               </h1>
            </div>
         </m.div>

         <section className="flex w-full h-auto items-center justify-center">
            <VerticalTimeline
               animate={true}
               lineColor="linear-gradient(45deg, #d478d1, #5156b8)"
            >
               <VerticalTimelineElement
                  contentStyle={contentStyle}
                  contentArrowStyle={contentArrowStylePrimary}
                  date="2006 - 2007"
                  iconStyle={iconStyle}
                  icon={
                     <Icon
                        icon="FaRocket"
                        color="#5156b8"
                        size="25px"
                        title="work icon"
                        allIcons={allIcons}
                     />
                  }
               >
                  <h3 className="">Enterprise Web Application Developer</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                     England, UK
                  </h4>
                  <p>EADS Astrium - Aeropspace Engineering</p>
               </VerticalTimelineElement>

               <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={contentStyle}
                  contentArrowStyle={contentArrowStyleSecondary}
                  date="2017 - 2020"
                  iconStyle={iconStyle}
                  icon={
                     <Icon
                        icon="FaLaptop"
                        color="#5156b8"
                        size="25px"
                        title="work icon"
                        allIcons={allIcons}
                     />
                  }
               >
                  <h3 className="vertical-timeline-element-title">
                     Technical Consultant
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                     Sydney, NSW
                  </h4>
                  <p>Phaze Technologies</p>
               </VerticalTimelineElement>
            </VerticalTimeline>
         </section>
         <HashLink
            id="contact-btn"
            smooth
            to="/#contact"
         >
            <Button
               ripple={true}
               variant="filled"
               className="bg-primary !text-textlight dark:text-textlight text-l font-bold font-nunito hover:!shadow-lg hover:!shadow-indigo-500/40"
            >
               Request full resume
            </Button>
         </HashLink>
      </main>
   );
};

export default Experience;
