import { motion } from "framer-motion";

function container({
    children,
}) {
  return (
    <div className="h-full w-full ">
      {children}
    </div>
  );
}

export default container;