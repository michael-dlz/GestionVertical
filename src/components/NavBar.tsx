import { useState } from "react";
import { Link } from "react-router-dom";
import { IconWhatsApp } from "../Icons/Icons";

export default function NavBar() {
    // Estado para controlar la visibilidad del submenú
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Función para alternar la visibilidad del submenú
    const toggleServicesMenu = () => {
        setIsServicesOpen(prev => !prev);
    };

    return (
        <div className="text-white">
            <div className="flex justify-between w-widthPerson m-auto py-12 items-center">
                <div className="flex gap-16 items-center font-semibold">
                    <h2 className="font-bold text-2xl">LOGO</h2>
                    <ul className="flex gap-12 text-sm">
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/nosotros">NOSOTROS</Link></li>
                        <li className="relative">
                            <button onClick={toggleServicesMenu} className="flex items-center">
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
                        <li><Link to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</Link></li>
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
