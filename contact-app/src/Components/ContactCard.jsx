import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.9 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.9 },
};

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
};

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
    <motion.div
      className="text-[12px] transition-all shadow-md shadow-gray-100 items-center px-1 py-2 bg-[#ffeaae] rounded-lg mt-5 flex"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout // This is important for smooth reordering during search/add/delete
    >
      <div className="">
        <img src="./img/user.png" alt="user dp" />
      </div>
      <div className="ml-1 w-[59%]">
        <p>{Contact.name}</p>
        <p>{Contact.email}</p>
      </div>
      <div className="flex gap-2">
        <motion.button
          onClick={handleEdit}
          className="cursor-pointer active:scale-[95%]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img src="./img/edit.png" alt="edit button" className="size-5" />
        </motion.button>
        <motion.button
          onClick={handleDelete}
          className="cursor-pointer active:scale-[95%]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <img src="./img/delete.png" alt="delete button" className="size-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ContactCard;
