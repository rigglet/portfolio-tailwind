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
    <section ref={aboutRef} className="flex flex-col justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark">
        <m.div
        variants={fadeInOut}
        initial="initial"
        animate={aboutControls}
        className="section-header"
        >
            <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative">About me
            <div className="absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg -z-10 dark:bg-darkshadow"></div></h1>
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

// const AboutSection = styled(motion.div)`
//   padding: 0 5rem;
//   transition: all 2s ease;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   height: 100%;
//   width: 100%;
  
//   .content {
//     width: 100%;
//     display: flex;
//     padding: 1rem 0;
//     column-gap: 1rem;
//     align-items: center;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     row-gap: 1rem;
//     flex-grow: 1;
//     z-index: 10;
    
//     /* & > * {
//       flex: 0 0 33.3333%;
//     } */
//     .profile-container {
//       display: flex;
//       max-width: 350px;
//       border-radius: 50%;
//       border: 4px solid #313131;
//       background: whitesmoke;
//       aspect-ratio: 1/1;
//       column-gap: 1rem;
      
//       .profile-image {
//         width: 100%;
//         max-height: 100%;
//         border-radius: 50%;
//         padding: 8px;
//         object-fit: scale-down;
//         object-position: center;
//       }
//     }
//       .content-section {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         padding: 0.5rem;
//         font-weight: 200;
//         text-align: justify;
//         //font-size: 1.4rem;
//         font-size: clamp(1.2rem, 1.5vw, 10rem);
//         height: 100%;
//         row-gap: 1rem;
//         height: auto;
//         flex: 0 0 20%;
        
//         &:nth-of-type(2){
//           min-width: 350px;
//           flex: 1 0 46%;
//         }
//       }
//       .highlight {
//         font-weight: 600;
//         color: #313131;
//       }
//       .hi {
//         font-size: 2rem;
//       }
//       .first {
//         display: inline-block;
//         font-size: 4rem;
//         color: #689ed0;
//         color: #313131;
//         font-weight: 700;
//         width: 100%;
//         line-height: 70px;
//       }
//       .last {
//         font-size: 6rem;
//         color: #689ed0;
//         font-weight: 700;
//         width: 100%;
//         line-height: 70px;
//       }
//       .dot {
//         font-size: 6rem;
//         color: #313131;
//         font-weight: 700;
//         width: 100%;
//         line-height: 0;
//       }
//     }
//   //#### RESPONSIVE SECTION ####
//   //1000px: non-desktop devices
//   @media screen and (max-width: 1000px) {
//     padding: 0rem 1rem;
//     transition: padding 2s ease;
// `;
