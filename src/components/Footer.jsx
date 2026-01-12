// src/components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-center pt-6 pb-2">
            <p className="text-[10px] md:text-xs font-sans text-gray-400 tracking-wide leading-relaxed">
                © {currentYear} Josefina Cicchini. Todos los derechos reservados.
                
                <span className="hidden md:inline mx-2">|</span>
                <br className="md:hidden"/>
                
                Diseño y desarrollo: {' '}
                <a 
                    href="#" // portfolio de dev 
                    className="font-sans text-brand-blue hover:text-brand-dark transition-colors tracking-wider"
                    
                >
                    Josefina Cicchini | Enredada
                </a>
            </p>
        </footer>
    )
}