import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, getDoc } from 'firebase/firestore/lite';
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
  getClientById: async (clientId) => {
    try {
      if (!clientId) {
        throw new Error('Client ID is not defined');
      }

      const clientRef = doc(db, 'clients', clientId);
      const clientSnapshot = await getDoc(clientRef);

      console.log('Client Snapshot:', clientSnapshot);

      if (clientSnapshot.exists()) {
        return { id: clientSnapshot.id, ...clientSnapshot.data() };
      } else {
        throw new Error('Client not found');
      }
    } catch (error) {
      console.error('Error getting client by ID:', error);
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

  updateClient: async (clientData) => {
    try {
      console.log('Updating client with data:', clientData);
  
      if (!clientData || !clientData.id) {
        throw new Error('Client data or ID is not defined');
      }
  
      const { id, ...updatedClientData } = clientData;
  
      const clientRef = doc(db, 'clients', id);
      await updateDoc(clientRef, updatedClientData);
  
      Toast({ type: "success", message: "Client mis à jour avec succès" });
      console.log('Client updated successfully.');
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      Toast({ type: "error", message: "Echec de la mise à jour du client" });
      console.error('Error updating client:', error);
      throw error;
    }
  },
  
  
  
};
