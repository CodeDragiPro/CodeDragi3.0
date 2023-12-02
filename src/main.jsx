import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './Config/AuthContext.jsx'
import i18next from 'i18next'
import global_fr from './translations/fr/global.json'
import global_en from './translations/en/global.json'
import { I18nextProvider } from 'react-i18next'

i18next.init({
  interpolation: {escapeValue: false},
  lng: "fr",
  resources: {
    fr: {
      global: global_fr,
    },
    en: {
      global: global_en,
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
