import { email, phone, adress, socials, schedule } from "../../data/ContactInfo";
import Form from "../Form";
import { IconMap, IconCalendar, IconEmail, IconWhatsApp } from "../../Icons/Icons";

export default function Contact() {
    return (
        <>
            <div className="py-40">
                <div className="2xl:max-w-7xl max-w-6xl h-full mx-auto text-l">
                    <h1 className="font-bold text-4xl text-primary text-center">Nuestros <span className="text-secondary underline">Beneficios</span></h1>
                    <div className="grid items-center grid-cols-2 mt-20">
                        <div className="py-20 text-white bg-primary px-20 rounded-s-3xl">
                            <h2 className="font-bold text-white text-3xl mb-10">Contacto</h2>
                            <div className="text-l">
                                <p className="my-3 flex items-center gap-3"> <IconMap size={25} /> Dirección: {adress}</p>
                                <p className="my-3 flex items-center gap-3"> <IconWhatsApp size={25} /> Teléfono: {phone}</p>
                                <p className="my-3 flex items-center gap-3"> <IconEmail size={25} /> Correo Electrónico: {email}</p>
                                <p className="my-3 flex items-center gap-3"> <IconCalendar size={25} /> Horario de Atención:</p>
                                <ul className="my-3">
                                    {schedule.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <p className="mt-10 mb-3">Síguenos en Redes Sociales:</p>
                                <ul>
                                    {socials.map((social, index) => (
                                        <li key={index} className="flex items-center" >
                                            <a href={social.link} target="_blank" className="flex items-center my-2 gap-3" rel="noopener noreferrer">
                                                <social.Icon size={25} />
                                                {social.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Form />
                    </div>
                </div>
            </div>
            <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1379.3722024711067!2d-76.95989556462688!3d-12.081074574228166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1728690505973!5m2!1ses-419!2spe" width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}