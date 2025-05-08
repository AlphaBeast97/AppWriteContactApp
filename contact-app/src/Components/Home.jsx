import React from "react";
import Search from "./Search";
import AddContact from "./AddContact";
import NotFound from "./NotFound";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <header className="border-white size-[100%]">
      <div className="shadow-md shadow-amber-500 flex items-center justify-center gap-2 bg-white font-bold rounded-lg w-full h-fit mt-5 p-4 transition-all active:scale-[95%]">
        <img className="size-7" src="./img/logos_appwrite.svg" alt="" />
        <p> Appwrite Contact App</p>
      </div>
      <div className="flex justify-between w-full mt-5">
        <Search />
        <AddContact />
      </div>
      <NotFound />
      <ContactForm />
    </header>
  );
};

export default Home;
