import Icon from "./Icon";
import { motion as m } from "framer-motion";

//uuid
import { v4 as uuidv4 } from "uuid";

const IconSection = ({ arrIcons, allIcons }) => {
   return (
      <div className="flex flex-wrap gap-6 justify-center text-textdark dark:text-textlight">
         {arrIcons.map((icon) => {
            return (
               <m.div key={uuidv4()}>
                  <a
                     key={uuidv4()}
                     href={icon.address}
                     target="_blank"
                     rel="noreferrer"
                     className="flex flex-col items-center justify-around rotate-0 hover:rotate-12 transition-all ease-out duration-150"
                  >
                     <h4>{icon.name}</h4>
                     <Icon
                        icon={icon.icon}
                        color={icon.color}
                        size="50px"
                        allIcons={allIcons}
                     />
                  </a>
               </m.div>
            );
         })}
      </div>
   );
};

export default IconSection;
