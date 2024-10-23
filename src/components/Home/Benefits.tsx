import { CardsBenefits } from "./Cards/CardsBenefits"
import { useCards } from "../../hooks/useCards"

export function Benefits() {

    const { data2 } = useCards()

    return (
        <>
            <div className="h-auto py-40">
                <div className="2xl:max-w-6xl max-w-5xl mx-auto">
                    <div className="flex gap-1 text-xs text-center justify-center pb-8">
                        <span className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-sm font-semibold !font-sans">BENEFICIOS</span>
                    </div>
                    <h1 className="font-extrabold text-4xl text-primary text-center max-2xl:text-3xl">Beneficios <span className="text-secondary underline">a tu medida</span></h1>
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