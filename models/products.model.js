import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../configurations/firebase-configuration.js";

const productsCollection = collection(db, "products");

export const getProductById = async (id) => {
  try {
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
      return productDoc.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error searching for product by ID: ", error);
  }
};

export const getAllProducts = async () => {
  try {
    const snapshot = await getDocs(productsCollection);
    const products = [];
    snapshot.docs.map((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error searching for products: ", error);
  }
};

export const createProduct = async (product) => {
  try {
    await addDoc(productsCollection, product);
    return true;
  } catch (error) {
    console.error("Error creating product: ", error);
    return false;
  }
};

export const deletedProduct = async (id) => {
  try {
    await deleteDoc(doc(productsCollection, id));
    return true;
  } catch (error) {
    console.error("Error deleting product: ", error);
    return false;
  }
};
