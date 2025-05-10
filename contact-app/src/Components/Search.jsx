import React from "react";
import { query } from "../Config/appwrite";
import toast from "react-hot-toast";

const Search = ({ setAllContacts, setIsContactChanged }) => {

  const handleQuery = async (e) => {
    const newQuery = e.target.value;
    newQuery
    if (newQuery.trim() === "") {
      setAllContacts([])
      setIsContactChanged(true);
      return
    }

    try {
      const result = await query(newQuery);
      setAllContacts(result);
      if (result && result.length === 0 && newQuery.trim() !== "") {
        toast.error("No Contact Found", {
          id: 'notFound'
        });
      }
    } catch (error) {
      toast.error("Error Encountered During Search", error);
    }
  };

  return (
    <p className="flex items-center border-white border-1 rounded-lg px-2 w-[80%] transition-all focus-within:border-red-400">
      <img
        className="size-8 mr-3"
        src="./img/material-symbols_search.png"
        alt="search icon"
      />
      <input
        type="text"
        className="w-full px-2 text-white focus:outline-0 placeholder:text-white placeholder:font-light"
        placeholder="Search Contact"
        onChange={handleQuery}
      />
    </p>
  );
};

export default Search;
