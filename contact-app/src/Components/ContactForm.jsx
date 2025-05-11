import React, { useState, useEffect } from "react";
import { CreateContact, UpdateContact } from "../Config/appwrite.js";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = ({
  formBtn,
  setIsCreateNewPressed,
  setIsEditPressed,
  setIsContactChanged,
  editContactId,
  setEditContactId,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(true); // Control visibility for animation

  const ButtonText = formBtn;

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsEditPressed(false);
      setIsCreateNewPressed(false);
    }, 300); // Match the exit animation duration
  };

  const handleSubmit = async () => {
    if (name === "" || email === "") {
      toast.error("Field Cannot Be Empty");
      return;
    }

    try {
      if (editContactId) {
        await UpdateContact(editContactId, name, email);
        toast.success("Contact Updated");
      } else {
        try {
          await CreateContact(name, email);
          toast.success("New Contact Added");
        } catch (error) {
          toast.error("Failed To Create New Contact");
          console.error(`Failed to create new contact ${error}`);
        }
      }
    } catch (error) {
      toast.error("Failed to edit contact");
      console.error("Error saving contact:", error);
    } finally {
      setEditContactId(null);
      setIsContactChanged(true); // Trigger list refresh in Home
      setIsVisible(false);
      setTimeout(() => {
        setIsEditPressed(false);
        setIsCreateNewPressed(false);
      }, 300); // Match the exit animation duration
    }
  };

  const formVariants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  useEffect(() => {
    setIsVisible(true); // Make the form visible when it mounts (or becomes active)
  }, [formBtn]); // Re-run effect when formBtn changes (indicating create/edit mode)

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="bg-[#fdfdfd] px-3 p-5 z-90 flex flex-col gap-4 absolute border top-[22%] scale-[95%] w-[80%] rounded-lg"
            variants={formVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex justify-end h-4">
              <motion.button
                onClick={handleCancel}
                className="cursor-pointer transition-all active:scale-[95%]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  className="size-10"
                  src="./img/icons8-cancel.svg"
                  alt="cancel button"
                />
              </motion.button>
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
                placeholder="Enter Email"
              />
            </div>
            <motion.button
              onClick={handleSubmit}
              className="border ml-[50%] rounded p-1 bg-[#fcca3f] transition-all active:scale-[95%]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ButtonText}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute border z-50 left-0 top-0 backdrop-blur-xs w-screen h-screen from-0% to-100% transition-all" />
    </>
  );
};

export default ContactForm;
