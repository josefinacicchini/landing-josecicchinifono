// src/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-4 md:px-8 flex justify-center md:justify-end items-center bg-white">
      <ul className="flex gap-4 md:gap-8 text-brand-dark font-sans text-sm md:text-lg tracking-wide font-medium">
        <li>
          <a href="#sobre-mi" className="hover:text-brand-blue transition-colors">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#servicios" className="hover:text-brand-blue transition-colors">
            Servicios
          </a>
        </li>
        <li>
          <a href="#contacto" className="hover:text-brand-blue transition-colors">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}