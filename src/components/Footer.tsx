import { email, phone, adress } from "../data/ContactInfo"
import { socials } from "../data/ContactInfo"
import { Link } from "react-router-dom"

export default function Footer() {

    const linksStyle = "font-medium text-sm"
    const blockStyle = "flex-1 flex flex-col items-start gap-8"

    return (
        <>
            <div className="bg-primary pt-28 pb-4">
                <div className="flex gap-20 w-widthPerson m-auto text-white pb-20">
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">ACERCA DE NOSOTROS</h2>
                        <p className="font-medium text-sm">Ofrecemos administración eficiente y personalizada para edificios residenciales, gestionando Juntas de Propietarios y garantizando cumplimiento y satisfacción. ¡Confía en nosotros para una gestión sin complicaciones!</p>
                        <h3 className="font-bold text-5xl">LOGO</h3>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">CONTACTO</h2>
                        <div className="flex flex-col gap-2">
                            <a href="" className={linksStyle}>Dirección: {adress}</a>
                            <a href={`tel:${phone}`} className={linksStyle}>Teléfono: {phone}</a>
                            <a href={`mailto:${email}`} className={linksStyle}>Correo: {email}</a>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">ENLACES IMPORTANTES</h2>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className={linksStyle}>Inicio</Link >
                            <Link to="/nosotros" className={linksStyle}>Nosotros</Link>
                            <Link to="" className={linksStyle}>Servicios</Link>
                            <Link to="/contacto" className={linksStyle}>Contacto</Link>
                            <Link to="" className={linksStyle}>Trabaja con Nosotros</Link>
                            <Link to="/nosotros" className={linksStyle}>Política de Cumplimiento</Link>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">NOTICIAS</h2>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-sm">Obtén nuestras últimas novedades directamente a tu correo.</p>
                            <div className="flex my-5 rounded-lg overflow-hidden">
                                <input className="w-full h-full py-5 px-3 bg-inputColor" type="text" placeholder="Correo Electrónico" />
                                <button className=" py-5 px-3 bg-secondary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-20 w-widthPerson m-auto text-white font-medium text-sm pt-8 my-8 border-slate-600 border-t-2 items-center justify-between">
                    <div className="">
                        <h2>Gestión Vertical @2024 Todos los Derechos Reservados | Esta página web fue desarrollada por <a className="text-secondary" href="https://www.linkedin.com/in/michael-omar-de-la-cruz-ingaruca-2784951a9/">ZeyN</a></h2>
                    </div>
                    <div className="flex gap-3">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link}><social.Icon/></a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}