import React from 'react'
import Titles from '../components/ui/Titles'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center'>
        <Titles text="Erreur 404" fontSize="md:text-9xl text-7xl" justify="center"/>
        <h2 className='font-bold text-white text-2xl'>Quelque chose s'est mal passé.</h2>
        <h3 className='font-bold text-white text-medium'>Veuillez retourner a l'accueil...</h3>
        <Link to="/">
            <div className='mt-4'>
            <Button text="Accueil"/>
            </div>
      
        </Link>
        
        </div>
        
    </div>
  )
}

export default ErrorPage