import SectionTitle from "./sectionTitle";

const FeatureBox = ({ title, children }) => {
   return (
      <section className="border-primary border-2 bg-white rounded-lg p-4 font-poppins grow">
         <SectionTitle title={title} />
         {children}
      </section>
   );
};

export default FeatureBox;
