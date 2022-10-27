import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//used to identify when a section is in view
//returns view, which is passed to Nav, this triggers menu animation
//element is a Ref, controls is an object from framer-motion
//These 2 are used to trigger animation in each section on scroll
export default function useScroll() {
  const [element, view] = useInView({
    threshold: [0.2, 0.5],
    //triggerOnce: true,
  });
  const controls = useAnimation();
  
  if (view) {
    controls.start("animate");
  } else {
    controls.start("initial");
  }
  return [element, controls, view];
}