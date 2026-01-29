// src/components/Hero.jsx
import perfilImg from '../assets/perfil.webp'
import blobHero from '../assets/blob-hero.png'

export default function Hero() {
  return (
    <section className="relative w-full h-auto md:h-[calc(100vh-92px)] min-h-[600px] flex items-center justify-center bg-white py-12 md:py-0 overflow-hidden md:overflow-visible">
      
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32">
        
        {/* COLUMNA FOTO */}
        <div className="relative flex-1 flex justify-center items-end order-1 md:order-none">
          
          <img 
            src={blobHero} 
            alt="" 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] md:w-[600px] max-w-none z-0 opacity-90 pointer-events-none"
          />
          
          <div className="relative z-10 w-48 h-56 md:w-80 md:h-96 overflow-visible rounded-[60px_60px_0_0] md:rounded-[100px_100px_0_0] fetchpriority=high">
            <img 
              src={perfilImg} 
              alt="Imagen de perfil Josefina"
              className="w-full h-full object-cover"
              onError={(e) => e.target.style.display = 'none'} 
            />
          </div>
        </div>

        {/* COLUMNA TEXTO */}
        <div className="relative z-10 flex-1 text-center md:text-left space-y-4 md:space-y-6 order-2 md:order-none pb-4 md:pb-0">
          <div>
            <h1 className="font-serif text-4xl md:text-7xl text-brand-dark mb-2 md:mb-4">
              Josefina Cicchini
            </h1>
            <h2 className="font-sans text-xs md:text-sm tracking-[0.2em] text-brand-dark uppercase font-medium">
              Fonoaudióloga
            </h2>
          </div>

          <p className="font-sans text-brand-dark text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            "Acompaño a niños y sus familias en el desarrollo de la comunicación y sus funciones esenciales, transformando desafíos en herramientas para su autonomía."
          </p>

          <div className="pt-4 md:pt-6 flex justify-center md:justify-start">
            <a 
              href="https://wa.me/5491123950391"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-8 md:px-10 py-3 rounded-full font-sans text-sm font-bold tracking-wide hover:bg-brand-dark transition-all shadow-md cursor-pointer inline-block transform hover:-translate-y-1"
            >
              CONTACTAME
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}