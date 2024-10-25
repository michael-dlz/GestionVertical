import ServicesPage from "../components/ServicesPage";
import SubsHeader from "../components/SubsHeader";
import { IconLoveAdmin, IconManagement, IconMessage, IconPropietary, IconSatisfied } from "../Icons/Icons";

export default function PreferenteService() {
    const whyTexts = [
        {title:"Gestión Administrativa", text: "Administración de cuentas, cobros de cuotas, informes financieros y actas de reuniones.", Icon: IconPropietary },
        {title:"Mantenimiento de Instalaciones", text: "Supervisión regular de las instalaciones para asegurar su correcto funcionamiento.", Icon: IconManagement },
        {title:"Atención al Personal", text: "Capacitación y supervisión del personal de mantenimiento y servicios.", Icon: IconMessage },
        {title:"Atención a Residentes", text: "Comunicación fluida y atención personalizada a las inquietudes y necesidades de los propietarios.", Icon: IconMessage },
    ];

    const categories = [
        "Casas",
        "Condominios"
    ]

    const benefitsTexts = [
        { text: "Alto nivel de satisfacción entre los residentes gracias a la atención cercana y eficiente.", Icon: IconSatisfied },
        { text: "Reducción de costos operativos debido a la gestión centralizada de las necesidades del edificio.", Icon: IconLoveAdmin },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Residencial Preferente"
                imageBanner="https://res.cloudinary.com/degbnkdoh/image/upload/w_auto/f_auto/q_auto/edificios_peque%C3%B1os_3_gq1tqp.png"
            />
            <ServicesPage
                title="Residencial Preferente"
                whyTitle="Este servicio está diseñado para edificios de baja densidad que albergan hasta 12 departamentos con bajo metraje de áreas comunes. La administración se enfoca siempre en un trato personalizado, y la cercanía entre residentes."
                descriptionTitle="Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos que no cuenten con Instalaciones INDECI"
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://res.cloudinary.com/degbnkdoh/image/upload/w_860/f_auto/q_auto/edificios_peque%C3%B1os_6_pzldk4.jpg"
                twoImg="https://res.cloudinary.com/degbnkdoh/image/upload/w_860/f_auto/q_auto/edificios_peque%C3%B1os_2_asm6eh.png"
                threeImg="https://res.cloudinary.com/degbnkdoh/image/upload/w_860/f_auto/q_auto/edificios_peque%C3%B1os_7_rnplzo.jpg"
                priceService="Entre S/ 60 - S/ 100 por departamento"
                conditionService="El distrito/zona definirá el precio, máximo 12 departamentos"
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    );
}
