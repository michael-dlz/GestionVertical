import { IconCV, IconMap } from "../Icons/Icons";
import { adress } from "../data/ContactInfo";

interface WorkProps {
    titleWork: string;
    descriptionWork: string;
    categories: string[];
    requirements: string[];
    benefits: string[]
}

export default function Work({ titleWork, descriptionWork, categories, requirements, benefits }: WorkProps) {
    return (
        <>
            <div className="p-10 border rounded-2xl">
                <h1 className="text-base font-semibold">{titleWork}</h1>
                <div className="my-5">
                    <p className="mb-5 flex items-center gap-1 text-sm"><IconMap stroke="#000" size={15} />{adress}</p>
                    <p className="text-sm">{descriptionWork}</p>
                    <p className="my-5 text-xs flex items-center gap-1">
                        {categories.map((cate, index) => (
                            <span key={index} className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">{cate}</span>
                        ))}
                    </p>
                </div>
                <div className="">
                    <h3 className="text-base">Requisitos:</h3>
                    <ul className="my-5 list-disc text-left text-sm text-textBlackp">
                        {requirements.map((req, index) => (
                            <li key={index} className="ml-10">{req}</li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-base">Beneficios</h3>
                    <ul className="my-5 list-disc text-left text-sm text-textBlackp">
                        {benefits.map((ben, index) => (
                            <li key={index} className="ml-10">{ben}</li>
                        ))}
                    </ul>
                </div>
                <a href={`https://wa.me/+51942901570?text=Hola,%20Estoy%20Interesado%20en%20el%20puesto%20de%20${encodeURIComponent(titleWork)}`} className="bg-secondary w-full text-white py-6 rounded-lg text-l mt-10 hover:shadow-2xl flex justify-center items-center gap-2"><IconCV stroke="#fff" size={25} />Postular</a>
            </div>
        </>
    )
}
