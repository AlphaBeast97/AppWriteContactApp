import React from "react";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const App = () => {
  const mainVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.main
      className="flex justify-center items-center bg-[#323334] px-10"
      variants={mainVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col items-center max-w-[500px] min-h-dvh">
        <div className="">
          <Home />
        </div>
        <div className="absolute bottom-0">
          <Footer />
        </div>
      </div>
      <Toaster />
    </motion.main>
  );
};

export default App;
