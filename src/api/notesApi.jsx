import {
    getDocs,
    query,
    collection,
    orderBy,
    getFirestore,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  
  export const fetchNotes = async () => {
    try {
      const db = getFirestore();
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(query(notesCollection, orderBy("timestamp", "desc")));
      const notesData = [];
      notesSnapshot.forEach((doc) => {
        notesData.push({ id: doc.id, ...doc.data() });
      });
      return notesData;
    } catch (error) {
      console.error("Erreur lors de la récupération des notes :", error);
      return [];
    }
  };
  
  export const deleteNote = async (noteId) => {
    try {
      const db = getFirestore();
      const notesCollection = collection(db, "notes");
      await deleteDoc(doc(notesCollection, noteId));
      return true;
    } catch (error) {
      console.error("Erreur lors de la suppression de la note :", error);
      return false;
    }
  };
  