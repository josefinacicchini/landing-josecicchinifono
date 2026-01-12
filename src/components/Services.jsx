import React from 'react';
import consultorio from '../assets/consultorio.png';

const overlayClasses = "absolute inset-0 bg-brand-blue/95 p-5 md:p-6 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 rounded-3xl overflow-y-auto";
const textClasses = "text-white text-sm md:text-base font-medium leading-snug md:leading-relaxed font-sans";

const titleClasses = "text-[clamp(1.2rem,4vw,1.875rem)] font-serif leading-tight transition-all duration-300 group-hover:opacity-0 px-2";

const popOutCardClasses = "absolute inset-0 rounded-3xl p-4 md:p-6 flex flex-col justify-center items-center text-center transition-all duration-300 ease-out z-10 overflow-hidden group-hover:-inset-4 group-hover:z-50 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]";

export default function Services() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 bg-white" id="servicios">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-sans tracking-[0.2em] text-brand-dark uppercase mb-12 text-left">
          Servicios
        </h2>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(240px,auto)]">

          {/* 1. EL CONSULTORIO */}
          <div className="md:row-span-2 relative w-full h-full group z-0">
            <div className={`${popOutCardClasses} bg-brand-lightblue`}>
              <div className="h-full w-full flex flex-col justify-between items-center transition-all duration-300 group-hover:opacity-0">
                <div className="flex-grow flex items-center justify-center mt-4">
                  <div className="w-48 h-48 bg-white/50 backdrop-blur-sm shadow-sm flex items-center justify-center overflow-hidden" 
                        style={{ borderRadius: '45% 55% 63% 37% / 37% 38% 62% 63%' }}>
                      <img src={consultorio} alt="Consultorio" className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className={`${titleClasses} text-brand-blue mt-6`}>
                  El Consultorio
                </h3>
              </div>
              <div className={overlayClasses}>
                <div className="flex flex-col items-center gap-3">
                  <h3 className="text-2xl font-serif text-white mb-1">
                    Espacio Nurtura
                  </h3>
                  <p className={textClasses}>
                    Conocé más...
                  </p>
                  <div className="mt-2 w-full">
                    <a 
                      href="https://www.instagram.com/espacionurtura/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-brand-turquoise transition-colors font-bold tracking-wide"
                    >
                      (+)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. REHABILITACIÓN DEL HABLA */}
          <div className="relative w-full h-full min-h-[240px] group z-0">
            <div className={`${popOutCardClasses} bg-brand-lilac`}>
              <h3 className={`${titleClasses} text-brand-blue`}>
                Rehabilitación del Habla y Lenguaje
              </h3>
              <div className={overlayClasses}>
                <p className={textClasses}>
                  Tratamiento individualizado para niños con dificultades en el desarrollo del habla y del lenguaje.
                </p>
              </div>
            </div>
          </div>

          {/* 3. MOTRICIDAD OROFACIAL */}
          <div className="relative w-full h-full min-h-[240px] group z-0">
            <div className={`${popOutCardClasses} bg-[#d69c94]`}>
              <h3 className={`${titleClasses} text-white`}>
                Motricidad Orofacial
              </h3>
              <div className={overlayClasses}>
                <p className={textClasses}>
                  Tratamiento individualizado para el equilibrio y restablecimiento de las funciones orofaciales. <br/><br/>
                  Respiración oral <br/>
                  Deglución disfuncional <br/>
                  Hábitos orales 
                </p>
              </div>
            </div>
          </div>

          {/* 4. ALIMENTACION */}
          <div className="md:row-span-2 relative w-full h-full group z-0">
            <div className={`${popOutCardClasses} bg-brand-beige`}>
              <h3 className={`${titleClasses} text-brand-blue`}>
                Dificultades en la Alimentación
              </h3>
              <div className={overlayClasses}>
                <div className="space-y-3"> 
                  <p className={textClasses}>
                    Intervención en las dificultades de la alimentación originadas por impedimentos sensoriales u oromotores.
                  </p>
                  <p className={textClasses}>
                    Estimulación de habilidades de alimentación (succión, masticación, sorbición, deglución).<br/><br/>
                  </p>
                  <p className={textClasses}>
                    Adaptación de alimentos y utensilios para una alimentación segura.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5. ASESORÍAS */}
          <div className="relative w-full h-full min-h-[240px] group z-0">
            <div className={`${popOutCardClasses} bg-brand-blue`}>
              <h3 className={`${titleClasses} text-white`}>
                Asesorías Familiares
              </h3>
              <div className={overlayClasses}>
                <p className="text-white text-sm font-medium leading-relaxed font-sans">
                  Estrategias y herramientas con seguimiento online para: <br/> 
                  Estimular la comunicación y el lenguaje. <br/>
                  Implementación de Comunicación Aumentativa Alternativa. <br/>
                  Intervención en dificultades de la alimentación.
                </p>
              </div>
            </div>
          </div>

          {/* 6. INTENSIVOS */}
          <div className="relative w-full h-full min-h-[240px] group z-0">
            <div className={`${popOutCardClasses} bg-brand-turquoise`}>
              <h3 className={`${titleClasses} text-white`}>
                Tratamientos intensivos de Verano
              </h3>
              <div className={overlayClasses}>
                <p className={textClasses}>
                  Propuesta de intervención intensiva orientada a metas concretas. Diagramamos objetivos medibles y alcanzables en el corto plazo, permitiendo avances significativos en períodos de tiempo acotados.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}