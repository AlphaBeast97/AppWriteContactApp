import React from "react";
import Home from "./Components/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="flex flex-col items-center bg-[#323334] min-w-dvw min-h-dvh px-10">
      <Home />
      <Footer />
      <Toaster />
    </main>
  );
};

export default App;
