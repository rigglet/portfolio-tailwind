import Icon from "../components/Icon";

const Footer = ({ allIcons, showDropMenu }) => {
   return (
      <main
         className={`mt-4 md:mt-0 h-auto gap-y-6 lg:h-15 p-4 lg:p-0 lg:py-0 flex flex-col lg:flex-row w-full justify-evenly items-start md:items-center bg-gradient-to-b from-secondary to-primary ${
            showDropMenu && "blur-sm"
         }`}
      >
         <div className="flex flex-row items-center justify-between md:justify-center gap-x-4 gap-y-4 h-auto md:w-full">
            <Icon
               icon="FaGithub"
               color="#e2e2e2"
               size="40px"
               allIcons={allIcons}
            />
            <div className="flex flex-col items-center md:items-start justify-around text-m !text-textlight font-poppins text-sm">
               {/* <h1 className="font-semibold">Github:</h1> */}
               <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rigglet"
                  className="font-normal hover:scale-105"
               >
                  https://github.com/rigglet
               </a>
            </div>
         </div>

         <div className="flex flex-row items-center justify-between md:justify-center gap-x-4 gap-y-4 h-auto w-full">
            <Icon
               icon="FaLinkedin"
               color="#e2e2e2"
               size="40px"
               allIcons={allIcons}
            />
            <div className="flex flex-col items-center md:items-start justify-around text-m !text-textlight font-poppins  text-sm">
               {/* <h1 className="font-semibold">Linked In:</h1> */}
               <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/neil-rigg-794243159/"
                  className="font-normal hover:scale-105"
               >
                  https://www.linkedin.com/in/neil-rigg-794243159/
               </a>
            </div>
         </div>
      </main>
   );
};

export default Footer;
