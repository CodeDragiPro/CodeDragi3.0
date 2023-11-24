import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../Config/firebase";

// AFFICHER LES PORTFOLIOS
export const fetchPortfolios = async () => {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
