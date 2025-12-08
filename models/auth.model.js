import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../configurations/firebase-configuration.js";

const userCollection = collection(db, "users");

export const login = async (email, username, password) => {
  try {
    const q = query(
      userCollection,
      where("email", "==", email),
      where("username", "==", username),
      where("password", "==", password)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }
    return snapshot.docs[0].data();
  } catch (error) {
    console.error("Error en el login: ", error);
  }
};
