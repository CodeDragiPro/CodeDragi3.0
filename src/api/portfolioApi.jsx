import { collection, getDocs, deleteDoc, doc, updateDoc, arrayUnion } from "firebase/firestore/lite";
import { db } from "../Config/firebase";
import Toast from '../components/ui/Toast';
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

// AFFICHER LES PORTFOLIOS
export const fetchPortfolios = async () => {
  const querySnapshot = await getDocs(collection(db, "portfolio"));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// SUPPRIMER UN PORTFOLIO
export const deletePortfolio = async (portfolioId) => {
  const portfolioRef = doc(db, "portfolio", portfolioId);
  return new Promise((resolve, reject) => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: "Êtes-vous sûr de vouloir supprimer ce portfolio ?",
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            try {
              await deleteDoc(portfolioRef);
              Toast({ type: "success", message: "Portfolio supprimé avec succès" });
              resolve(); // Résoudre la promesse en cas de succès
            } catch (error) {
              console.error("Erreur lors de la suppression du portfolio :", error);
              Toast({ type: "error", message: "Erreur lors de la suppression du portfolio" });
              reject(error); // Rejeter la promesse en cas d'erreur
            }
          },
        },
        {
          label: "Non",
          onClick: () => {
            reject(); // Rejeter la promesse si l'utilisateur clique sur "Non"
          },
        },
      ],
    });
  });
};



