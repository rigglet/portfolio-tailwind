import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Icon from "./Icon";
import { serverBaseURL } from "../config/config";

const ImageComponent = ({ clickEvent, fileName, allIcons }) => {
   const [loaded, setLoaded] = useState(false);

   //const clickEvent = {isState: false, isFunction: false, ...clickEvent}
   // const handleImageLoad = (e) => {
   //    setTimeout(() => {
   //       setLoaded(() => true);
   //    }, 1500);
   // };

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setLoaded(() => true);
      }, 500);
      return () => {
         clearTimeout(timeoutId);
      };
   }, []);

   return (
      <div className="w-[300px] transition">
         {!loaded && (
            <Icon
               icon="IoImageOutline"
               className={`w-[300px] max-w-[500px] rounded-sm grow-1 ${
                  loaded ? "invisible" : "visible"
               }`}
               //color="text-secondary"
               size="200px"
               title="Featured project"
               allIcons={allIcons}
            />
         )}

         {clickEvent.isState ? (
            <img
               //onLoad={handleImageLoad}
               key={uuidv4()}
               src={`${serverBaseURL()}/images/${fileName}`}
               className={`w-[300px] max-w-[500px] rounded-sm grow-1 cursor-pointer transition-all ${
                  loaded ? "visible" : "invisible"
               } transition-all`}
               alt="project screenshot"
               onClick={() => clickEvent.setter(!clickEvent.state)}
            />
         ) : clickEvent.isFunc ? (
            <img
               //onLoad={handleImageLoad}
               key={uuidv4()}
               src={`${serverBaseURL()}/images/${fileName}`}
               className={`w-[300px] max-w-[500px] rounded-sm grow-1 cursor-pointer transition-all ${
                  loaded ? "visible" : "invisible"
               } transition-all`}
               alt="project screenshot"
               onClick={() => clickEvent.function(clickEvent.param)}
            />
         ) : (
            <img
               //onLoad={handleImageLoad}
               key={uuidv4()}
               src={`${serverBaseURL()}/images/${fileName}`}
               className={`w-[300px] max-w-[500px] rounded-sm grow-1 cursor-pointer ${
                  loaded ? "block" : "hidden"
               } transition-all`}
               alt="project screenshot"
            />
         )}
      </div>
   );
};

export default ImageComponent;
