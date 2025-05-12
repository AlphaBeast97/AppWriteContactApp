import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddContact from "./AddContact";
import NotFound from "./NotFound";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import motion

import { ListContacts, DeleteContact } from "../Config/appwrite";
import toast from "react-hot-toast";
import Footer from "./Footer";

const Home = () => {
  const [isCreateNewPressed, setIsCreateNewPressed] = useState(false);
  const [AllContacts, setAllContacts] = useState([]);

  const [isEditPressed, setIsEditPressed] = useState(false);
  const [editContactId, setEditContactId] = useState(null);
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const [deleteContactId, setDeleteContactId] = useState(null);

  const [isContactChanged, setIsContactChanged] = useState(false);

  const [formBtn, setFormBtn] = useState("");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [contactsVisible, setContactsVisible] = useState(false);

  const GetContacts = async () => {
    const Contacts = await ListContacts();
    setAllContacts(Contacts);
    setContactsVisible(true); // Trigger contact list animation after loading
  };

  const handleEditContact = (id) => {
    setIsEditPressed(true);
    setEditContactId(id);
  };

  useEffect(() => {
    setFormBtn(isEditPressed ? "Update Contact" : "Add Contact");
  }, [isEditPressed]);

  useEffect(() => {
    if (isDeletePressed && deleteContactId) {
      const deleteContact = async () => {
        try {
          await DeleteContact(deleteContactId);
          GetContacts();
          toast.success("Contact Delete");
        } catch (error) {
          console.error("Error deleting contact:", error);
          toast.error("Failed To Delete Contact");
        } finally {
          setIsDeletePressed(false);
          setDeleteContactId(null);
        }
      };
      deleteContact();
    }
  }, [isDeletePressed, deleteContactId]);

  useEffect(() => {
    GetContacts();
    setIsContactChanged(false);
  }, [isContactChanged]);

  useEffect(() => {
    GetContacts();
    setHeaderVisible(true); // Trigger header animation on mount
    setIsContactChanged(false);
  }, []);

  const headerVariants = {
    initial: { opacity: 0, y: -20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const contactsVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="border-white size-[100%]"
      variants={headerVariants}
      initial="initial"
      animate={headerVisible ? "animate" : "initial"}
    >
      <motion.div className="shadow-md shadow-red-300 flex items-center justify-center gap-2 bg-white font-bold rounded-lg w-full h-fit mt-5 p-4 transition-all active:scale-[95%]">
        <img className="size-7" src="./img/logos_appwrite.svg" alt="" />
        <p>Appwrite Contact App</p>
      </motion.div>
      <div className="flex justify-between w-full mt-5">
        <Search
          setAllContacts={setAllContacts}
          setIsContactChanged={setIsContactChanged}
        />
        <AddContact setIsCreateNewPressed={setIsCreateNewPressed} />
      </div>

      {(isCreateNewPressed || isEditPressed) && (
        <ContactForm
          formBtn={formBtn}
          setIsCreateNewPressed={setIsCreateNewPressed}
          setIsEditPressed={setIsEditPressed}
          setIsContactChanged={setIsContactChanged}
          editContactId={editContactId}
          setEditContactId={setEditContactId}
        />
      )}
      <motion.div
        variants={contactsVariants}
        initial="initial"
        animate={contactsVisible ? "animate" : "initial"}
        className="pb-28"
      >
        {AllContacts.length === 0 ? (
          <NotFound />
        ) : (
          AllContacts.map((Contact) => (
            <ContactCard
              key={Contact.$id}
              Contact={Contact}
              handleEditContact={handleEditContact}
              setIsDeletePressed={setIsDeletePressed}
              setDeleteContactId={setDeleteContactId}
            />
          ))
        )}
      </motion.div>
      <div className='bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
