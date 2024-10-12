import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/effect-cards';

import "../../index.css"

import { EffectCards, Autoplay } from "swiper/modules";

const firstImage = "https://img.freepik.com/foto-gratis/tiro-vertical-edificio-blanco-cielo-despejado_181624-4575.jpg?t=st=1728579896~exp=1728583496~hmac=6040e8a247a023b964663f9902b936d878d7a5b42690ebb4eb51b213a1d5ff79&w=740"
const secondImage = "https://img.freepik.com/foto-gratis/disparo-angulo-fachada-edificio-moderno-blanco-cielo-azul-claro_181624-48219.jpg?t=st=1728579904~exp=1728583504~hmac=4bf6dfc2503bd977f2666a15d1609c38b8f5524087a0b10e9f554ad84ff2b819&w=1380"
const thirdImage = "https://img.freepik.com/fotos-premium/cerca-arquitectura-moderna-gran-teatro_1112-8984.jpg?w=1380"
const fourthImage = "https://img.freepik.com/fotos-premium/edificio-cesped-verde-cielo-azul-algunas-nubes_605423-148964.jpg?w=1380"

export default function Introduction() {
    return (
        <>
            <div className="w-widthPerson py-40 h-auto m-auto flex items-center gap-36">
                <div className="w-1/2 flex flex-col items-start justify-center gap-10 text-wrap">
                    <h2 className="font-bold text-4xl text-primary">la <span className="text-secondary underline">administración perfecta</span> para tus propiedades</h2>
                    <p className="text-textBlackp text-l">Somos expertos en administración de edificios residenciales, brindando soluciones personalizadas para la gestión de Juntas de Propietarios. Ya sea en grandes complejos o edificios pequeños, garantizamos eficiencia, cumplimiento de normativas y la satisfacción de los residentes. ¡Deja tu edificio en nuestras manos y disfruta de una administración sin preocupaciones!</p>
                    <Link to="/contacto" className="bg-secondary  text-white px-7 py-4 rounded-lg text-l hover:shadow-2xl">Contactános</Link>
                </div>
                <div className="w-1/2 h-full">
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={firstImage} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={secondImage} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={thirdImage} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={fourthImage} alt="" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}