import { email, phone, adress, logoLight, socials } from "../data/ContactInfo"
import { Link } from "react-router-dom"
import { IconSend } from "../Icons/Icons"

export default function Footer() {

    const linksStyle = "font-extralight text-sm"
    const blockStyle = "flex flex-col items-start gap-8"

    return (
        <>
            <div className="bg-primary pt-28 pb-4">
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-20 2xl:max-w-6xl max-w-5xl max-lg:mx-5 mx-auto text-white pb-20">
                    <div className={blockStyle}>
                        <h1 className="font-bold text-base">ACERCA DE NOSOTROS</h1>
                        <p className="font-extralight text-sm">Ofrecemos administración eficiente y transparente para edificios y condominios, asegurando una gestión formal y correcta con las Juntas de Propietarios y otros participantes de la operación. Garantizamos cumplimiento y satisfacción. ¡Confía en nosotros para una gestión integral!</p>
                        <img src={logoLight} alt="" />
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-base">CONTACTO</h2>
                        <div className="flex flex-col gap-2">
                            <a href="" className={linksStyle}>Dirección: {adress}</a>
                            <a href={`tel:${phone}`} className={linksStyle}>Teléfono: {phone}</a>
                            <a href={`mailto:${email}`} className={linksStyle}>Correo: {email}</a>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-sm">ENLACES IMPORTANTES</h2>
                        <div className="flex flex-col gap-2">
                            <Link to="/" className={linksStyle}>Inicio</Link >
                            <Link to="/nosotros" className={linksStyle}>Nosotros</Link>
                            <Link to="" className={linksStyle}>Servicios</Link>
                            <Link to="/#contacto" className={linksStyle}>Contacto</Link>
                            <Link to="/trabaja-con-nosotros" className={linksStyle}>Trabaja con Nosotros</Link>
                            <Link to="/nosotros" className={linksStyle}>Política de Cumplimiento</Link>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-base">NOTICIAS</h2>
                        <div className="flex flex-col gap-2">
                            <p className="font-extralight text-sm">Obtén nuestras últimas novedades directamente a tu correo.</p>
                            <div className="flex my-5 rounded-sm overflow-hidden">
                                <input className="w-full h-full py-4 px-3 bg-inputColor text-textBlackp" type="text" placeholder="Correo Electrónico" />
                                <button className="py-4 px-3 bg-secondary hover:shadow-2xl"><IconSend size={25} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-20 2xl:max-w-6xl max-w-5xl max-lg:mx-5 mx-auto text-white font-extralight text-sm pt-8 my-8 border-slate-600 border-t-2 items-center justify-between">
                    <div className="">
                        <h2>Gestión Vertical @2024 Todos los Derechos Reservados | Esta página web fue desarrollada por <a className="text-spanColor font-semibold" href="https://www.linkedin.com/in/michael-omar-de-la-cruz-ingaruca-2784951a9/">ZeyN</a></h2>
                    </div>
                    <div className="flex gap-3">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link}><social.Icon /></a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}