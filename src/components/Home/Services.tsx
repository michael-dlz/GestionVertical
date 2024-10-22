import { CardsServices } from "./Cards/CardsServices"
import { useCards } from "../../hooks/useCards"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "../../index.css"

export function Services() {

    const { data } = useCards()

    return (
        <>
        <div className="bg-gradient-to-b from-primary to-primaryGradient h-auto py-40" id="Servicios">
                <div className="2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5">
                    <div className="pb-20 flex flex-col items-start justify-center gap-8 text-wrap">
                        <div className="flex gap-1 text-xs">
                            <span className="bg-ligthSpan text-spanColor w-auto px-6 py-1 rounded-sm font-semibold !font-sans">SERVICIOS</span>
                        </div>
                        <h2 className="font-bold text-white text-4xl max-2xl:text-3xl">¿Buscas una <span className="text-lightSecondary underline">Administración de Edificios Eficiente?</span></h2>
                        <p className="text-sm text-white w-1/2 max-lg:w-full max-2xl:text-sm">En Gestión Vertical, nuestros servicios optimizan tus recursos y maximizan tu bienestar con un enfoque personalizado. Disfruta más de tu comunidad y preocúpate menos, nosotros nos encargamos de todo. </p>
                    </div>
                    <div className="flex gap-20 items-center">
                        <Swiper
                            slidesPerView={1.2}
                            spaceBetween={10}
                            grabCursor={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            breakpoints={{
                                // Para pantallas pequeñas (móviles)
                                768: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 10,
                                },
                                // Para tablets en orientación horizontal o laptops pequeñas
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }} className="carousel-services relative flex-1">
                            {data.map((cardservice) => (
                                <SwiperSlide className="">
                                    <CardsServices
                                        key={cardservice.id}
                                        cardservice={cardservice}
                                    /></SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}