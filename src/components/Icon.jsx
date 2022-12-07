import { useMemo } from "react";
//import PropTypes from "prop-types";
//icons
import { IconContext } from "react-icons";

const Icon = ({ icon, color, size, title, className, allIcons }) => {
   let DynamicIcon = allIcons[icon];

   return (
      <IconContext.Provider
         value={{
            color,
            size,
            title,
            className: color === undefined ? className : false,
         }}
      >
         {useMemo(
            () => DynamicIcon !== undefined && <DynamicIcon />,
            [DynamicIcon]
         )}
      </IconContext.Provider>
   );
};

// Icon.propTypes = {
//   icon: PropTypes.string,
//   color: PropTypes.string,
//   size: PropTypes.string,
//   title: PropTypes.string,
// };

// Icon.defaultProps = {
//   icon: "FaFlushed",
//   color: "blue",
//   size: "30px",
//   title: "icon",
// };

export default Icon;
