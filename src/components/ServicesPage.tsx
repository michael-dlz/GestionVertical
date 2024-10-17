import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { IconCalendar, IconLink, IconMoney } from "../Icons/Icons";
import { phone } from "../data/ContactInfo";

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
    return (
        <>
            <div className="py-40 h-auto">
                <div className="2xl:max-w-7xl max-w-6xl mx-auto grid grid-cols-2 items-start gap-28 h-auto max-lg:mx-5">
                    <div className="text-l">
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
                            <div className="flex gap-3 items-center mt-6">
                                <a href={`https://wa.me/${phone}?text=Hola,%20Me%20interesaría%20poder%20cotizar%20el%20${encodeURIComponent(title)}`} className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-l hover:shadow-2xl">
                                    Cotizar por WhatsApp
                                </a>
                                <a href="/#contacto" className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-l hover:shadow-2xl">
                                    Cotizar por Correo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-2xl h-auto p-20 text-l rounded-3xl grid items-center sticky top-40">
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
                            <a className="text-secondary font-semibold flex items-center gap-2 underline" target="_blank" href="https://www.dropbox.com/scl/fi/dejik074572mup02yksbx/Gu-a-de-Gastos-Comunes.docx?rlkey=djmubnrvtzjzd55nvbeh4ay91&st=j5chillu&dl=0"><IconLink stroke="#2382C0" size={25} /> Guía de Gastos Comunes</a>
                        </div>
                        <button className="bg-secondary w-full text-white px-14 py-6 rounded-lg text-l mt-10 hover:shadow-2xl flex justify-center items-center gap-2"><IconCalendar size={25} />Reserva Ahora</button>
                    </div>
                </div>
            </div>
            <div className="h-full pb-40">
                <div className="2xl:max-w-7xl max-w-6xl mx-auto h-full">
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={30}
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper3 w-full grid"
                    >
                        <SwiperSlide className="bg-primary text-white p-10 flex flex-col justify-center rounded-2xl overflow-hidden shadow-2xl">
                            <h2 className="font-bold text-lg pb-10">NOS ADECUAMOS A TU NECESIDAD</h2>
                            <p className="text-l">{needTitle}</p>
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