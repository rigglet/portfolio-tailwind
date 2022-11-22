import SubSectionTitle from "./subSectionTitle";

const FeatureBox = ({ title, children }) => {
   return (
      <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
         <SubSectionTitle title={title} />
         {children}
      </section>
   );
};

export default FeatureBox;
