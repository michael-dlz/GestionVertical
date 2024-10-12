import { email, phone, adress, socials, schedule } from "../data/ContactInfo";
import SubsHeader from "../components/SubsHeader";
import { IconMap, IconCalendar, IconEmail, IconWhatsApp } from "../Icons/Icons";

export default function Contact() {
    return (
        <>

            <SubsHeader
                titleBanner="Contactános"
                imageBanner="https://img.freepik.com/fotos-premium/mujer-negocios-hispana-sonriente-hablando-su-telefono-movil_116547-134410.jpg?w=1380"
            />
            <div className="">
                <div className="max-w-[1570px] h-full mx-auto text-l grid items-center grid-cols-2">
                    <div className="py-20 my-40 text-white bg-primary px-20 rounded-s-3xl">
                        <h2 className="font-bold text-white text-3xl mb-10">Contacto</h2>
                        <div className="">
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
                    <form className="h-auto bg-white text-s p-10 rounded-xl shadow-2xl">
                        <div className="">
                            <label className="text-xs font-bold" htmlFor="">NOMBRE Y APELLIDO</label>
                            <div className="">
                                <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Luis Sandoval" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="text-xs font-bold" htmlFor="">CORREO ELECTRÓNICO</label>
                            <div className="">
                                <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="email" placeholder="luissandoval@gmail.com" />
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between gap-5">
                            <div className="w-full">
                                <label className="text-xs font-bold" htmlFor="">TELÉFONO</label>
                                <div className="">
                                    <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="phone" placeholder="+51 998 223 519" />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="text-xs font-bold" htmlFor="">DISTRITO</label>
                                <div className="">
                                    <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Santiago de Surco" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="text-xs font-bold" htmlFor="">EMPRESA ADMINISTRADORA LOCAL</label>
                            <div className="">
                                <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Empresa X Administración" />
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between gap-5">
                            <div className="w-full">
                                <label className="text-xs font-bold" htmlFor="">ANTIGUEDAD</label>
                                <div className="">
                                    <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="number" min={1} placeholder="5 años" />
                                </div>
                            </div>
                            <div className="w-full">
                                <label className="text-xs font-bold" htmlFor="">NÚMERO DE DEPARTAMENTOS</label>
                                <div className="">
                                    <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="number" min={1} placeholder="25" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full">
                            <button className="w-full bg-secondary text-white px-7 py-5 rounded-lg text-l">Cotizar Ahora</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1379.3722024711067!2d-76.95989556462688!3d-12.081074574228166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1728690505973!5m2!1ses-419!2spe" width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    );
}