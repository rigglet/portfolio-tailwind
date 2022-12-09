import React from "react";
import ContentLoader from "react-content-loader";

const loader = (props) => {
   return (
      <ContentLoader
         width={800}
         height={500}
         viewBox="0 0 800 350"
         backgroundColor="#D0D0D0"
         foregroundColor="#E2E2E2"
         {...props}
      >
         {props.rows >= 1 && (
            <rect
               x="0"
               y="0"
               rx="2"
               ry="2"
               width="800"
               height="100"
            />
         )}

         {props.rows >= 2 && (
            <rect
               x="0"
               y="125"
               rx="2"
               ry="2"
               width="800"
               height="100"
            />
         )}
         {props.rows >= 3 && (
            <rect
               x="0"
               y="250"
               rx="2"
               ry="2"
               width="800"
               height="100"
            />
         )}
      </ContentLoader>
   );
};

export default loader;
