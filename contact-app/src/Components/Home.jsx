import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddContact from "./AddContact";
import NotFound from "./NotFound";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

import { ListContacts, DeleteContact } from "../Config/appwrite";
import toast from "react-hot-toast";

const Home = () => {
  const [isCreateNewPressed, setIsCreateNewPressed] = useState(false);
  const [AllContacts, setAllContacts] = useState([]);

  const [isEditPressed, setIsEditPressed] = useState(false);
  const [editContactId, setEditContactId] = useState(null);
  const [isDeletePressed, setIsDeletePressed] = useState(false);
  const [deleteContactId, setDeleteContactId] = useState(null);

  const [isContactChanged, setIsContactChanged] = useState(false);

  const [formBtn, setFormBtn] = useState("");

  const GetContacts = async () => {
    const Contacts = await ListContacts();
    setAllContacts(Contacts);
  };

  const handleEditContact = (id) => {
    // Function to set edit mode
    setIsEditPressed(true);
    setEditContactId(id); // Store the contact's ID
  };

  useEffect(() => {
    setFormBtn(isEditPressed ? "Update Contact" : "Add Contact");
  }, [isEditPressed]);

  useEffect(() => {
    if (isDeletePressed && deleteContactId) {
      const deleteContact = async () => {
        try {
          await DeleteContact(deleteContactId);
          GetContacts(); // Refresh the contact list after deletion
          toast.success("Contact Delete");
        } catch (error) {
          console.error("Error deleting contact:", error);
          toast.error("Failed To Delete Contact");
          // Handle the error (e.g., show an error message to the user)
        } finally {
          setIsDeletePressed(false);
          setDeleteContactId(null); // Reset deleteContactId
        }
      };
      deleteContact();
    }
  }, [isDeletePressed, deleteContactId]);

  useEffect(() => {
    GetContacts();
    setIsContactChanged(false);
  }, [isContactChanged]);

  return (
    <header className="border-white size-[100%]">
      <div className="shadow-md shadow-red-300 flex items-center justify-center gap-2 bg-white font-bold rounded-lg w-full h-fit mt-5 p-4 transition-all active:scale-[95%]">
        <img className="size-7" src="./img/logos_appwrite.svg" alt="" />
        <p>Appwrite Contact App</p>
      </div>
      <div className="flex justify-between w-full mt-5">
        <Search />
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
      {AllContacts.length === 0 ? (
        <NotFound />
      ) : (
        AllContacts.map((Contact) => {
          return (
            <ContactCard
              key={Contact.$id}
              Contact={Contact}
              handleEditContact={handleEditContact}
              setIsDeletePressed={setIsDeletePressed}
              setDeleteContactId={setDeleteContactId}
            />
          );
        })
      )}
    </header>
  );
};

export default Home;
