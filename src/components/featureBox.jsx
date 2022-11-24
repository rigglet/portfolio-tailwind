import SubSectionTitle from "./subSectionTitle";

const FeatureBox = ({ title, children }) => {
   return (
      <section className="border-primary border-2 bg-white dark:bg-[#2B2B37] rounded-lg p-4 font-poppins grow">
         {title && <SubSectionTitle title={title} />}
         {children}
      </section>
   );
};

export default FeatureBox;
