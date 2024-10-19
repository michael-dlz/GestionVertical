import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { IconCalendar, IconLink, IconMoney } from "../Icons/Icons";
import { phone } from "../data/ContactInfo";
import { motion } from "framer-motion"

import "../index.css"

interface WhyText {
    text: string
    Icon: React.ComponentType<{ size?: number, stroke?: string }>
}

interface BenefitsText {
    text: string;
    Icon: React.ComponentType<{ size?: number; stroke?: string }>;
}

interface ServicesProps {
    title: string;
    whyTitle: string;
    descriptionTitle: string;
    needTitle: string;
    oneImg: string;
    twoImg: string;
    threeImg: string;
    priceService: string;
    conditionService: string;
    categories: string[];
    whyTexts: WhyText[];
    benefitsTexts: BenefitsText[];
}

export default function ServicesPage({
    title,
    whyTitle,
    descriptionTitle,
    needTitle,
    oneImg,
    twoImg,
    threeImg,
    priceService,
    conditionService,
    whyTexts,
    benefitsTexts,
    categories
}: ServicesProps) {


    const [step, setStep] = useState<number>(1); // Estado para controlar el paso
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        antiguedad: '',
        cantidadDepartamentos: '',
        correo: '',
        telefono: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <>
            <div className="py-40 h-auto">
                <div className="2xl:max-w-7xl max-w-5xl mx-auto grid grid-cols-2 items-start gap-28 h-auto max-lg:mx-5 max-lg:grid-cols-1">
                    <div className="text-md">
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Por qué Elegir el {title}?</h2>
                            <p className="text-textBlackp py-10">{whyTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Qué Incluye nuestro {title}?</h2>
                            <div className="py-10">
                                {whyTexts.map((why, index) => (
                                    <p key={index} className="flex items-center gap-4 mb-4 text-textBlackp">
                                        <div className="p-3 shadow-lg bg-lightSecondary rounded-xl border border-secondary">
                                            <why.Icon size={30} stroke="#2382C0" />
                                        </div>
                                        {why.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">Beneficios de Elegir nuestro {title}</h2>
                            <div className="py-10">
                                {benefitsTexts.map((benefits, index) => (
                                    <p key={index} className="flex items-center gap-3 mb-4 text-textBlackp">
                                        <div className="p-3 shadow-lg bg-lightSecondary rounded-xl border border-secondary">
                                            <benefits.Icon size={30} stroke="#2382C0" />
                                        </div>
                                        {benefits.text}</p>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <h2>También puedes:</h2>
                            <div className="">
                                <div className="flex gap-3 items-center mt-6">
                                    <a href={`https://wa.me/${phone}?text=Hola,%20Me%20interesaría%20poder%20cotizar%20el%20${encodeURIComponent(title)}`} className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-md hover:shadow-2xl max-lg:px-4">
                                        Cotizar por WhatsApp
                                    </a>
                                    <button onClick={nextStep} className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-md hover:shadow-2xl max-lg:px-4">
                                        Cotizar por Correo
                                    </button>
                                </div>
                                {step > 1 && (
                                    <div className="mt-6 py-8">
                                        {step === 2 && (
                                            <motion.div
                                                key="step2"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <label className="" htmlFor="nombreCompleto">Nombre Completo</label>
                                                <div className="my-4">
                                                    <input
                                                        type="text"
                                                        id="nombreCompleto"
                                                        name="nombreCompleto"
                                                        value={formData.nombreCompleto}
                                                        onChange={handleInputChange}
                                                        className="py-4 text-xs px-3 rounded-lg bg-inputColor w-full"
                                                        placeholder="Ingrese su nombre completo"
                                                    />
                                                </div>
                                                <button onClick={nextStep} className="bg-secondary text-white px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Siguiente</button>
                                            </motion.div>
                                        )}

                                        {step === 3 && (
                                            <motion.div
                                                key="step3"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <label htmlFor="antiguedad">Antigüedad del/los edificios</label>
                                                <div className="my-4">
                                                    <input
                                                        type="text"
                                                        id="antiguedad"
                                                        name="antiguedad"
                                                        value={formData.antiguedad}
                                                        onChange={handleInputChange}
                                                        className="py-4 text-xs px-3 rounded-lg bg-inputColor w-full"
                                                        placeholder="Ingrese la antigüedad de los edificios"
                                                    />
                                                </div>
                                                <button onClick={prevStep} className="bg-lightSecondary text-secondary border border-secondary px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Anterior</button>
                                                <button onClick={nextStep} className="ml-2 bg-secondary text-white px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Siguiente</button>
                                            </motion.div>
                                        )}

                                        {step === 4 && (
                                            <motion.div
                                                key="step4"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <label htmlFor="cantidadDepartamentos">Cantidad de Departamentos</label>
                                                <div className="my-4">
                                                    <input
                                                        type="number"
                                                        id="cantidadDepartamentos"
                                                        name="cantidadDepartamentos"
                                                        value={formData.cantidadDepartamentos}
                                                        onChange={handleInputChange}
                                                        className="py-4 text-xs px-3 rounded-lg bg-inputColor w-full"
                                                        placeholder="Ingrese la cantidad de departamentos"
                                                    />
                                                </div>
                                                <button onClick={prevStep} className="bg-lightSecondary text-secondary border border-secondary px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Anterior</button>
                                                <button onClick={nextStep} className="ml-2 bg-secondary text-white px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Siguiente</button>
                                            </motion.div>
                                        )}

                                        {step === 5 && (
                                            <motion.div
                                                key="step5"
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -50 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                <label htmlFor="correo">Correo Electrónico</label>
                                                <input
                                                    type="email"
                                                    id="correo"
                                                    name="correo"
                                                    value={formData.correo}
                                                    onChange={handleInputChange}
                                                    className="py-4 text-xs my-2 px-3 rounded-lg bg-inputColor w-full"
                                                    placeholder="Ingrese su correo electrónico"
                                                />
                                                <label htmlFor="telefono" >Teléfono de Contacto</label>
                                                <input
                                                    type="tel"
                                                    id="telefono"
                                                    name="telefono"
                                                    value={formData.telefono}
                                                    onChange={handleInputChange}
                                                    className="py-4 text-xs mb-4 px-3 rounded-lg bg-inputColor w-full"
                                                    placeholder="Ingrese su teléfono"
                                                />
                                                <button onClick={prevStep} className="bg-lightSecondary text-secondary border border-secondary px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Anterior</button>
                                                <button onClick={() => alert("Formulario Enviado")} className="ml-2 bg-secondary text-white px-5 py-3 rounded-lg text-md cursor-pointer hover:shadow-2xl">Enviar</button>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-2xl h-auto p-16 text-mdrounded-3xl grid items-center sticky top-40 max-lg:p-10">
                        <div>
                            <h2 className="text-primary font-bold text-lg flex items-center gap-2"><IconCalendar stroke="#000" size={25} />RESERVA UNA CITA</h2>
                            <div className="flex gap-1 text-xs py-6">
                                {categories.map((cate, index) => (
                                    <span key={index} className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">
                                        {cate}
                                    </span>
                                ))}
                            </div>
                            <p>{descriptionTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-lg py-6 flex items-center gap-2"><IconMoney stroke="#000" size={25} />PRECIO</h2>
                            <div className="pb-10 text-textBlackp">
                                <p>{priceService}</p>
                                <p>{conditionService}</p>
                            </div>
                            <a className="text-secondary font-semibold flex items-center gap-2 underline mb-10" target="_blank" href="https://www.dropbox.com/scl/fi/dejik074572mup02yksbx/Gu-a-de-Gastos-Comunes.docx?rlkey=djmubnrvtzjzd55nvbeh4ay91&st=j5chillu&dl=0"><IconLink stroke="#2382C0" size={25} /> Guía de Gastos Comunes</a>
                        </div>
                        <a href={`https://wa.me/${phone}?text=Hola,%20quisiera%20solicitar%20una%20cita%20para%20conversar%20sobre%20el%20tema%20de%20${encodeURIComponent(title)}.%20Por%20favor,%20indíquenme%20disponibilidad.`}
                            className="bg-secondary w-full text-white px-14 py-6 rounded-lg text-mdmt-10 hover:shadow-2xl flex justify-center items-center gap-2"><IconCalendar size={25} />Reserva Ahora</a>
                    </div>
                </div>
            </div>
            <div className="h-full pb-40">
                <div className="2xl:max-w-7xl max-w-5xl mx-auto h-full max-lg:mx-5">
                    <Swiper
                        slidesPerView={1.3}
                        spaceBetween={30}
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            // Para pantallas pequeñas (móviles)
                            768: {
                                slidesPerView: 1.3,
                                spaceBetween: 10,
                            },
                            // Para tablets en orientación horizontal o laptops pequeñas
                            1024: {
                                slidesPerView: 2.7,
                                spaceBetween: 25,
                            },
                        }}
                        modules={[Autoplay]}
                        className="mySwiper3 w-full  grid"
                    >
                        <SwiperSlide className="bg-primary text-white p-10 flex flex-col justify-center rounded-2xl overflow-hidden shadow-2xl">
                            <h2 className="font-bold text-lg pb-10">NOS ADECUAMOS A TU NECESIDAD</h2>
                            <p className="text-sm">{needTitle}</p>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={oneImg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={twoImg} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" src={threeImg} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}