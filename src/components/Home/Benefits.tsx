import { CardsBenefits } from "./Cards/CardsBenefits"
import { useCards } from "../../hooks/useCards"

export function Benefits() {

    const { data2 } = useCards()

    return (
        <>
            <div className="h-auto py-40">
                <div className="w-widthPerson m-auto">
                    <h1 className="font-bold text-4xl text-primary text-center">Nuestros <span className="text-secondary underline">Beneficios</span></h1>
                    <div className="w-full grid grid-rows-2 grid-cols-3 gap-5 mt-20">
                        {data2.map((cardbenefits) => (
                            <CardsBenefits
                                key={cardbenefits.id}
                                cardbenefits={cardbenefits}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}