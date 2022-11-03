//framer motion and styled components
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";
//images
import avatar from "../img/me-color.png";
import underline from "../img/underline.svg";
import { Button } from "@material-tailwind/react";

//animations
import {
   headerVariants,
   subheaderVariants,
   buttonVariants,
   imageVariants,
} from "../styles/animations";

const Home = ({ homeRef, homeControls, showNav }) => {
   return (
      <div
         ref={homeRef}
         showNav={showNav}
         className="w-full flex md:flex-row flex-col-reverse items-center md:justify-between justify-center h-auto min-h-screen bg-bglight dark:bg-bgdark gap-y-4 md:gap-y-0 md:gap-x-8 gap-x-0"
      >
         <div className="flex flex-col gap-y-8 md:items-start items-center">
            <m.div
               className="flex flex-col gap-y-2 md:items-start items-center"
               variants={headerVariants}
               initial="initial"
               animate={homeControls}
            >
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-4xl">
                  I am a
               </h2>
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-4xl">
                  Frontend
               </h2>
               <div className="flex gap-x-2">
                  <span className="font-poppins text-primary font-poppins font-bold text-5xl">
                     Web
                  </span>
                  <span className="font-poppins text-textdark dark:text-textlight font-bold text-5xl relative">
                     Developer
                     <img
                        className="absolute top-10 left-0 -z-10"
                        src={underline}
                        alt="underline"
                     />
                  </span>
               </div>
            </m.div>

            <m.div
               className="flex flex-col gap-y-4 md:items-start items-center"
               variants={subheaderVariants}
               initial="initial"
               animate={homeControls}
            >
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-3xl text-center md:text-left">
                  Passionate about web development
               </h2>
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-3xl text-center md:text-left">
                  With a focus on React
               </h2>
               <h2 className="font-poppins text-secondary font-semibold text-3xl text-center md:text-left">
                  Hire me today
               </h2>
            </m.div>

            <HashLink
               smooth
               to="/#portfolio"
               className="home-button"
            >
               <m.div
                  variants={buttonVariants}
                  initial="initial"
                  animate={homeControls}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-1/3"
               >
                  <Button
                     ripple={true}
                     variant="filled"
                     className="bg-primary !text-textlight dark:text-textlight text-l font-bold font-nunito hover:!shadow-lg hover:!shadow-indigo-500/40"
                  >
                     View Projects
                  </Button>
               </m.div>
            </HashLink>
         </div>

         <m.div
            className="aspect-square flex flex-col w-80 h-80 justify-center md:items-start items-center rounded-full bg-gradient-to-b from-primary to-secondary"
            variants={imageVariants}
            initial="initial"
            animate={homeControls}
            exit="exit"
         >
            <img
               src={avatar}
               alt="Neil Rigg in a suit"
               className="object-contain w-full min-h-full p-1 rounded-full "
            />
         </m.div>
      </div>
   );
};

export default Home;
