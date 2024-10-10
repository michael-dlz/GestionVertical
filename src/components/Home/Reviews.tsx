import { CardsReviews } from "./Cards/CardsReviews"
import { Swiper, SwiperSlide } from "swiper/react"
import { useCards } from "../../hooks/useCards"

import "swiper/css";

import "../../index.css"

export function Reviews() {

    const { data3 } = useCards()

    return (
        <>
            <div className="bg-lightGray h-auto pt-36 pb-1">
                <div className="w-[1570px] m-auto">
                    <h1 className="font-bold text-4xl text-primary text-center">Usuarios <span className="text-secondary underline">Satisfechos</span></h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        className="MySwiper2 w-full flex gap-5 mb-40 mt-24">
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