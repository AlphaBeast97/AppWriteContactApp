import React from 'react'

const ContactCard = ({
  Contact,
  handleEditContact,
  setIsDeletePressed,
  setDeleteContactId,
}) => {
  const handleEdit = () => {
    handleEditContact(Contact.$id);
  };

  const handleDelete = () => {
    setIsDeletePressed(true);
    setDeleteContactId(Contact.$id);
  };

  return (
    <div className="text-[12px] transition-all shadow-md shadow-gray-100 items-center px-1 py-2 bg-[#ffeaae] rounded-lg mt-5 flex">
      <div className="">
        <img src="./img/user.png" alt="user dp" />
      </div>
      <div className="ml-1 w-[59%]">
        <p>{Contact.name}</p>
        <p>{Contact.email}</p>
      </div>
      <div className="absolute right-20">
        <button
          onClick={handleEdit}
          className="cursor-pointer active:scale-[95%]"
        >
          <img src="./img/edit.png" alt="edit button" />
        </button>
        <button
          onClick={handleDelete}
          className="cursor-pointer active:scale-[95%]"
        >
          <img src="./img/delete.png" alt="delete button" />
        </button>
      </div>
    </div>
  );
};

export default ContactCard