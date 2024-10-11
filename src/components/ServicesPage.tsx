import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { IconLink } from "../Icons/Icons";

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
                <div className="max-w-[1570px] mx-auto grid grid-cols-2 items-start gap-28 h-auto">
                    <div className="text-l">
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Por qué Elegir el {title}?</h2>
                            <p className="py-10">{whyTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">¿Qué Incluye nuestro {title}?</h2>
                            <div className="py-10">
                                {whyTexts.map((why, index) => (
                                    <p key={index} className="flex items-center gap-3 mb-4">
                                        <why.Icon size={30} stroke="#000" />
                                        {why.text}</p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-3xl">Beneficios de Elegir nuestro {title}</h2>
                            <div className="py-10">
                                {benefitsTexts.map((benefits, index) => (
                                    <p key={index} className="flex items-center gap-3 mb-4">
                                        <benefits.Icon size={30} stroke="#000" />
                                        {benefits.text}</p>
                                ))}
                            </div>
                        </div>
                        <button className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-l hover:shadow-2xl">Contáctanos para más información</button>
                    </div>
                    <div className="bg-white shadow-2xl h-auto p-20 text-l rounded-3xl grid items-center sticky top-20">
                        <div>
                            <h2 className="text-primary font-bold text-lg">ADQUIERE UNA COTIZACIÓN FORMAL</h2>
                            <div className="flex gap-1 text-xs py-6">
                                {categories.map((cate, index) => (
                                    <span key={index} className="bg-spanColor w-auto px-6 py-1 rounded-lg">
                                        {cate}
                                    </span>
                                ))}
                            </div>
                            <p>{descriptionTitle}</p>
                        </div>
                        <div>
                            <h2 className="text-primary font-bold text-lg py-6">PRECIO</h2>
                            <div className="pb-10">
                                <p>{priceService}</p>
                                <p>{conditionService}</p>
                            </div>
                            <a className="text-secondary font-semibold flex items-center gap-3" href=""><IconLink stroke="#16A085" size={30} /> GUÍA DE GASTOS COMUNES</a>
                        </div>
                        <button className="bg-secondary w-full text-white px-14 py-8 rounded-lg text-l mt-10 hover:shadow-2xl">LO QUIERO</button>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <div className="max-w-[1570px] w-full mx-auto h-full">
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
                        className="mySwiper3 w-full grid mb-40"
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


// https://img.freepik.com/foto-gratis/vista-aerea-compleja-ciudad_23-2148975282.jpg?t=st=1728674718~exp=1728678318~hmac=a4396c567be450d60dd394add3eb10a21606d7762c082d54800629954dd8d2f4&w=1380

// https://img.freepik.com/foto-gratis/vista-aerea-compleja-paisaje-urbano_23-2148975287.jpg?t=st=1728674727~exp=1728678327~hmac=1f87d82f25c73b6f14ab33348a6fdad0a59a1bf2d18d769ef8f3f2d6f31e0d3f&w=1380

// https://img.freepik.com/fotos-premium/vista-aerea-compleja-paisaje-urbano_23-2148975289.jpg?w=1380