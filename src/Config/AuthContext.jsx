import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Toast from '../components/ui/Toast';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = async (email, password, displayName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    return userCredential;
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateAvatar = async (userId, avatarFile) => {
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${userId}`);
    await uploadBytes(storageRef, avatarFile);

    // Obtenez l'URL de téléchargement de l'image depuis la référence du stockage
    const downloadURL = await getDownloadURL(storageRef);

    // Mettez à jour le profil de l'utilisateur dans Firebase Authentication
    await updateProfile(auth.currentUser, {
      photoURL: downloadURL,
    });

    console.log('Avatar mis à jour avec succès');
  };

  const updateProfileInfo = async (displayName) => {
    // Mettez à jour le profil de l'utilisateur dans Firebase Authentication
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    Toast({ type: "success", message: "Profil mis à jour avec succès" });
    console.log('Profil mis à jour avec succès');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ createUser, user, logout, signIn, updateAvatar, updateProfileInfo }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
