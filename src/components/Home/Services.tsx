import { CardsServices } from "./Cards/CardsServices"
import { useCards } from "../../hooks/useCards"

export function Services() {

    const { data } = useCards()

    return (
        <>
            <div className="bg-primary h-auto py-40">
                <div className="2xl:max-w-7xl max-w-6xl mx-auto max-lg:mx-5">
                    <h1 className="font-bold text-4xl text-white text-center">Nuestros <span className="text-secondary underline">Paquetes de Servicios</span></h1>
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