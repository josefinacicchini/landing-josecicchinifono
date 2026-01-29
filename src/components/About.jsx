// src/components/About.jsx
import fotoTerapia1 from '../assets/foto-terapia1.webp'
import fotoTerapia2 from '../assets/foto-terapia2.webp'
import blobVerde from '../assets/blob-verde.png'
import blobGris from '../assets/blob-gris.png'

export default function About() {
  return (
    <section id="sobre-mi" className="w-full min-h-screen py-12 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 overflow-visible relative z-10">      
      
      {/* COLUMNA FOTOS */}
      <div className="w-full lg:w-1/2 relative min-h-[600px] md:pl-10 flex flex-col justify-center">
        
        {/* GRUPO 1: Foto superior + Blob Verde */}
        <div className="absolute top-0 md:top-15 left-0 w-64 md:w-96 z-10">
          
          <img 
            src={blobVerde} 
            alt="" 
            className="absolute top-[-80px] left-[-60px] md:top-[-150px] md:left-[-150px] w-[140%] md:w-[35rem] max-w-none -z-10 opacity-90 pointer-events-none" 
          />
          
          <div className="rounded-[2rem] overflow-hidden shadow-lg rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
            <img src={fotoTerapia1} alt="Sesión terapéutica alimentación" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* GRUPO 2: Foto inferior + Blob Gris */}
        <div className="absolute top-[320px] md:top-[380px] right-0 md:right-auto md:left-[200px] w-56 md:w-72 z-20">
         
          <img 
            src={blobGris} 
            alt="" 
            className="absolute top-[-40px] right-[-40px] md:top-[-60px] md:right-[-80px] w-[140%] md:w-[30rem] max-w-none -z-10 opacity-90 pointer-events-none" 
          />
          
          <div className="rounded-[2rem] overflow-hidden shadow-xl rotate-[3deg] hover:rotate-0 transition-transform duration-500">
            <img src={fotoTerapia2} alt="Sesión terapéutica cuento compartido" className="w-full h-auto object-cover" />
          </div>
        </div>

      </div>

      {/* COLUMNA TEXTO */}
      <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
        
        <span className="font-serif text-8xl text-brand-lilac absolute -top-16 -left-8 md:-left-12 opacity-80 z-0">
          “
        </span>

        <div className="font-sans text-brand-dark text-lg leading-relaxed space-y-6 text-gray-700 relative z-10 text-center indent-12">
            <p>
              Soy fonoaudióloga especializada en neurorehabilitación pediátrica, y mi propósito es acompañar a las infancias en los primeros pasos de su desarrollo.
            </p>
            <p>
              Entiendo que cada niño es único, reconociendo sus fortalezas y necesidades individualmente.
            </p>
            <p>
              Desde esta mirada, realizo tratamientos integrales para abordar desafíos en el habla y el lenguaje, 
              así como dificultades en la alimentación y las funciones orales relacionadas con la comunicación.
            </p>
            <p>
              Mi objetivo es trabajar en equipo con la familia, brindándoles herramientas para potenciar el desarrollo de sus hijos con calidez y un compromiso constante con la actualización y las prácticas basadas en la evidencia.
            </p>
        </div>

        <span className="font-serif text-8xl text-brand-lilac absolute -bottom-24 right-0 opacity-80 z-0">
          ”
        </span>

      </div>

    </section>
  )
}