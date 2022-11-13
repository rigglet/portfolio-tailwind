import Icon from "./Icon";

//uuid
import { v4 as uuidv4 } from "uuid";

const IconSection = ({ arrIcons, allIcons }) => {
   return (
      <div className="flex flex-wrap gap-6 justify-center text-textdark">
         {arrIcons.map((icon) => {
            return (
               <div key={uuidv4()}>
                  <a
                     key={uuidv4()}
                     href={icon.address}
                     target="_blank"
                     rel="noreferrer"
                     className="flex flex-col items-center justify-around"
                  >
                     <h4>{icon.name}</h4>
                     <Icon
                        icon={icon.icon}
                        color={icon.color}
                        size="50px"
                        allIcons={allIcons}
                     />
                  </a>
               </div>
            );
         })}
      </div>
   );
};

export default IconSection;
