import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { IconLink, IconQuote } from "../Icons/Icons";
import { phone } from "../data/ContactInfo";

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
                <div className="w-widthPerson mx-auto grid grid-cols-2 items-start gap-28 h-auto">
                    <div className="text-l">
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Por qué Elegir el {title}?</h2>
                            <p className="text-textBlackp py-10">{whyTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Qué Incluye nuestro {title}?</h2>
                            <div className="py-10">
                                {whyTexts.map((why, index) => (
                                    <p key={index} className="flex items-center gap-3 mb-4 text-textBlackp">
                                        <why.Icon size={30} stroke="#000" />
                                        {why.text}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">Beneficios de Elegir nuestro {title}</h2>
                            <div className="py-10">
                                {benefitsTexts.map((benefits, index) => (
                                    <p key={index} className="flex items-center gap-3 mb-4 text-textBlackp">
                                        <benefits.Icon size={30} stroke="#000" />
                                        {benefits.text}</p>
                                ))}
                            </div>
                        </div>
                        <a href={`https://wa.me/${phone}?text=Hola,%20Me%20interesaría%20poder%20cotizar%20el%20${encodeURIComponent(title)}`} className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-l hover:shadow-2xl">
                            Cotizar por WhatsApp
                        </a>
                    </div>
                    <div className="bg-white shadow-2xl h-auto p-20 text-l rounded-3xl grid items-center sticky top-40">
                        <div>
                            <h2 className="text-primary font-bold text-lg flex items-center gap-3"><IconQuote stroke="#000" size={30}/>ADQUIERE UNA COTIZACIÓN FORMAL</h2>
                            <div className="flex gap-1 text-xs py-6">
                                {categories.map((cate, index) => (
                                    <span key={index} className="bg-spanColor text-white w-auto px-6 py-1 rounded-lg">
                                        {cate}
                                    </span>
                                ))}
                            </div>
                            <p>{descriptionTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-lg py-6">PRECIO</h2>
                            <div className="pb-10 text-textBlackp">
                                <p>{priceService}</p>
                                <p>{conditionService}</p>
                            </div>
                            <a className="text-secondary font-semibold flex items-center gap-3" target="_blank" href="https://www.dropbox.com/scl/fi/dejik074572mup02yksbx/Gu-a-de-Gastos-Comunes.docx?rlkey=djmubnrvtzjzd55nvbeh4ay91&st=j5chillu&dl=0"><IconLink stroke="#16A085" size={30} /> GUÍA DE GASTOS COMUNES</a>
                        </div>
                        <button className="bg-secondary w-full text-white px-14 py-8 rounded-lg text-l mt-10 hover:shadow-2xl">LO QUIERO</button>
                    </div>
                </div>
            </div>
            <div className="h-full pb-40">
                <div className="w-widthPerson mx-auto h-full">
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