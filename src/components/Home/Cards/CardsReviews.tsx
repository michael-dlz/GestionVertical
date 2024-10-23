import type { TypeReviews } from "../../../types";

interface ReviewsProps {
    cardreviews: TypeReviews,
}

export function CardsReviews({ cardreviews }: ReviewsProps) {

    const { perfil, comment, position, name } = cardreviews

    return (
        <>

            <div className="bg-white p-14 text-left relative rounded-2xl flex-1 h-full shadow-2xl hover:shadow-none">
                <div className="flex gap-6 items-center">
                    <div className="overflow-hidden w-16 h-16 rounded-full">
                        <img className="w-full h-full object-cover" src={perfil} alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-bold text-sm">{name}</h2>
                        <p className="text-textBlackp font-medium text-sm">{position}</p>
                    </div>
                </div>
                <div className="py-10">
                    <p className="text-textBlackp font-light text-lg italic">"{comment}"</p>
                </div>
            </div>
        </>
    )
}