import { Link } from "react-router-dom"
import { IconWhatsApp } from "../Icons/Icons"

export default function NavBar() {
    return (
        <div className="text-white">
            <div className="flex justify-between max-w-[1570px] m-auto py-12 items-center">
                <div className="flex gap-16 items-center font-semibold">
                    <h2 className="font-bold text-2xl">LOGO</h2>
                    <ul className="flex gap-12 text-sm">
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/nosotros">NOSOTROS</Link></li>
                        <li><Link to="/servicios">SERVICIOS</Link></li>
                        <li><Link to="/trabaja-con-nosotros">TRABAJA CON NOSOTROS</Link></li>
                    </ul>
                </div>
                <Link to="/contacto" className="bg-secondary text-white px-7 py-4 rounded-lg text-l flex items-center gap-2 hover:shadow-2xl">
                    <IconWhatsApp size={20} />
                    Contáctanos
                </Link>
            </div>
        </div>
    )
}
