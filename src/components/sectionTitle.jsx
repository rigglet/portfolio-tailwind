import { motion as m } from "framer-motion";
const SectionTitle = ({ title, variants }) => {
   return (
      <m.div variants={variants}>
         <div className="flex items-start">
            <h1 className="text-textdark dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
               {title}
               <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
            </h1>
         </div>
      </m.div>
   );
};

export default SectionTitle;
