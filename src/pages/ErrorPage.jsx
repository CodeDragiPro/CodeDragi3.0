import React from 'react'
import Titles from '../components/ui/Titles'
import Button from '../components/ui/Button'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

const ErrorPage = () => {
  const [t] = useTranslation("global");
  return (
    <div className='h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center'>
        <Titles text={t("404.title")} fontSize="md:text-9xl text-7xl" justify="center"/>
        <h2 className='font-bold text-white text-2xl'>{t("404.text")}</h2>
        <h3 className='font-bold text-white text-medium'>{t("login.subtext")}</h3>
        <Link to="/">
            <div className='mt-4'>
            <Button text={t("404.button")}/>
            </div>
      
        </Link>
        
        </div>
        
    </div>
  )
}

export default ErrorPage