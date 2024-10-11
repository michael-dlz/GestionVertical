import {IconFacebook, IconInstagram, IconTiktok, IconLinkedin} from "../Icons/Icons"
import { email, phone, adress } from "../data/ContactInfo"

export default function Footer() {

    const linksStyle = "font-medium text-sm"
    const blockStyle = "flex-1 flex flex-col items-start gap-8"

    return (
        <>
            <div className="bg-primary pt-28 pb-4">
                <div className="flex gap-20 w-[1570px] m-auto text-white pb-20">
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">ACERCA DE NOSOTROS</h2>
                        <p className="font-medium text-sm">Ofrecemos administración eficiente y personalizada para edificios residenciales, gestionando Juntas de Propietarios y garantizando cumplimiento y satisfacción. ¡Confía en nosotros para una gestión sin complicaciones!</p>
                        <h3 className="font-bold text-5xl">LOGO</h3>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">CONTACTO</h2>
                        <div className="flex flex-col gap-2">
                            <p className={linksStyle}>Dirección: {adress}</p>
                            <p className={linksStyle}>Teléfono: {phone}</p>
                            <p className={linksStyle}>Correo: {email}</p>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">ENLACES IMPORTANTES</h2>
                        <div className="flex flex-col gap-2">
                            <a className={linksStyle} href="">Inicio</a>
                            <a className={linksStyle} href="">Nosotros</a>
                            <a className={linksStyle} href="">Servicios</a>
                            <a className={linksStyle} href="">Galería</a>
                            <a className={linksStyle} href="">Trabaja con Nosotros</a>
                            <a className={linksStyle} href="">Política de Cumplimiento</a>
                        </div>
                    </div>
                    <div className={blockStyle}>
                        <h2 className="font-bold text-m">NOTICIAS</h2>
                        <div className="flex flex-col gap-2">
                            <p className="font-medium text-sm">Obtén nuestras últimas novedades directamente a tu correo.</p>
                            <div className="flex my-5 rounded-lg overflow-hidden">
                                <input className="w-full h-full py-5 px-3 bg-lightGray" type="text" placeholder="Correo Electrónico" />
                                <button className=" py-5 px-3 bg-secondary">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-20 w-[1570px] m-auto text-white font-medium text-sm pt-8 my-8 border-slate-600 border-t-2 items-center justify-between">
                    <div className="">
                        <h2>Gestión Vertical @2024 Todos los Derechos Reservados | Esta página web fue desarrollada por <a className="text-secondary" href="https://www.linkedin.com/in/michael-omar-de-la-cruz-ingaruca-2784951a9/">ZeyN</a></h2>
                    </div>
                    <div className="flex gap-3">
                        <IconFacebook />
                        <IconInstagram />
                        <IconTiktok />
                        <IconLinkedin />
                    </div>
                </div>
            </div>
        </>
    )
}