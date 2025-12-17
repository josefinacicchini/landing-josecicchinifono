import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Usamos bg-brand-lilac (tu color de fondo)
    <div className="min-h-screen bg-brand-lilac flex flex-col items-center justify-center p-4">
      
      {/* Usamos font-serif y text-brand-dark */}
      <h1 className="font-serif text-5xl text-brand-dark mb-4 text-center">
        Josefina Cicchini
      </h1>
      
      {/* Usamos font-sans y text-brand-blue */}
      <p className="font-sans text-brand-blue text-xl mb-8">
        Fonoaudióloga - Test de Estilos
      </p>

      {/* Botón con tu azul */}
      <button className="bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors cursor-pointer">
        Contactame
      </button>

      {/* Grilla de colores para verificar */}
      <div className="flex gap-4 mt-12">
        <div className="w-12 h-12 rounded-full bg-brand-turquoise shadow-lg"></div>
        <div className="w-12 h-12 rounded-full bg-brand-orange shadow-lg"></div>
        <div className="w-12 h-12 rounded-full bg-brand-rose shadow-lg"></div>
        <div className="w-12 h-12 rounded-full bg-brand-beige shadow-lg"></div>
      </div>
    </div>
  )
}

export default App
