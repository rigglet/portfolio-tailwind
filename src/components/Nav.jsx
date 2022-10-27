import { useState } from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Button } from "@material-tailwind/react";
import Icon from "../components/Icon"

//import NavbarIcon from "../components/NavbarIcon";

const NavLine = () => {
    return (<motion.div className="bg-primary rounded-xl h-1"> </motion.div>)
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
      <nav className={"flex h-15 w-full justify-between items-center fixed px-72"} showNav={showNav}>
      <h1 className="text-textdark dark:text-textlight uppercase text-2xl font-bold font-montserrat px-0 relative">Neil Rigg
      <div className="absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg -z-10 dark:bg-darkshadow"></div></h1>
      
      {/* <motion.div className={showDropMenu ? "menu" : "menu mob-menu-hide"}> */}
      <motion.div className={"flex justify-around items-center gap-8 relative "}>
      <HashLink
        className="link"
        smooth
          to="/#home"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">Home</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{
                width: "0%",
            }}
            animate={{
              width: homeInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
            />
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
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">About</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: aboutInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
            />
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        to="/#portfolio"
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">Portfolio</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: portfolioInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
            />
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#skills"
          onClick={() => setShowMenu(false)}
        >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">Skills</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: skillsInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
            />
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#education"
          onClick={() => setShowMenu(false)}
          >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">Education</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: educationInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
            />
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          to="/#experience"
          onClick={() => setShowMenu(false)}
          >
          <h1 className="text-textdark dark:text-textlight text-l font-semibold font-nunito">Experience</h1>
          <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: experienceInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        </HashLink>
        <HashLink
          className="link"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
          to="/#contact"
          onClick={() => setShowMenu(false)}
        >
          <Button ripple={true} variant="outlined" color="#5156B8" className="!text-textdark dark:!text-textlight border-primary border-2 text-l font-bold font-nunito p-2">Contact</Button>
          {/* <h1 className="text-textdark dark:text-textlight text-l font-normal">Contact</h1> */}
        {/* <NavLine
            height="4px"
            bgcolor="#313131"
            initial={{ width: "0%" }}
            animate={{
                width: contactInView ? "100%" : "0%",
            }}
            transition={{ duration: 0.75 }}
          />
        */}
        </HashLink> 
      </motion.div>
      
          
        {/* <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Mode</Button> */}
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