import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconWhatsApp } from "../Icons/Icons";

export default function NavBar() {
    // Estado para controlar la visibilidad del submenú
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Función para alternar la visibilidad del submenú
    const toggleServicesMenu = () => {
        setIsServicesOpen(prev => !prev);
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
        <div className={`mt-8 w-full fixed left-0 top-0 z-10 py-10 transition-all duration-300 ${isScrolled ? 'bg-white text-primary py-5 shadow-2xl' : 'bg-transparent text-white'}`}>
            <div className="flex justify-between w-widthPerson m-auto items-center">
                <div className="flex gap-16 items-center font-semibold">
                    <h2 className="font-bold text-2xl duration-0">LOGO</h2>
                    <ul className="flex gap-12 text-sm">
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
                <Link to="/contacto" className="bg-secondary text-white px-7 py-4 rounded-lg text-l flex items-center gap-2 hover:shadow-2xl">
                    <IconWhatsApp size={20} />
                    Contáctanos
                </Link>
            </div>
        </div>
    );
}