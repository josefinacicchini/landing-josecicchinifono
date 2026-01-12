// src/components/Navbar.jsx

export default function Navbar() {
  return (
    <nav className="w-full py-6 px-8 flex justify-end items-center bg-white">
      <ul className="flex gap-8 text-brand-dark font-sans text-lg tracking-wide font-medium">
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