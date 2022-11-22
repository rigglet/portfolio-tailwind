import underline from "../img/underline.svg";

const SubSectionTitle = ({ title }) => {
   return (
      <div className="inline-block mb-2">
         <h2 className="relative font-semibold font-poppins text-textdark">
            {title}
            <img
               className="absolute top-6 left-0 z-50 w-full"
               src={underline}
               alt="underline"
            />
         </h2>
      </div>
   );
};

export default SubSectionTitle;
