import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconHamburger, IconWhatsApp } from "../Icons/Icons";

export default function NavBar() {
    // Estados para controlar la visibilidad del submenú y del menú móvil
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Función para alternar la visibilidad del submenú
    const toggleServicesMenu = () => {
        setIsServicesOpen(prev => !prev);
    };

    // Función para alternar el menú móvil
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Cambia el estado según la posición del scroll
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {/* Menú Lateral para Móviles */}
            <div className={`max-w-7xl fixed top-0 left-0 h-full w-64 bg-primary z-30 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20 lg:hidden`}>
                <div className="flex justify-between items-center p-4">
                    <h2 className="font-bold text-2xl">LOGO</h2>
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Cerrar menú"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <Link to="/" className="hover:text-secondary" onClick={toggleMenu}>INICIO</Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="hover:text-secondary" onClick={toggleMenu}>NOSOTROS</Link>
                    </li>
                    <li className="relative">
                        <button onClick={toggleServicesMenu} className="flex justify-between items-center w-full hover:text-secondary">
                            SERVICIOS
                            <svg className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Submenú */}
                        {isServicesOpen && (
                            <ul className="mt-2 ml-4 flex flex-col space-y-2">
                                <li><Link to="/serviciopreferente" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PREFERENTE</Link></li>
                                <li><Link to="/serviciopreferenteindeci" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PREFRENTE INDECI</Link></li>
                                <li><Link to="/serviciopresencial" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PRESENCIAL</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/trabaja-con-nosotros" className="hover:text-secondary" onClick={toggleMenu}>TRABAJA CON NOSOTROS</Link>
                    </li>
                </ul>
            </div>

            {/* Overlay para cerrar el menú al hacer clic fuera */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={toggleMenu}></div>
            )}

            {/* Navbar Principal */}
            <div className={`mt-8 fixed w-full left-0 top-0 z-20 py-10 transition-all duration-300 ${isScrolled ? 'bg-white text-primary py-5 shadow-2xl' : 'bg-transparent text-white'}`}>
                <div className="flex justify-between max-w-7xl mx-auto max-lg:mx-5 items-center">
                    <div className="flex gap-16 items-center font-semibold">
                        <h2 className="font-bold text-2xl duration-0">LOGO</h2>
                        {/* Menú de Escritorio */}
                        <ul className="hidden lg:flex gap-12 text-sm">
                            <li><Link to="/" className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>INICIO</Link></li>
                            <li><Link to="/nosotros" className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>NOSOTROS</Link></li>
                            <li className="relative">
                                <button onClick={toggleServicesMenu} className={`flex items-center ${isScrolled ? 'text-primary' : 'text-white'}`}>
                                    SERVICIOS
                                </button>
                                {/* Submenú */}
                                {isServicesOpen && (
                                    <ul className="absolute left-0 mt-2 w-56 bg-primary text-white rounded-lg shadow-lg">
                                        <li><Link to="/serviciopreferente" className="block px-4 py-4 hover:bg-secondary">SERVICIO PREFERENTE</Link></li>
                                        <li><Link to="/serviciopreferenteindeci" className="block px-4 py-4 hover:bg-secondary">SERVICIO PREFRENTE INDECI</Link></li>
                                        <li><Link to="/serviciopresencial" className="block px-4 py-4 hover:bg-secondary">SERVICIO PRESENCIAL</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/trabaja-con-nosotros" className={`transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>TRABAJA CON NOSOTROS</Link></li>
                        </ul>
                    </div>
                    {/* Botón de Hamburguesa para Móviles */}
                    <button
                        className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-primary hover:border-primary"
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                    >
                        <IconHamburger />
                    </button>
                    {/* Botón de Contacto */}
                    <Link to="/contacto" className="bg-secondary text-white px-7 py-4 rounded-lg text-l flex items-center gap-2 hover:shadow-2xl hidden lg:flex">
                        <IconWhatsApp size={20} />
                        Contáctanos
                    </Link>
                </div>
            </div>
        </>
    );
}