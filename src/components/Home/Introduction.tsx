import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import CloudinaryImage from "../CloudinaryImage";
import Images from "../../assets";

import 'swiper/css';
import 'swiper/css/effect-cards';

import "../../index.css"

import { EffectCards, Autoplay } from "swiper/modules";

export default function Introduction() {
    return (
        <>
            <div className="py-40 h-auto m-auto items-center">
                <div className="box-border grid grid-cols-2 max-lg:grid-cols-1 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 gap-28 items-center">
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
                            <SwiperSlide><CloudinaryImage name="img_edf_grn_1"/></SwiperSlide>
                            <SwiperSlide><CloudinaryImage name="img_edf_med_2"/></SwiperSlide>
                            <SwiperSlide><CloudinaryImage name="img_edf_pqñ_5"/></SwiperSlide>
                            <SwiperSlide><CloudinaryImage name="img_edf_grn_5"/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="w-full flex flex-col items-start justify-center gap-8 text-wrap">
                        <div className="flex gap-1 text-xs">
                            <span className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-sm font-semibold !font-sans">SOBRE NOSOTROS</span>
                        </div>
                        <h2 className="font-extrabold text-4xl text-primary">La <span className="text-secondary underline">administración perfecta</span> para tus propiedades</h2>
                        
                        <p className="text-textBlackp text-sm">Somos expertos en la administración de edificios residenciales y condominios, ofreciendo soluciones personalizadas para la gestión de Juntas de Propietarios. Garantizamos eficiencia, transparencia y cumplimiento de normativas, asegurando la satisfacción de todos los residentes. </p>
                        <p className="font-semibold">¡Descubre el valor de una gestión con éxito en los resultados!</p>
                        <Link to="/contacto" className="bg-secondary text-white px-7 py-4 rounded-sm text-sm hover:shadow-2xl">Contactános</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
