import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from "../Config/firebase";
import Toast from '../components/ui/Toast';

export const ClientsApi = {
  addClients: async (clients) => {
    try {
      // Reference to the 'clients' collection
      const clientsRef = collection(db, 'clients');

      // Loop through each client and add it
      for (const client of clients) {
        await addDoc(clientsRef, client);
      }

      console.log('Clients added successfully.');
      Toast({ type: "success", message: "Client ajouté avec succès" });
    } catch (error) {
      console.error('Error adding clients:', error);
      Toast({ type: "error", message: "Erreur lors de l'ajout du client" });
    }
  },

  getAllClients: async () => {
    try {
      const clientsRef = collection(db, 'clients');
      const clientsSnapshot = await getDocs(clientsRef);

      // Convertir les données Snapshot en un tableau d'objets clients
      const clientsData = clientsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      return clientsData;
    } catch (error) {
      console.error('Erreur lors de la récupération des clients :', error);
      throw error; // Vous pouvez choisir de lancer l'erreur pour la gérer à un niveau supérieur
    }
  },
};
