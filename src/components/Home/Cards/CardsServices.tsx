import { Link } from "react-router-dom";
import type { TypeServices } from "../../../types";

interface ServiceProps {
    cardservice: TypeServices,
}

export function CardsServices({ cardservice }: ServiceProps) {

    const { title, description, price, condition, image, url } = cardservice

    return (
        <>
            <div className="bg-white text-center rounded-2xl flex-1 items-center justify-center overflow-hidden">
                <div className="h-52 flex-1">
                    <img className="w-full h-full object-cover" src={image} alt="" />
                </div>
                <div className="flex-1">
                    <div className="p-10">
                        <h1 className="text-m font-bold">{title}</h1>
                        <h2 className="text-textBlackp text-sm py-5">{description}</h2>
                        <div className="border-b-2"></div>
                    </div>
                    <div className="bg-lightGray font-bold text-sm w-full p-6">
                        <h1>{price}</h1>
                        <h2 className="text-textBlackp font-medium">{condition}</h2>
                    </div>
                    <div className="p-10 w-full">
                        <Link to={url} className="bg-secondary w-full text-white px-7 py-4 rounded-lg text-mdhover:shadow-2xl">
                            Me Interesa
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}