import { CardsBenefits } from "./Cards/CardsBenefits"
import { useCards } from "../../hooks/useCards"

export function Benefits() {

    const { data2 } = useCards()

    return (
        <>
            <div className="h-auto pt-36 pb-1">
                <div className="max-w-[1570px] m-auto">
                    <h1 className="font-bold text-4xl text-primary text-center">Nuestros <span className="text-secondary underline">Beneficios</span></h1>
                    <div className="w-full flex gap-5 mt-28 mb-40">
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