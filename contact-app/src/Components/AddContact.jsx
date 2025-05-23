import React from "react";

const AddContact = ({ setIsCreateNewPressed }) => {

  return (
    <button onClick={() => setIsCreateNewPressed(true)} className="transition-all active:scale-[90%] cursor-pointer rounded-4xl">
      <img className="rounded-4xl" src="./img/Group 1.png" alt="add contact" />
    </button>
  );
};

export default AddContact;
