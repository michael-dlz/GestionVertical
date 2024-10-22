import { IconCV, IconLink, IconMap } from "../Icons/Icons";
import { adress } from "../data/ContactInfo";

interface WorkProps {
    titleWork: string;
    descriptionWork: string;
    categories: string[];
    requirements: string[];
    benefits: string[]
}

export default function Work({ titleWork, descriptionWork, categories, requirements, benefits }: WorkProps) {

    const formattedTitleWork = titleWork.replace(/ /g, '-');
    const linkToCopy = `https://gestion-vertical.vercel.app/trabaja-con-nosotros#${formattedTitleWork}`;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(linkToCopy);
            alert('Enlace copiado al portapapeles'); // Puedes personalizar esta alerta
        } catch (err) {
            console.error('Error al copiar el enlace: ', err);
        }
    };

    return (
        <>
            <div className="p-10 border rounded-2xl" id={titleWork}>
                <h1 className="text-base font-semibold">{titleWork}</h1>
                <div className="my-5">
                    <p className="mb-5 flex items-center gap-1 text-sm max-2xl:text-xs "><IconMap stroke="#000" size={15} />{adress}</p>
                    <p className="text-sm max-2xl:text-xs ">{descriptionWork}</p>
                    <p className="my-5 text-xs flex items-center gap-1">
                        {categories.map((cate, index) => (
                            <span key={index} className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">{cate}</span>
                        ))}
                    </p>
                </div>
                <div className="flex pb-5 border-b gap-2">
                    <a href={`https://wa.me/+51942901570?text=Hola,%20Estoy%20Interesado%20en%20el%20puesto%20de%20${encodeURIComponent(titleWork)}`} className="bg-secondary w-auto text-white py-4 px-8 rounded-lg text-sm hover:shadow-2xl flex justify-center items-center max-2xl:text-xs  gap-1"><IconCV stroke="#fff" size={20} />Postular</a>
                    <button
                        onClick={handleCopyLink}
                        className="bg-lightSecondary border border-secondary w-auto text-white py-4 px-4 rounded-lg text-sm hover:shadow-2xl flex justify-center items-center gap-1"
                    >
                        <IconLink stroke="#2382C0" size={20} />
                    </button>
                </div>
                <div className="pt-5">
                    <h3 className="text-base">Requisitos:</h3>
                    <ul className="my-5 list-disc text-left text-sm max-2xl:text-xs text-textBlackp">
                        {requirements.map((req, index) => (
                            <li key={index} className="ml-10">{req}</li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-base">Beneficios</h3>
                    <ul className="my-5 list-disc text-left text-sm max-2xl:text-xs text-textBlackp">
                        {benefits.map((ben, index) => (
                            <li key={index} className="ml-10">{ben}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
