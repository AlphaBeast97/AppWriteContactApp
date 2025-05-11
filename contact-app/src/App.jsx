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
      className="flex flex-col items-center bg-[#323334] max-[400px] min-h-dvh px-10"
      variants={mainVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex-grow w-full flex flex-col items-center">
        <Home />
      </div>
      <Footer />
      <Toaster />
    </motion.main>
  );
};

export default App;
