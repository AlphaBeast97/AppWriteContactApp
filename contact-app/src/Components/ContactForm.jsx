import React, { useState } from "react";
import {
  CreateContact,
  UpdateContact,
} from "../Config/appwrite.js";

const ContactForm = ({
  formBtn,
  setIsCreateNewPressed,
  setIsEditPressed,
  setIsContactChanged,
  editContactId,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const ButtonText = formBtn;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCancel = () => {
    setIsEditPressed(false);
    setIsCreateNewPressed(false);
  };

  const handleSubmit = async () => {
    try {
      if (editContactId) {
        await UpdateContact(editContactId, name, email);
      } else {
        await CreateContact(name, email);
      }

      setIsContactChanged(true); // Trigger list refresh in Home
      setIsEditPressed(false);
      setIsCreateNewPressed(false);
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div className="bg-[#fdfdfd] px-3 p-5 z-10 flex flex-col gap-4 absolute border top-[22%] scale-[95%] w-[80%] rounded-lg">
      <div className="flex justify-end h-4">
        <button
          onClick={handleCancel}
          className="cursor-pointer transition-all active:scale-[95%]"
        >
          <img className="size-10" src="./img/icons8-cancel.svg" alt="cancel button" />
        </button>
      </div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border block p-2 w-full"
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter Name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          className="border block p-2 w-full"
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter Name"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="border ml-[50%] rounded p-1 bg-[#fcca3f] transition-all active:scale-[95%]"
      >
        {ButtonText}
      </button>
    </div>
  );
};

export default ContactForm;
