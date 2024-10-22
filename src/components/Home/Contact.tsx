import { email, phone, adress, socials, schedule } from "../../data/ContactInfo";
import Form from "../Form";
import { IconMap, IconCalendar, IconEmail, IconWhatsApp } from "../../Icons/Icons";

export default function Contact() {
    return (
        <>
            <div className="py-40" id="contacto">
                <div className="2xl:max-w-6xl max-w-5xl max-lg:mx-5 h-full mx-auto text-sm">
                    <div className="flex gap-1 text-xs text-center justify-center pb-8">
                        <span className="bg-ligthSpan text-spanColor w-auto px-6 py-1 rounded-sm font-semibold !font-sans">CONTACTO</span>
                    </div>
                    <h1 className="font-bold text-4xl max-2xl:text-3xl text-primary text-center"><span className="text-secondary underline">Cotiza</span> con Nosotros</h1>
                    <div className="grid items-center grid-cols-2 mt-20 max-lg:grid-cols-1 gap-20">
                        <div className="text-primary rounded-s-3xl max-lg:rounded-r-3xl max-lg:p-10">
                            <h2 className="font-bold text-primary text-3xl ">Contacto</h2>
                            <p className="text-md max-2xl:text-sm py-5">Contáctenos para obtener respuestas a sus preguntas, recibir comentarios y programar citas.</p>
                            <div className="text-xs font-light">
                                <div className="grid grid-cols-2 gap-12">
                                    <p className="my-3 flex flex-col items-start gap-4 font-light"> <IconMap size={30} stroke="#246AF3" /> <b className="text-base font-semibold">Oficina Principal</b>{adress}</p>
                                    <p className="my-3 flex flex-col items-start gap-4 font-light"> <IconWhatsApp size={25} stroke="#246AF3" /><b className="text-base font-semibold">WhatsApp - Llamadas</b>{phone}</p>
                                    <p className="my-3 flex flex-col items-start gap-4 font-light "> <IconEmail size={25} stroke="#246AF3" /><b className="text-base font-semibold">Correo Electrónico</b>{email}</p>
                                    <p className="my-3 flex flex-col items-start gap-4 font-light"> <IconCalendar size={25} stroke="#246AF3" /><b className="text-base font-semibold">Horarios de Atención</b>
                                        <ul className="">
                                            {schedule.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </p>
                                </div>
                                <p className="mt-10 mb-3 text-base font-semibold">Síguenos en Redes Sociales</p>
                                <ul>
                                    {socials.map((social, index) => (
                                        <li key={index} className="flex items-center" >
                                            <a href={social.link} target="_blank" className="flex items-center my-2 gap-3" rel="noopener noreferrer">
                                                <social.Icon size={25} stroke="#246AF3" />
                                                {social.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Form padding={"p-0"} />
                    </div>
                </div>
            </div>
            <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1379.3722024711067!2d-76.95989556462688!3d-12.081074574228166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1728690505973!5m2!1ses-419!2spe" width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}