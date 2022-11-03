import * as aiIcons from "react-icons/ai";
import * as bsIcons from "react-icons/bs";
import * as biIcons from "react-icons/bi";
import * as fcIcons from "react-icons/fc";
import * as giIcons from "react-icons/gi";
import * as goIcons from "react-icons/go";
import * as grIcons from "react-icons/gr";
import * as ioIcons from "react-icons/io";
import * as io5Icons from "react-icons/io5";
import * as riIcons from "react-icons/ri";
import * as tiIcons from "react-icons/ti";
import * as wiIcons from "react-icons/wi";
import * as cgIcons from "react-icons/cg";
import * as mdIcons from "react-icons/md";
import * as vscIcons from "react-icons/vsc";
import * as hiIcons from "react-icons/hi";
import * as imIcons from "react-icons/im";
import * as siIcons from "react-icons/si";
import * as diIcons from "react-icons/di";
import * as fiIcons from "react-icons/fi";
import * as faIcons from "react-icons/fa";

import Section from "./components/Section";
import Home from "./sections/home";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Skills from "./sections/skills";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

import { useCallback, useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import useScroll from "./hooks/useScroll";
//import useHideNav from "./components/useHideNav";
import { throttle } from "./utility/utility";

function App() {
   const [theme, setTheme] = useState("light");

   useEffect(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
         setTheme("dark");
      } else {
         setTheme("light");
      }
   }, []);

   useEffect(() => {
      if (theme === "dark") {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [theme]);

   const [homeRef, homeControls, homeInView] = useScroll();
   const [aboutRef, aboutControls, aboutInView] = useScroll();
   const [portfolioRef, portfolioControls, portfolioInView] = useScroll();
   const [skillsRef, skillsControls, skillsInView] = useScroll();
   const [educationRef, educationControls, educationInView] = useScroll();
   const [experienceRef, experienceControls, experienceInView] = useScroll();
   const [contactRef, contactControls, contactInView] = useScroll();

   //icons
   let allIcons = {
      ...aiIcons,
      ...bsIcons,
      ...biIcons,
      ...fcIcons,
      ...giIcons,
      ...goIcons,
      ...grIcons,
      ...ioIcons,
      ...io5Icons,
      ...riIcons,
      ...tiIcons,
      ...wiIcons,
      ...cgIcons,
      ...mdIcons,
      ...diIcons,
      ...faIcons,
      ...fiIcons,
      ...hiIcons,
      ...imIcons,
      ...siIcons,
      ...vscIcons,
   };

   const elementRef = useRef();
   const [showNav, setShowNav] = useState(true);
   const lastPositionRef = useRef(0);
   let currentPosition = 0;

   const updateMenuStatus = () => {
      currentPosition = elementRef?.current?.scrollTop;
      //currentPosition < lastPositionRef.current ? console.log("show menu") : console.log("hide menu");
      currentPosition < lastPositionRef.current
         ? setShowNav(() => true)
         : setShowNav(() => false);
      lastPositionRef.current = currentPosition;
      //console.log(lastPositionRef.current, " => ", currentPosition);
   };

   //console.log(showNav);

   // eslint-disable-next-line react-hooks/exhaustive-deps
   const handleScroll = useCallback(throttle(updateMenuStatus, 1500), []);
   //const handleScroll = useCallback(throttle(updateMenuStatus, 5000), []);

   return (
      <div
         onScroll={handleScroll}
         ref={elementRef}
         className="bg-bglight dark:bg-bgdark"
      >
         <AnimatePresence
            initial={false}
            mode="wait"
         >
            <Router>
               <Nav
                  homeInView={homeInView}
                  aboutInView={aboutInView}
                  portfolioInView={portfolioInView}
                  skillsInView={skillsInView}
                  educationInView={educationInView}
                  experienceInView={experienceInView}
                  contactInView={contactInView}
                  allIcons={allIcons}
                  showNav={showNav}
                  theme={theme}
                  setTheme={setTheme}
               />
               <Routes>
                  <Route
                     exact
                     path="/"
                     element={
                        <div className="flex flex-col">
                           <Section id="home">
                              <Home
                                 homeRef={homeRef}
                                 homeControls={homeControls}
                                 showNav={showNav}
                              />
                           </Section>
                           <Section id="about">
                              <About
                                 aboutRef={aboutRef}
                                 aboutControls={aboutControls}
                                 showNav={showNav}
                              />
                           </Section>
                           <Section id="portfolio">
                              <Portfolio
                                 portfolioRef={portfolioRef}
                                 portfolioControls={portfolioControls}
                                 portfolioInView={portfolioInView}
                                 allIcons={allIcons}
                                 showNav={showNav}
                              />
                           </Section>
                           <Section id="skills">
                              <Skills
                                 skillsRef={skillsRef}
                                 skillsControls={skillsControls}
                                 allIcons={allIcons}
                                 showNav={showNav}
                              />
                           </Section>

                           <Section id="education">
                              <Education
                                 educationRef={educationRef}
                                 educationControls={educationControls}
                                 allIcons={allIcons}
                                 showNav={showNav}
                              />
                           </Section>
                           <Section id="experience">
                              <Experience
                                 experienceRef={experienceRef}
                                 experienceControls={experienceControls}
                                 allIcons={allIcons}
                                 showNav={showNav}
                              />
                           </Section>
                           <Section id="contact">
                              <Contact
                                 contactRef={contactRef}
                                 contactControls={contactControls}
                                 allIcons={allIcons}
                                 showNav={showNav}
                              />
                           </Section>
                        </div>
                     }
                  />
               </Routes>
               <Footer allIcons={allIcons} />
            </Router>
         </AnimatePresence>
      </div>
   );
}

export default App;
