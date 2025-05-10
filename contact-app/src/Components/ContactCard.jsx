import React from 'react'

const ContactCard = ({ Contact, setIsEditPressed, setIsDeletePressed, setDeleteContactId }) => {

  const handleEdit = () => {
    setIsEditPressed(true);
    console.log('edit')
  }
  const handleDelete = () => {
    setIsDeletePressed(true);
    setDeleteContactId(Contact.$id);
    console.log('del')
  }

  return (
    <div className="text-[12px] items-center px-1 py-2 bg-[#ffeaae] rounded-lg mt-5 flex">
      <div className="">
        <img src="./img/user.png" alt="user dp" />
      </div>
      <div className="w-[59%]">
        <p>M. Saad Khan{ Contact.name }</p>
        <p>ksaad5272@gmail.com{ Contact.email }</p>
      </div>
      <div className="">
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
}

export default ContactCard