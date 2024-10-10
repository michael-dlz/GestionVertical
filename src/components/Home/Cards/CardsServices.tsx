import type { TypeServices } from "../../../types";

interface ServiceProps {
    cardservice: TypeServices,
}

export function CardsServices({ cardservice }: ServiceProps) {

    const { title, description, price, condition } = cardservice

    return (
        <>
            <div className="bg-white text-center rounded-2xl flex flex-1 flex-col items-center justify-center">
                <div className="p-10">
                    <h1 className="text-m font-bold">{title}</h1>
                    <h2 className="text-sm py-5">{description}</h2>
                    <div className="border-b-2"></div>
                </div>
                <div className="bg-lightGray font-bold text-sm w-full p-6">
                    <h1>{price}</h1>
                    <h1 className="font-medium">{condition}</h1>
                </div>
                <div className="p-10 w-full">
                    <button className="bg-secondary w-full text-white px-7 py-4 rounded-lg text-l">
                        Me Interesa
                    </button>
                </div>
            </div>
        </>
    )
}