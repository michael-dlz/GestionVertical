import { CardsServices } from "./Cards/CardsServices"
import { useCards } from "../../hooks/useCards"

export function Services() {

    const { data } = useCards()

    return (
        <>
            <div className="bg-primary h-auto pt-36 pb-1">
                <div className="max-w-[1570px] m-auto">
                    <h1 className="font-bold text-4xl text-white text-center">Nuestros <span className="text-secondary underline">Servicios</span></h1>
                    <div className="w-full flex gap-5 mb-40 mt-24">
                        {data.map((cardservice) => (
                            <CardsServices 
                                key={cardservice.id}
                                cardservice={cardservice}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}