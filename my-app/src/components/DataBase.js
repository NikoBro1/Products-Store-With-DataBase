import { ref, remove, set, get, child } from "firebase/database";
import database from "./FirebaseDB";

export const addToCart = async (product) => {
  try {
    const cartRef = ref(database, `cart/${product.id}`);
    await set(cartRef, product);
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};


export const getCartProducts = async () => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, "cart"));
    if (snapshot.exists()) {
      const data = snapshot.val();
      return Object.values(data);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return [];
  }
};


export const clearCartProducts = async () => {
  try {
    const cartRef = ref(database, "cart");
    await remove(cartRef);
  } catch (error) {
    console.error("Error clearing cart:", error);
  }
};

