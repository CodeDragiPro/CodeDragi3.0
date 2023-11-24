import React from 'react'
import Titles from './ui/Titles'
import Logo from '../assets/logoWeb.png'
import Button from './ui/Button'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={Logo} className='object-cover w-[70vh]'/>
        <Titles text="une idée peut vous changer la vie" fontSize="md:text-6xl text-4xl"/>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl text-white font-bold uppercase mb-2'>Développeur Web & Front-End</h1>
          <Button text="07.62.26.61.95"/>
        </div>
    </div>

  )
}

export default Hero