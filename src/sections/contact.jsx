import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "@material-tailwind/react";

//framer motion and styled components
import { motion as m } from "framer-motion";
import {
   buttonVariants,
   flyIn,
   planeVariants,
   trailVariants,
   slideRight,
   slideDown,
   slideUp,
} from "../styles/animations";

//email
import emailjs from "@emailjs/browser";

//message components
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//SVGs
import plane from "../img/plane.svg";
import trail from "../img/trail.svg";

const Contact = ({
   contactRef,
   contactControls,
   showMenu,
   allIcons,
   showDropMenu,
}) => {
   //Toast settings
   const notify = (type) => {
      const toastStyle = {
         position: "bottom-center",
         autoClose: 2000,
         hideProgressBar: true,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: false,

         progress: "0.. 1",
         theme: "colored",
      };
      switch (type) {
         case "SUCCESS":
            toast.dark("Message sent", toastStyle);
            break;
         case "FAILURE":
            toast.dark("Message failed to send", toastStyle);
            break;
         default:
            toast.dark("Nothing to report", toastStyle);
      }
   };

   // Formik hook / settings
   const formik = useFormik({
      //initial values
      initialValues: {
         user_name: "",
         user_subject: "",
         user_email: "",
         message: "",
      },

      //validation settings
      validationSchema: yup.object({
         user_name: yup
            .string()
            .min(3, "Name must be at least 3 chararcters.")
            .max(20, "Name must be less than 20 chararcters.")
            .required("Name is required"),
         user_subject: yup
            .string()
            .min(5, "Subject must be at least 5 characters.")
            .max(30, "Subject must be less than 30 characters.")
            .required("Subject is required"),
         user_email: yup
            .string()
            .email("Invalid email address.")
            .required("Email is required"),
         message: yup
            .string()
            .min(5, "Message must be at least 5 characters.")
            .max(30, "Message must be less than 30 characters.")
            .required("Message is required"),
      }),

      //on submit
      onSubmit: (values) => {
         emailjs
            .send(
               process.env.REACT_APP_SERVICE_ID,
               process.env.REACT_APP_TEMPLATE_ID,
               values,
               process.env.REACT_APP_USER_ID
            )
            .then((result) => {
               if (result.status === 200) {
                  //sent message
                  notify("SUCCESS");
                  formik.resetForm();
               }
            })
            .catch((err) => {
               console.log(err);
               notify("FAILURE");
            });
      },
   });

   return (
      <section
         ref={contactRef}
         className={`mt-4 md:mt-0 md:py-20 flex flex-col items-start justify-around w-full min-h-screen bg-bglight dark:bg-bgdark gap-y-6 ${
            showDropMenu && "blur-sm"
         }`}
      >
         <ToastContainer />

         <m.div
            // variants={fadeInOut}
            // initial="initial"
            // animate={educationControls}
            className="flex flex-col items-center justify-center"
         >
            <div className="flex items-start">
               <h1 className="text-primary dark:text-textlight uppercase text-xl font-extrabold font-montserrat px-0 relative z-10">
                  Contact
                  <div className="-rotate-6 -z-10 absolute bg-white w-full h-full top-2 left-2 blur-sm rounded-lg dark:bg-darkshadow"></div>
               </h1>
            </div>
         </m.div>

         {/* main container */}
         <main className="flex font-poppins gap-x-4 w-full flex-col lg:flex-row">
            {/* form container */}
            <div className="flex-1 flex flex-col items-start gap-y-4 ">
               <h2 className="text-textdark dark:text-textlight font-semibold text-2xl">
                  Get in touch
               </h2>
               <p className="text-textdark dark:text-textlight font-normal text-xl">
                  I'm always happy to hear from people interested in working
                  together. Drop me a message!
               </p>
               <form
                  onSubmit={formik.handleSubmit}
                  autoComplete="off"
                  className="flex flex-col gap-y-4 text-sm w-full text-textdark dark:text-textlight"
               >
                  <div>
                     <label
                        htmlFor="user_name"
                        className={`block font-semibold pb-1 ${
                           formik.errors.user_name && formik.touched.user_name
                              ? "text-red-400"
                              : ""
                        }`}
                     >
                        {formik.errors.user_name && formik.touched.user_name
                           ? formik.errors.user_name
                           : "Name"}
                     </label>
                     <input
                        placeholder="Name"
                        autoComplete="off"
                        name="user_name"
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="bg-input rounded-md w-full text-sm focus:ring-primary"
                     />
                  </div>
                  <div className="form-item">
                     <label
                        htmlFor="user_subject"
                        className={`block font-semibold pb-1 ${
                           formik.errors.user_subject &&
                           formik.touched.user_subject
                              ? "text-red-400"
                              : ""
                        }`}
                     >
                        {formik.errors.user_subject &&
                        formik.touched.user_subject
                           ? formik.errors.user_subject
                           : "Subject"}
                     </label>
                     <input
                        placeholder="Subject"
                        autoComplete="off"
                        name="user_subject"
                        value={formik.values.user_subject}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="bg-input rounded-md w-full text-sm focus:ring-primary"
                     />
                  </div>
                  <div className="form-item">
                     <label
                        htmlFor="user_email"
                        className={`block font-semibold pb-1 ${
                           formik.errors.user_email && formik.touched.user_email
                              ? "text-red-400"
                              : ""
                        }`}
                     >
                        {formik.errors.user_email && formik.touched.user_email
                           ? formik.errors.user_email
                           : "Email"}
                     </label>
                     <input
                        placeholder="Email"
                        autoComplete="off"
                        name="user_email"
                        value={formik.values.user_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="email"
                        className="bg-input rounded-md w-full text-sm focus:ring-primary"
                     />
                  </div>
                  <div className="form-item">
                     <label
                        htmlFor="message"
                        className={`block font-semibold pb-1 ${
                           formik.errors.message && formik.touched.message
                              ? "text-red-400"
                              : ""
                        }`}
                     >
                        {formik.errors.message && formik.touched.message
                           ? formik.errors.message
                           : "Message"}
                     </label>
                     <textarea
                        placeholder="Message..."
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        autoComplete="off"
                        cols="15"
                        rows="3"
                        className="bg-input rounded-xl w-full resize-none text-sm focus:ring-primary"
                     />
                  </div>

                  <Button
                     type="submit"
                     ripple={true}
                     variant="filled"
                     className="bg-primary !text-textlight dark:text-textlight text-l font-bold font-nunito hover:!shadow-lg hover:!shadow-indigo-500/40"
                  >
                     Send Message
                  </Button>
               </form>
            </div>

            {/* Image */}
            <div className="relative flex-1 flex hidden xl:block">
               <img
                  src={trail}
                  title="plane trail"
                  alt="plane trail"
                  className="px-4 h-2/3 absolute bottom-0 left-8 -translate-y-16 rotate-[5deg]"
               />
               <img
                  src={plane}
                  title="plane flying"
                  alt="plane swooping"
                  className="py-4 w-1/3 absolute top-0 right-0"
               />
            </div>
         </main>
      </section>
   );
};

export default Contact;
