import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/effect-cards';

import "../../index.css"

import { EffectCards, Autoplay } from "swiper/modules";

const firstImage = "https://img.freepik.com/foto-gratis/tiro-vertical-edificio-blanco-cielo-despejado_181624-4575.jpg?t=st=1728579896~exp=1728583496~hmac=6040e8a247a023b964663f9902b936d878d7a5b42690ebb4eb51b213a1d5ff79&w=740";
const secondImage = "https://img.freepik.com/foto-gratis/disparo-angulo-fachada-edificio-moderno-blanco-cielo-azul-claro_181624-48219.jpg?t=st=1728579904~exp=1728583504~hmac=4bf6dfc2503bd977f2666a15d1609c38b8f5524087a0b10e9f554ad84ff2b819&w=1380";
const thirdImage = "https://img.freepik.com/fotos-premium/cerca-arquitectura-moderna-gran-teatro_1112-8984.jpg?w=1380";
const fourthImage = "https://img.freepik.com/fotos-premium/edificio-cesped-verde-cielo-azul-algunas-nubes_605423-148964.jpg?w=1380";

export default function Introduction() {
    return (
        <>
            <div className="py-40 h-auto m-auto items-center">
                <div className="box-border grid grid-cols-2 max-lg:grid-cols-1 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 gap-28">
                    <div className="w-full flex flex-col items-start justify-center gap-8 text-wrap">
                        <h2 className="font-bold text-4xl text-primary max-2xl:text-3xl">La <span className="text-secondary underline">administración perfecta</span> para tus propiedades</h2>
                        <p className="text-textBlackp text-sm max-2xl:text-sm">Somos expertos en la administración de edificios residenciales y condominios, ofreciendo soluciones personalizadas para la gestión de Juntas de Propietarios. Garantizamos eficiencia, transparencia y cumplimiento de normativas, asegurando la satisfacción de todos los residentes.</p>
                        <p className="font-semibold max-2xl:text-sm">¡Descubre el valor de una gestión con éxito en los resultados!</p>
                        <Link to="/contacto" className="bg-secondary text-white px-7 py-4 rounded-lg text-sm max-2xl:text-xs hover:shadow-2xl">Contactános</Link>
                    </div>
                    <div className="w-full h-full max-lg:overflow-x-hidden">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, EffectCards]}
                            className="mySwiper w-full h-96"
                        >
                            <SwiperSlide><img src={firstImage} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={secondImage} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={thirdImage} alt="" /></SwiperSlide>
                            <SwiperSlide><img src={fourthImage} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
