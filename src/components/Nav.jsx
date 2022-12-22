import { useState } from "react";
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";
//import { Button } from "@material-tailwind/react";
import Icon from "../components/Icon";

const Nav = ({
   homeInView,
   aboutInView,
   portfolioInView,
   skillsInView,
   educationInView,
   experienceInView,
   contactInView,
   allIcons,
   showNav,
   theme,
   setTheme,
   showDropMenu,
   setShowMenu,
}) => {
   //console.log("showNav => ", showNav);

   const [topVisible, setTopVisible] = useState(false);
   const [bottomVisible, setBottomVisible] = useState(false);

   const toggleTopVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 500) {
         setTopVisible(true);
      } else if (scrolled <= 500) {
         setTopVisible(false);
      }
   };

   const toggleBottomVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (
         scrolled <
         document.documentElement.scrollHeight - window.screen.height - 500
      ) {
         setBottomVisible(true);
      } else if (scrolled - document.documentElement.scrollHeight < 1000) {
         setBottomVisible(false);
      }
   };

   window.addEventListener("scroll", toggleTopVisible);
   window.addEventListener("scroll", toggleBottomVisible);

   const handlePageUp = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   };
   const handlePageDown = () => {
      window.scrollTo({
         top: document.documentElement.scrollHeight,
         behavior: "smooth",
      });
   };

   //check for preference in local storage
   //otherwise match "prefers-color-scheme" setting
   const handleThemeChange = () => {
      if (theme === "dark") {
         localStorage.setItem("portfolio_theme", "light");
      } else {
         localStorage.setItem("portfolio_theme", "dark");
      }
      setTheme(theme === "dark" ? "light" : "dark");
   };

   //Animation / transition
   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            delayChildren: 0.5,
         },
      },
   };

   // const item = {
   //    hidden: { opacity: 0 },
   //    show: { opacity: 1 },
   // };

   return (
      <nav
         className={`z-30 h-5 lg:h-12 flex w-full px-4 lg:px-64 justify-between items-center backdrop-blur-md bg-bglight/30 dark:bg-bgdark/30 fixed`}
      >
         <h1 className="text-textdark dark:text-textlight uppercase text-2xl font-bold font-montserrat px-0 relative">
            Neil Rigg
            <div className="absolute bg-white -rotate-6 w-full h-full top-2 left-2 blur-sm rounded-lg -z-10 dark:bg-darkshadow"></div>
         </h1>

         <m.div
            className={`lg:flex justify-around items-center lg:gap-8 ${
               showDropMenu
                  ? "flex flex-col p-4 gap-y-2 h-auto w-[100vw] absolute top-0 left-0 z-[50] border-b-4 border-primary"
                  : "hidden"
            }`}
            variants={container}
            initial="hidden"
            animate="show"
         >
            {/* Mobile menu icons */}
            {showDropMenu && (
               <div
                  onClick={() => setShowMenu(!showDropMenu)}
                  className="!inline-block lg:!hidden absolute top-2 right-2 text-textdark dark:text-textlight"
               >
                  <Icon
                     icon="CgClose"
                     className={` cursor-pointer
                        ${
                           theme === "dark"
                              ? "text-textlight hover:text-secondary"
                              : "text-textdark hover:text-primary"
                        }
                     `}
                     size="30px"
                     title="Close"
                     allIcons={allIcons}
                  />
               </div>
            )}

            <HashLink
               className="link"
               smooth
               to="/#home"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !homeInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Home
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: homeInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               //smooth
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#about"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !aboutInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  About
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: aboutInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#portfolio"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !portfolioInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Portfolio
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: portfolioInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#skills"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !skillsInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Skills
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: skillsInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#education"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !educationInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Education
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: educationInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#experience"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !experienceInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Experience
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: experienceInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
            </HashLink>
            <HashLink
               className="link"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               to="/#contact"
               onClick={() => setShowMenu(false)}
            >
               <h1
                  className={`text-textdark dark:text-textlight text-l font-semibold font-nunito ${
                     !contactInView &&
                     "dark:hover:text-secondary hover:text-primary"
                  }`}
               >
                  Contact
               </h1>
               <m.div
                  initial={{ width: "0" }}
                  animate={{ width: contactInView ? "100%" : "0" }}
                  transition={{ duration: 0.75 }}
                  className="bg-primary rounded-xl h-1 w-full"
               ></m.div>
               {/* <Button
                  ripple={true}
                  variant="outlined"
                  className={`!text-primary dark:!text-textlight dark:border-textlight border-primary border-2 text-l font-bold font-nunito p-2 ${
                     !contactInView &&
                     "dark:hover:!text-secondary hover:!text-primary"
                  }`}
               >
                  Contact
               </Button> */}
            </HashLink>
         </m.div>

         {/* Mobile menu show icon */}
         {!showDropMenu && (
            <div
               onClick={() => setShowMenu(!showDropMenu)}
               className="inline-block lg:hidden text-textdark dark:text-textlight"
            >
               <Icon
                  icon="FiMenu"
                  className={`z-[50] cursor-pointer
                        ${
                           theme === "dark"
                              ? "text-textlight hover:text-secondary"
                              : "text-textdark hover:text-primary"
                        }
                     `}
                  size="30px"
                  title="Close"
                  allIcons={allIcons}
               />
            </div>
         )}

         {/* Page up / down and theme buttons */}
         <m.div className="flex flex-col justify-between fixed top-16 lg:top-2 right-2 gap-y-2 lg:h-[98vh]">
            <div
               onClick={handleThemeChange}
               className="block top-2 right-10 cursor-pointer"
            >
               <Icon
                  icon={
                     theme === "dark" ? "MdOutlineWbSunny" : "MdOutlineDarkMode"
                  }
                  className={
                     theme === "dark"
                        ? "text-textlight hover:text-secondary"
                        : "text-textdark hover:text-primary"
                  }
                  size="25px"
                  allIcons={allIcons}
               />
            </div>

            <div className="flex flex-col gap-y-4">
               <div
                  onClick={handlePageUp}
                  className={`${
                     topVisible ? "visible" : "invisible"
                  } top-2 right-2 cursor-pointer`}
               >
                  <Icon
                     icon="BsArrowUpCircleFill"
                     className={
                        theme === "dark"
                           ? "text-textlight hover:text-secondary"
                           : "text-textdark hover:text-primary"
                     }
                     size="25px"
                     allIcons={allIcons}
                  />
               </div>

               <div
                  onClick={handlePageDown}
                  className={`${
                     bottomVisible ? "visible" : "invisible"
                  } bottom-2 right-2 cursor-pointer`}
               >
                  <Icon
                     icon="BsArrowDownCircleFill"
                     className={
                        theme === "dark"
                           ? "text-textlight hover:text-secondary"
                           : "text-textdark hover:text-primary"
                     }
                     size="25px"
                     allIcons={allIcons}
                  />
               </div>
            </div>
         </m.div>
      </nav>
   );
};

export default Nav;
