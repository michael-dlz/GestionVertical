import { CardsReviews } from "./Cards/CardsReviews"
import { Swiper, SwiperSlide } from "swiper/react"
import { useCards } from "../../hooks/useCards"

import "swiper/css";

import "../../index.css"

import { Autoplay } from "swiper/modules";

export function Reviews() {

    const { data3 } = useCards()

    return (
        <>
            <div className="bg-lightGray h-auto py-40">
                <div className="max-w-7xl mx-auto max-lg:mx-10">
                    <h1 className="font-bold text-4xl text-primary text-center">Usuarios <span className="text-secondary underline">Satisfechos</span></h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
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
                                slidesPerView: 2.7,
                                spaceBetween: 25,
                            },
                        }}
                        modules={[Autoplay]}
                        className="MySwiper2 w-full flex gap-5 mt-20">
                        {data3.map((cardreviews) => (
                            <SwiperSlide>
                                <CardsReviews
                                    key={cardreviews.id}
                                    cardreviews={cardreviews}
                                /></SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}