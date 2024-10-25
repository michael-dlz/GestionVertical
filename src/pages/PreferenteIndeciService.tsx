import SubsHeader from "../components/SubsHeader"
import ServicesPage from "../components/ServicesPage"
import { IconCheckList, IconEthics, IconLegal, IconLoveAdmin, IconSatisfied} from "../Icons/Icons";

export default function PreferenteIndeciService() {

    const whyTexts = [
        {title:"Cumplimiento Normativo", text: "Verificación y cumplimiento de las regulaciones establecidas por INDECI para la seguridad de las instalaciones.", Icon: IconLegal },
        {title:"Gestión de Áreas Comunes",  text: "Mantenimiento y limpieza de espacios de esparcimiento, asegurando que estén siempre en condiciones óptimas para el uso.", Icon: IconEthics },
        {title:"Atención Administrativa",  text: "Elaboración de informes periódicos sobre el estado de la comunidad y seguimiento de las cuotas y gastos.", Icon: IconCheckList },
    ];

    const categories = [
        "Edificios",
        "INDECI"
    ]

    const benefitsTexts = [
        { text: "Aumento de la seguridad y bienestar de los residentes al cumplir con la normativa vigente.", Icon: IconLoveAdmin },
        { text: "Fomento de un sentido de comunidad a través de la gestión efectiva de las áreas comunes.", Icon: IconSatisfied },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Residencial INDECI"
                imageBanner="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895216/edificios_medianos_9_tmss4x.jpg"
            />

            <ServicesPage
                title="Residencial INDECI"
                whyTitle="Ideal para edificios de densidad media con hasta 80 departamentos, este servicio garantiza el cumplimiento de la normativa INDECI, asegurando la seguridad de los residentes y el mantenimiento adecuado de las áreas comunes de esparcimiento."
                descriptionTitle="Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos que cuenten con instalaciones INDECI"
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://img.freepik.com/fotos-premium/edificio-cesped-verde-cielo-azul-algunas-nubes_605423-148964.jpg?semt=ais_hybrid-rr-similar"
                twoImg="https://img.freepik.com/foto-gratis/modernos-apartamentos-lujo-reflejan-crecimiento-urbano-futurista-generado-ia_188544-26162.jpg?semt=ais_hybrid-rr-similar"
                threeImg="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895216/edificios_medianos_5_c4wapy.jpg"
                priceService="Entre S/ 20 - S/ 60 por departamento"
                conditionService="El distrito/zona definirá el precio, mínimo 12 departamentos y máximo 100 departamentos"
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    )
}
