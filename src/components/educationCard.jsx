import { motion as m } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Card = ({ data, item }) => {
   //console.log(data);
   return (
      <m.div
         className="relative z-0 w-80 "
         variants={item}
      >
         <div className="bg-white rounded-lg p-4 w-72 flex flex-col items-center justify-start gap-y-4 relative !z-10 h-full">
            <div className="relative flex flex-col w-48 h-48 justify-center items-center rounded-full">
               <img
                  className="saturate-50 object-fit h-48 min-h-0 p-1 rounded-full"
                  src={data.image}
                  alt="Card educational building"
               />
               <div className="text-sm font-poppins absolute text-primary font-semibold bottom-0 left-0 bg-white border-primary border-2 border rounded-lg p-1">
                  {data.place}
               </div>
               <div className="text-sm font-poppins absolute text-primary font-semibold bottom-0 right-0 bg-white border-primary border-2 border rounded-lg p-1">
                  {data.stats}
               </div>
            </div>

            <div className="font-poppins text-textdark font-normal text-sm flex flex-col gap-y-4 items-between w-full">
               <h4 className="font-poppins text-primary font-bold text-sm mb-4 text-center">
                  {data.name}
               </h4>

               {data.qualifications.map((qualification) => {
                  return (
                     <div key={uuidv4()}>
                        <h4 className="font-semibold">{qualification.type}</h4>

                        {qualification.subjects.map((subject) => {
                           return (
                              <div
                                 key={uuidv4()}
                                 className="flex justify-between w-full"
                              >
                                 <p className="subject-name">{subject.name}</p>
                                 <p className="subject-result">
                                    {subject.result}
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                  );
               })}

               {data.content.length > 0 && (
                  <section className="curriculum">
                     <h4 className="font-semibold">Overview of curriculum</h4>
                     {data.content?.map((item) => {
                        return <p key={uuidv4()}>{item}</p>;
                     })}
                  </section>
               )}
            </div>
         </div>
         <div
            className="absolute top-0 left-0 w-95 h-95 bg-gradient-to-br from-secondary to-primary blur-md !-z-10
       -translate-x-2 translate-y-6 "
         ></div>
      </m.div>
      // -translate-x-4 -translate-y-2
   );
};

export default Card;
