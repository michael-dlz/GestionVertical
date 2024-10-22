import { CardsBenefits } from "./Cards/CardsBenefits"
import { useCards } from "../../hooks/useCards"

export function Benefits() {

    const { data2 } = useCards()

    return (
        <>
            <div className="h-auto py-40">
                <div className="2xl:max-w-[70rem] max-w-5xl mx-auto">
                    <h1 className="font-bold text-4xl text-primary text-center max-2xl:text-3xl">Nuestros <span className="text-secondary underline">Beneficios</span></h1>
                    <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:mx-5 gap-5 mt-20">
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