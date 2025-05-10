import React from "react";

const ContactForm = ({ formBtn, setIsCreateNewPressed, setIsEditPressed }) => {
  
  const ButtonText = formBtn;

  const handleNameChange = () => {};
  const handleEmailChange = () => {};
  const handleCancel = () => {
    setIsEditPressed(false)
    setIsCreateNewPressed(false)
  };
  const handleSubmit = () => {};
  return (
    <div className="bg-[#fdfdfd] px-3 p-5 flex flex-col gap-4 absolute border top-[22%] scale-[95%] w-[80%] rounded-lg">
      <div className="flex justify-end h-5"><button onClick={handleCancel} className="cursor-pointer transition-all active:scale-[95%]"><img src="./img/icons8-cancel.svg" alt="cancel button" /></button></div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          className="border block p-2 w-full"
          type="text"
          id="name"
          //   value={Name}
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
          //   value={email}
          onChange={handleEmailChange}
          placeholder="Enter Name"
        />
      </div>
      <button onClick={handleSubmit} className="border ml-[50%] rounded p-1 bg-[#fcca3f] transition-all active:scale-[95%]">
        {ButtonText}
      </button>
    </div>
  );
};

export default ContactForm;
