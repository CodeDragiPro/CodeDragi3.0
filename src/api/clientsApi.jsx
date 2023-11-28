import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import { db } from "../Config/firebase";
import Toast from '../components/ui/Toast';

export const ClientsApi = {
  addClients: async (clients) => {
    try {
      const clientsRef = collection(db, 'clients');
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
      const clientsData = clientsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return clientsData;
    } catch (error) {
      console.error('Erreur lors de la récupération des clients :', error);
      throw error; 
    }
  },

  deleteClient: async (clientId) => {
    try {
      const clientRef = doc(db, 'clients', clientId);
      await deleteDoc(clientRef);
      console.log('Client deleted successfully.');
      Toast({ type: "success", message: "Client supprimé avec succès" });
    } catch (error) {
      console.error('Error deleting client:', error);
      Toast({ type: "error", message: "Erreur lors de la suppression du client" });
    }
  },
};
