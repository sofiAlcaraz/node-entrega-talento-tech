import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../configurations/firebase-configuration.js";

const userCollection = collection(db, "users");

export const userExist = async (email) => {
  try {
    const q = query(userCollection, where("email", "==", email));

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return false;
    }
    return snapshot.docs[0].data();
  } catch (error) {
    console.error("Error user exist ", error);
  }
};

export const createUser = async (user) => {
  try {
    await addDoc(userCollection, user);
    return true;
  } catch (error) {
    console.error("Error creating user: ", error);
  }
};
