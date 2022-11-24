import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Icon from "./Icon";
import { serverBaseURL } from "../config/config";

const ImageComponent = ({
   setShowGallery,
   showGallery,
   fileName,
   allIcons,
}) => {
   const [loaded, setLoaded] = useState(false);

   const handleImageLoad = (e) => {
      setTimeout(() => {
         setLoaded(() => true);
      }, 1500);
   };

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

         <img
            onLoad={handleImageLoad}
            key={uuidv4()}
            src={`${serverBaseURL()}/images/${fileName}`}
            className={`w-[300px] max-w-[500px] rounded-sm grow-1 cursor-pointer ${
               loaded ? "block" : "hidden"
            } transition-all`}
            alt="project screenshot"
            onClick={() => {
               setShowGallery(!showGallery);
            }}
         />
      </div>
   );
};

export default ImageComponent;
