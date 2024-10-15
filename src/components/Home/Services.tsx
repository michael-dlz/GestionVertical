import { CardsServices } from "./Cards/CardsServices"
import { useCards } from "../../hooks/useCards"

export function Services() {

    const { data } = useCards()

    return (
        <>
            <div className="bg-primary h-auto py-40">
                <div className="max-w-7xl mx-auto max-lg:mx-10">
                    <h1 className="font-bold text-4xl text-white text-center">Nuestros <span className="text-secondary underline">Servicios</span></h1>
                    <div className="w-full grid gap-5 mt-20 grid-cols-3 max-lg:grid-cols-1">
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