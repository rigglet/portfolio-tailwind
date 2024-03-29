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

const Home = ({ homeRef, homeControls, showNav, showDropMenu }) => {
   return (
      <div
         ref={homeRef}
         showNav={showNav}
         className={`w-full flex lg:flex-row flex-col-reverse items-center lg:justify-between justify-center h-auto min-h-screen bg-bglight dark:bg-bgdark gap-y-2 lg:gap-y-0 lg:gap-x-8 gap-x-0 mt-4 ${
            showDropMenu && "blur-sm"
         }`}
      >
         <div className="flex flex-col gap-y-4 lg:gap-y-16 lg:items-start items-center">
            <m.div
               className="flex flex-col gap-y-2 lg:items-start items-center"
               variants={headerVariants}
               initial="initial"
               animate={homeControls}
            >
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-3xl lg:text-4xl">
                  I am a
               </h2>
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-3xl lg:text-4xl">
                  Frontend
               </h2>
               <div className="flex gap-x-2">
                  <span className="font-poppins text-primary font-poppins font-bold text-4xl lg:text-5xl">
                     Web
                  </span>
                  <span className="font-poppins text-textdark dark:text-textlight font-bold text-4xl lg:text-5xl relative">
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
               className="flex flex-col gap-y-4 lg:items-start items-center"
               variants={subheaderVariants}
               initial="initial"
               animate={homeControls}
            >
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-2xl lg:text-3xl text-center lg:text-left">
                  Passionate about web development
               </h2>
               <h2 className="font-poppins text-textdark dark:text-textlight font-normal text-2xl lg:text-3xl text-center lg:text-left">
                  With a focus on React
               </h2>
               <h2 className="font-poppins text-secondary font-semibold text-2xl lg:text-3xl text-center lg:text-left">
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
                  className=""
               >
                  <Button
                     ripple={true}
                     variant="filled"
                     className="bg-primary !text-textlight dark:text-textlight text-l font-bold font-nunito hover:!shadow-lg hover:!shadow-indigo-500/40 w-px-100"
                  >
                     View Projects
                  </Button>
               </m.div>
            </HashLink>
         </div>

         <m.div
            className="aspect-square flex flex-col w-60 h-60 lg:w-80 lg:h-80 mt-4 justify-center lg:items-start items-center rounded-full bg-gradient-to-b from-primary to-secondary"
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
