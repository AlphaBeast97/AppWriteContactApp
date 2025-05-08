import { Client, Databases, Query, ID } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const ListContacts = async () => {
  try {
    const result = await document.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.limit(15),
    ]);
    return result.documents;
  } catch (error) {
    console.log(`Failed to list contacts ${error}`);
  }
};

export const CreateContact = async (name, email) => {
  try {
    const response = await database.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      {
        name: name,
        email: email,
      }
    );
    return response;
  } catch (error) {
    console.log(`failed to create new contact: ${error}`);
  }
};

export const EditContact = async (contactID, name, email) => {
  try {
    const response = await database.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      contactID,
      {
        name: name,
        email: email,
      }
    );
    return response;
  } catch (error) {
    console.log(`Failed to edit contact ${error}`);
  }
};

export const DeleteContact = async (contactID) => {
  try {
      await database.deleteDocument(DATABASE_ID, COLLECTION_ID, contactID);
      console.log('Contact deleted successfully');
      return true; // Indicate successful deletion
  } catch (error) {
      console.error('Error deleting contact:', error);
      throw error;
  }
}