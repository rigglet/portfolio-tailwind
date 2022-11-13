import { AiFillCloseCircle } from "react-icons/ai";

export default function closeButton({ closeFunction }) {
   return (
      <button
         onClick={() => closeFunction(false)}
         className="absolute top-[1rem] right-[1rem] cursor-pointer flex items-center justify-center p-2"
      >
         <AiFillCloseCircle className="rounded-full w-[25px] h-[25px] text-textdark dark:text-textlight hover:text-secondary dark:hover:text-secondary hover:duration-300 transition-all hover:scale-105" />
      </button>
   );
}
