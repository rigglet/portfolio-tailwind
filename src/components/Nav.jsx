import { useState } from "react";
import { motion as m } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Button } from "@material-tailwind/react";
import Icon from "../components/Icon"

//import NavbarIcon from "../components/NavbarIcon";

const NavLine = ({homeInView}) => {
    return (<m.div initial={{width: "0"}}
      animate={{width: homeInView ? "100" : "0"}}
      transition={{ duration: 2 }}
      className="bg-primary rounded-xl h-1"> </m.div>)
}

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
  setTheme
}) => {
  
  //console.log("showNav => ", showNav);

  //showDropMenu manages state of mobile dropdown menu
  const [showDropMenu, setShowMenu] = useState(false);
    
  return (
    
    // <nav className={showNav ? "showNav" : "hideNav"} showNav={showNav}>
      <nav className={"z-50 flex h-15 w-full px-64 justify-between items-center fixed backdrop-blur-md bg-bglight/30 dark:bg-bgdark/30 z-10"} showNav={showNav}>
      <h1 className="text-textdark dark:text-textlight uppercase text-2xl font-bold font-montserrat px-0 relative">Neil Rigg
      <div className="absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg -z-10 dark:bg-darkshadow"></div></h1>
      
      {/* <m.div className={showDropMenu ? "menu" : "menu mob-menu-hide"}> */}
      <m.div className={"flex justify-around items-center gap-8 relative "}>
      <HashLink
        className="link"
        smooth
          to="/#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">Home</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: homeInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
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
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">About</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: aboutInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        to="/#portfolio"
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">Portfolio</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: portfolioInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#skills"
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">Skills</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: skillsInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#education"
          onClick={() => setShowMenu(false)}
          >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">Education</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: educationInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#experience"
          onClick={() => setShowMenu(false)}
          >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito hover:font-bold hover:text-primary">Experience</h1>
          <m.div
            initial={{ width: "0" }}
            animate={{ width: experienceInView ? "100%" : "0" }}
            transition={{ duration: 0.75 }}
            className="bg-primary rounded-xl h-1 w-full">
          </m.div>
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#contact"
          onClick={() => setShowMenu(false)}
        >
          <Button ripple={true} variant="outlined" className="!text-primary dark:!text-textlight dark:border-textlight border-primary border-2 text-l font-bold font-nunito p-2">Contact</Button>
        </HashLink>
      </m.div>
      
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="absolute top-6 right-6 cursor-pointer">
            <Icon
                icon={theme === "dark" ? "MdOutlineWbSunny":"MdOutlineDarkMode"}
                color={theme === "dark" ? "#e2e2e2" : "#2f2f2f"}
                //className={theme === "dark" ? "light" : "dark"}
                size="25px"
                allIcons={allIcons}
            />
        </div>

      {/* {showDropMenu ? (
        <NavbarIcon
        icon="CgClose"
        color="white"
        size="30px"
        title="Close"
          className="toggle-button"
          func={setShowMenu}
          showDropMenu={showDropMenu}
          allIcons={allIcons}
          />
          ) : (
          <NavbarIcon
          icon="FiMenu"
          color="white"
          size="30px"
          title="Menu"
          className="toggle-button"
          func={setShowMenu}
          showDropMenu={showDropMenu}
          allIcons={allIcons}
          />
          )} */}
          </nav>
          );
};

export default Nav;