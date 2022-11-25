import { useState } from "react";
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Button } from "@material-tailwind/react";
import Icon from "../components/Icon";

//import NavbarIcon from "../components/NavbarIcon";

// const NavLine = ({ homeInView }) => {
//    return (
//       <m.div
//          initial={{ width: "0" }}
//          animate={{ width: homeInView ? "100" : "0" }}
//          transition={{ duration: 2 }}
//          className="bg-primary rounded-xl h-1"
//       >
//          {" "}
//       </m.div>
//    );
// };

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
}) => {
   //console.log("showNav => ", showNav);

   //showDropMenu manages state of mobile dropdown menu
   const [showDropMenu, setShowMenu] = useState(false);
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
   const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
   };
   return (
      <nav
         className={`z-50 h-5 md:h-12 flex w-full px-4 md:px-64 justify-between items-center fixed backdrop-blur-md bg-bglight/30 dark:bg-bgdark/30 z-10`}
         showNav={showNav}
      >
         <h1 className="text-textdark dark:text-textlight uppercase text-2xl font-bold font-montserrat px-0 relative">
            Neil Rigg
            <div className="absolute bg-white -rotate-6 w-full h-full top-2 left-2 blur-sm rounded-lg -z-10 dark:bg-darkshadow"></div>
         </h1>

         <m.div
            className={`md:!flex !hidden justify-around items-center gap-8 relative`}
            variants={container}
            initial="hidden"
            animate="show"
         >
            <HashLink
               className="link"
               smooth
               to="/#home"
               scroll={(el) =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
               }
               onClick={() => setShowMenu(false)}
            >
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:text-primary">
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
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:text-primary">
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
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito  hover:text-primary">
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
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:text-primary">
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
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:text-primary">
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
               <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:text-primary">
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
               <Button
                  ripple={true}
                  variant="outlined"
                  className="ring-primary !text-primary dark:!text-textlight dark:border-textlight border-primary border-2 text-l font-bold font-nunito p-2"
               >
                  Contact
               </Button>
            </HashLink>
         </m.div>

         {/* Page up / down and theme buttons */}
         <m.div className="flex flex-col fixed top-16 md:top-2 right-2 gap-y-2">
            <div
               onClick={handleThemeChange}
               className="block top-2 right-10 cursor-pointer"
            >
               <Icon
                  icon={
                     theme === "dark" ? "MdOutlineWbSunny" : "MdOutlineDarkMode"
                  }
                  color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                  //className={theme === "dark" ? "light" : "dark"}
                  size="25px"
                  allIcons={allIcons}
               />
            </div>

            <div
               onClick={handlePageUp}
               className={`${
                  topVisible ? "block" : "hidden"
               } top-2 right-2 cursor-pointer`}
            >
               <Icon
                  icon="BsArrowUpCircleFill"
                  color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                  //className={theme === "dark" ? "light" : "dark"}
                  size="25px"
                  allIcons={allIcons}
               />
            </div>

            <div
               onClick={handlePageDown}
               className={`${
                  bottomVisible ? "block" : "hidden"
               } bottom-2 right-2 cursor-pointer`}
            >
               <Icon
                  icon="BsArrowDownCircleFill"
                  color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                  size="25px"
                  allIcons={allIcons}
               />
            </div>
         </m.div>

         <div className={`!inline-block md:!hidden`}>
            {showDropMenu ? (
               <div
                  onClick={() => setShowMenu(!showDropMenu)}
                  className="text-textdark dark:text-textlight"
               >
                  <Icon
                     icon="CgClose"
                     color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                     size="30px"
                     title="Close"
                     allIcons={allIcons}
                  />
               </div>
            ) : (
               <div
                  onClick={() => setShowMenu(!showDropMenu)}
                  className="text-textdark dark:text-textlight"
               >
                  <Icon
                     icon="FiMenu"
                     color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                     size="30px"
                     title="Menu"
                     allIcons={allIcons}
                  />
               </div>
            )}
         </div>
      </nav>
   );
};

export default Nav;
