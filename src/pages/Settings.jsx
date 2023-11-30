import React, { useState, useEffect } from 'react';
import { UserAuth } from '../Config/AuthContext';
import { FaUser } from "react-icons/fa";
import Button from '../components/ui/Button';
import Titles from '../components/ui/Titles';
import TitleHr from '../components/ui/TitleHr';

const Settings = () => {
  const [avatar, setAvatar] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const { user, updateAvatar, updateProfileInfo } = UserAuth();

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || ''); 
    }
  }, [user]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (avatar) {
      await updateAvatar(user.uid, avatar);
    }
    await updateProfileInfo(displayName);
  
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  
  

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  return (
    <div className='m-4 flex flex-col items-center justify-center h-screen'>
       
        <div className='my-4'>
            <img src={user.photoURL} className='rounded-full w-32 h-32 object-cover border-2 border-white'/>
        </div>
        <TitleHr text="Paramètre utilisateur" size="md:text-2xl text-xl uppercase"/>
      <form onSubmit={handleUpdate} className='p-4 bg-gray-900 md:w-1/2 w-full'>
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pseudo</label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaUser className='text-gray-400'/>
          </div>
          <input
            type="text"
            value={displayName}
            onChange={handleDisplayNameChange}
            id="input-group-1"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
        </div>
        <label htmlFor="website-admin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar</label>
        <div className="flex">
          <input
            onChange={handleFileChange}
            className="p-1 block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="large_size"
            type="file"
          />
        </div>
        <div className='flex items-center pt-4'>
        <Button text="Modifier" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Settings;
