import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Segundo from './Segundo.jsx'
import Hola from './Hola.jsx'
import Tercer from'./Tercer.jsx'
import Lab1Humano from './Lab1Humano.jsx'
import BancosList from './BancosList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lab1Humano/>
    <BancosList />
  </StrictMode>,
)
