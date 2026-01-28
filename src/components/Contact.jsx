import location from '../assets/icons/location.png'
import instagram from '../assets/icons/instagram.png'
import facebook from '../assets/icons/facebook.png'
import linkedin from '../assets/icons/linkedin.png'
import whatsapp from '../assets/icons/whatsapp.png'
import gmail from '../assets/icons/gmail.png'
import Footer from './Footer'

export default function Contact() {
    return (
        <section 
            id="contacto" className="w-full min-h-screen flex flex-col justify-center bg-white py-10"
        >
            <div className="w-full max-w-7xl mx-auto px-6">
                {/* Titulo */}
                <h2 className="text-xl md:text-2xl font-sans tracking-[0.2em] text-brand-dark uppercase mb-8 md:mb-12 text-left">
                    Contacto
                </h2>
                
                {/* Columnas */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-20 mb-10">
                    
                    {/* Columna ubicacion */}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <div className="w-full h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-sm bg-gray-100">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.5647299910147!2d-58.45607712434235!3d-34.56457457296844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5b80d816585%3A0xe84bc7908fe646f1!2sFonoaudi%C3%B3loga%20Josefina%20Cicchini!5e0!3m2!1ses-419!2sar!4v1768248297782!5m2!1ses-419!2sar" 
                                title="Ubicación del consultorio en Belgrano, CABA"
                                className="w-full h-full object-cover transition-all duration-500"
                                style={{ border: 0 }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        
                        <div className="flex items-center gap-4 px-2">
                            <img src={location} alt="ubicacion" className="w-8 h-8 object-contain"/>
                            <h3 className="text-sm md:text-lg p-2 font-sans text-brand-dark">
                                Belgrano, C.A.B.A.
                            </h3>
                        </div>
                    </div>

                    {/* Columna WhatsApp y Mail */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-8">
                        
                        {/* Item WhatsApp */}
                        <a href="https://wa.me/5491123950391" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-6 group hover:bg-gray-50 p-3 rounded-2xl transition-all">
                            <img src={whatsapp} alt="whatsapp" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"/>
                            <div className="flex flex-col">
                                <span className="text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">WhatsApp</span>
                                <span className="text-sm md:text-xl font-sans text-brand-dark group-hover:text-brand-blue transition-colors">11 2395-0391</span>
                            </div>
                        </a>

                        {/* Item Mail */}
                        <a href="mailto:josefinacicchini.fono@gmail.com" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-6 group hover:bg-gray-50 p-3 rounded-2xl transition-all">
                            <img src={gmail} alt="gmail" className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"/>
                            <div className="flex flex-col">
                                <span className="text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Email</span>
                                <span className="text-sm md:text-xl font-sans text-brand-dark group-hover:text-brand-blue transition-colors break-all">josefinacicchini.fono@gmail.com</span>
                            </div>
                        </a>

                    </div>
                </div>

                {/* 3. Redes sociales */}
                
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-xs font-sans uppercase tracking-[0.2em] text-gray-400">
                        Seguime en mis redes
                    </span>
                    <div className="flex gap-8">
                        <a href="https://www.instagram.com/josecicchinifono/" target="_blank" rel="noopener noreferrer" 
                            className="hover:scale-110 transition-transform duration-300 p-2">
                            <img src={instagram} alt="instagram" className="w-8 h-8 object-contain"/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61563019037698" target="_blank" rel="noopener noreferrer" 
                            className="hover:scale-110 transition-transform duration-300 p-2">
                            <img src={facebook} alt="facebook" className="w-8 h-8 object-contain"/>
                        </a>
                        <a href="https://www.linkedin.com/in/josefinacicchini88/" target="_blank" rel="noopener noreferrer" 
                            className="hover:scale-110 transition-transform duration-300 p-2">
                            <img src={linkedin} alt="linkedin" className="w-8 h-8 object-contain"/>
                        </a>
                    </div>
                </div>
                <Footer/>

            </div>
        </section>
    )
}