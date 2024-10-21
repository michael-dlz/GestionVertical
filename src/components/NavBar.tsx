import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconBlog, IconHamburger, IconQuote, IconServices, IconUS, IconWork } from "../Icons/Icons";
import { logoDark, logoLight } from "../data/ContactInfo";

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
            <div className={`2xl:max-w-7xl max-w-5xl fixed top-0 left-0 h-full w-64 bg-primary z-30 text-white transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20 lg:hidden`}>
                <div className="flex justify-between items-center p-4">
                    <Link to="/"><img src={logoLight} alt="" /></Link>
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
                <ul className="flex flex-col py-8 px-4 space-y-4 text-sm">
                    <li>
                        <Link to="/nosotros" className="hover:text-secondary flex items-center gap-2" onClick={toggleMenu}><IconUS stroke="#fff"/>NOSOTROS</Link>
                    </li>
                    <li className="relative">
                        <button onClick={toggleServicesMenu} className="flex justify-between items-center w-full hover:text-secondary">
                            <p className="flex items-center gap-2"><IconServices stroke="#fff" />
                            SERVICIOS</p>
                            <svg className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Submenú */}
                        {isServicesOpen && (
                            <ul className="mt-2 ml-4 flex flex-col space-y-2">
                                <li><Link to="/servicio-preferente" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PREFERENTE</Link></li>
                                <li><Link to="/servicio-preferente-indeci" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PREFRENTE INDECI</Link></li>
                                <li><Link to="/servicio-presencial" className="hover:text-secondary" onClick={toggleMenu}>SERVICIO PRESENCIAL</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/trabaja-con-nosotros" className="hover:text-secondary flex items-center gap-2" onClick={toggleMenu}><IconWork stroke="#fff" />TRABAJA CON NOSOTROS</Link>
                    </li>
                </ul>
            </div>

            {/* Overlay para cerrar el menú al hacer clic fuera */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden" onClick={toggleMenu}></div>
            )}

            {/* Navbar Principal */}
            <div className={`mt-8 fixed w-full left-0 top-0 z-20 py-8 transition-all duration-300 ${isScrolled ? 'bg-white text-primary shadow-2xl max-lg:shadow-lg' : 'bg-transparent text-white'}`}>
                <div className="flex justify-between 2xl:max-w-7xl max-w-5xl mx-auto max-lg:mx-5 items-center">
                    <div className="flex gap-16 items-center font-semibold">
                        <Link to="/"><img src={isScrolled ? logoDark : logoLight} alt="" /></Link>
                        {/* Menú de Escritorio */}
                        <ul className="hidden lg:flex gap-10 text-sm">
                            <li><Link to="/nosotros" className={`flex items-center gap-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}><IconUS stroke={isScrolled ? "#000" : "#fff"} />NOSOTROS</Link></li>
                            <li className="relative">
                                <button onClick={toggleServicesMenu} className={`flex items-center gap-2 ${isScrolled ? 'text-primary' : 'text-white'}`}><IconServices stroke={isScrolled ? "#000" : "#fff"} />
                                    SERVICIOS
                                </button>
                                {/* Submenú */}
                                {isServicesOpen && (
                                    <ul className={`absolute left-0 mt-4 w-56 rounded-lg shadow-lg ${isScrolled ? 'bg-white text-primary' : 'bg-primary text-white'}`}>
                                        <li><Link to="/servicio-preferente" className="block px-4 py-4 hover:bg-secondary">SERVICIO PREFERENTE</Link></li>
                                        <li><Link to="/servicio-preferente-indeci" className="block px-4 py-4 hover:bg-secondary">SERVICIO PREFRENTE INDECI</Link></li>
                                        <li><Link to="/servicio-presencial" className="block px-4 py-4 hover:bg-secondary">SERVICIO PRESENCIAL</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li><Link to="/trabaja-con-nosotros" className={`flex items-center gap-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}><IconWork stroke={isScrolled ? "#000" : "#fff"} />TRABAJA CON NOSOTROS</Link></li>
                            <li><Link to="/blog" className={`flex items-center gap-2 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}><IconBlog stroke={isScrolled ? "#000" : "#fff"}/>BLOG</Link></li>
                        </ul>
                    </div>
                    {/* Botón de Hamburguesa para Móviles */}
                    <button
                        className={`lg:hidden flex items-center px-3 py-2 border rounded  hover:text-primary hover:border-primary ${isScrolled ? 'border-primary' : 'border-white'}`}
                        onClick={toggleMenu}
                        aria-label="Abrir menú"
                    >
                        <IconHamburger stroke="#000" />
                    </button>
                    {/* Botón de Contacto */}
                    <a href="/#contacto" className="bg-secondary text-white px-7 py-4 rounded-lg text-md flex items-center gap-2 hidden hover:shadow-2xl lg:flex">
                        <IconQuote size={20} />
                        Realiza tu Cotización
                    </a>
                </div>
            </div>
        </>
    );
}