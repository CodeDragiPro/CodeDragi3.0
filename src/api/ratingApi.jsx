import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../Config/firebase";

export const addRating = async (rating) => {
  try {
    const ratingsCollection = collection(db, "ratings");

    await addDoc(ratingsCollection, { rating });

    return true; // Succès
  } catch (error) {
    console.error("Erreur lors de l'ajout de la note :", error);
    return false; // Échec
  }
};

// AFFICHER LES NOTES
export const fetchRatings = async () => {
    const ratingsCollection = collection(db, "ratings");
    const snapshot = await getDocs(ratingsCollection);
  
    const ratings = [];
    snapshot.forEach((doc) => {
      const data = doc.data();
      ratings.push(data.rating);
    });
  
    return ratings;
  };