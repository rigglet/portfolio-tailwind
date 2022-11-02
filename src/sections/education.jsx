//framer motion and styled components
import { motion as m } from "framer-motion";
import Icon from "../components/Icon";
//import { fadeInOut } from "../styles/animations";
import Card from "../components/educationCard";
import { cardData } from "../data/data";
import { v4 as uuidv4 } from 'uuid';

const Education = ({ educationRef, educationControls, allIcons }) => {

  return (
    <section ref={educationRef} className="pt-20 flex flex-col items-start justify-around w-full h-full min-h-screen bg-bglight dark:bg-bgdark gap-y-4">
        
        <m.div
        // variants={fadeInOut}
        // initial="initial"
        // animate={educationControls}
        className="flex flex-col items-center justify-center"
        >
            <div className="flex items-start">
                <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">Education
                    <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow">
                    </div>
                </h1>
            </div>
        </m.div>
        

      <div className="flex w-full flex-wrap justify-between gap-4">
        {
          cardData.map(institution => <Card key={uuidv4()} data={institution} />)
        }
      </div>
    </section>
  );
};

export default Education;