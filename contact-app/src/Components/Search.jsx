import React from "react";

const Search = () => {
  const handleQuery = (e) => {
    const Query = e.target.value;
    console.log(Query);
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
