import React, { useState } from 'react'
import Button from '../components/ui/Button'
import ClientsModal from '../components/Modal/ClientsModal';

const Clients = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };
    
  return (
    <div className="p-4 mt-20 h-screen">
        <Button text="Ajouter" onClick={openModal}/>
        {isModalOpen && (
            <ClientsModal onClose={closeModal}/>
        )}
         <div className="overflow-x-auto">
         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         <tr>
            {/* CHECKBOX */}
         <th scope="col" className="p-4">
         <div className="flex items-center">
            <input type='checkbox' />
            <label htmlFor="checkbox" className="sr-only">
                    checkbox
                  </label>
         </div>
         </th>
         <th scope="col" className="px-6 py-3">
                Id
        </th>
        <th scope="col" className="px-6 py-3">
                Nom
        </th>
        <th scope="col" className="px-6 py-3">
                Prénom
        </th>
        <th scope="col" className="px-6 py-3">
                Téléphone
        </th>
        <th scope="col" className="px-6 py-3">
                Email
        </th>
        <th scope="col" className="px-6 py-3">
                Adresse
        </th>
        <th scope="col" className="px-6 py-3">
                Projet
        </th>
        <th scope="col" className="px-6 py-3">
                Date
        </th>
         </tr>
         </thead>

         <tbody className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
            <tr>
            <td className='px-6 py-4'>
                {/* checkbox */}
            </td>
            <td className='px-6 py-4'>
                001
            </td>
            <td className='px-6 py-4'>
                Daubeuf
            </td>
            <td className='px-6 py-4'>
                Jérémie
            </td>
            <td className='px-6 py-4'>
                0762266195
            </td>
            <td className='px-6 py-4'>
                codedragipro@gmail.com
            </td>
            <td className='px-6 py-4'>
                51 immeuble durbec 76490 caudebec en caux
            </td>
            <td className='px-6 py-4'>
                CodeDragi
            </td>
            <td className='px-6 py-4'>
                28/11/2023
            </td>
            </tr>
         </tbody>
         </table>
         </div>
      
    </div>
  )
}

export default Clients