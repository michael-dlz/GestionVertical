import type { TypeBenefits } from "../../../types";

interface BenefitsProps {
    cardbenefits: TypeBenefits,
}

export function CardsBenefits({ cardbenefits }: BenefitsProps) {

    const {image, title, description} = cardbenefits

    return (
        <>
            <div className="bg-white  text-center  rounded-2xl flex-1">
                <div className="overflow-hidden h-56 rounded-xl hover:shadow-2xl">
                    <img className="object-cover w-full h-full" src={image} alt="" />
                </div>
                <div className="py-6 text-left">
                    <h2 className="text-base font-bold text-primary max-2xl:text-sm">{title}</h2>
                    <p className="text-sm text-textBlackp py-3 max-2xl:text-xs">{description}</p>
                </div>
            </div>
        </>
    )
}