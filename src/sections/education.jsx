//framer motion and styled components
import { motion as m } from "framer-motion";
import Icon from "../components/Icon";
//import { fadeInOut } from "../styles/animations";
import Card from "../components/educationCard";
import { cardData } from "../data/data";
import { v4 as uuidv4 } from "uuid";
import SectionTitle from "../components/sectionTitle";

const Education = ({
   educationRef,
   educationControls,
   allIcons,
   showDropMenu,
}) => {
   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.5,
         },
      },
   };

   const item = {
      hidden: { opacity: 0 },
      show: { opacity: 1 },
   };
   return (
      <section
         ref={educationRef}
         className={`pt-20 flex flex-col items-start justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-4 ${
            showDropMenu && "blur-sm"
         }`}
      >
         <SectionTitle title="Education" />

         <m.div
            className="flex w-full flex-wrap justify-center md:justify-evenly gap-4"
            variants={container}
            initial="hidden"
            whileInView={"show"}
         >
            {cardData.map((institution) => (
               <Card
                  key={uuidv4()}
                  data={institution}
                  variants={item}
               />
            ))}
         </m.div>
      </section>
   );
};

export default Education;
