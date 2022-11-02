import Icon from "../components/Icon";

const Footer = ({ allIcons }) => {
   return (
      <main className="h-auto gap-y-6 md:h-15 p-4 md:p-0 md:py-0 flex flex-col md:flex-row w-full justify-evenly items-center bg-gradient-to-b from-secondary to-primary">
         <div className="flex flex-col md:flex-row items-center justify-around gap-x-4 gap-y-4 h-auto gap">
            <Icon
               icon="FaGithub"
               color="#e2e2e2"
               size="40px"
               allIcons={allIcons}
            />
            <div className="flex flex-col items-center md:items-start justify-around text-m !text-textlight font-poppins text-sm">
               <h1 className="font-semibold">Github:</h1>
               <p className="font-normal">https://github.com/rigglet</p>
            </div>
         </div>

         <div className="flex flex-col md:flex-row items-center justify-around gap-x-4 gap-y-4 h-auto">
            <Icon
               icon="FaLinkedin"
               color="#e2e2e2"
               size="40px"
               allIcons={allIcons}
            />
            <div className="flex flex-col items-center md:items-start justify-around text-m !text-textlight font-poppins  text-sm">
               <h1 className="font-semibold">Linked In:</h1>
               <p className="font-normal">
                  https://www.linkedin.com/in/neil-rigg-794243159/
               </p>
            </div>
         </div>
      </main>
   );
};

export default Footer;
