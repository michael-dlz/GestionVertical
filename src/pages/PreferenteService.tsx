import ServicesPage from "../components/ServicesPage";
import SubsHeader from "../components/SubsHeader";
import { IconCheckList, IconDollar, IconLoveAdmin, IconMessage, IconNormative, IconPropietary, IconSatisfied, IconTime } from "../Icons/Icons";

export default function PreferenteService() {
    const whyTexts = [
        {title:"Gestión Administrativa", text: "Administración de cuentas, cobros de cuotas, informes financieros y actas de reuniones.", Icon: IconPropietary },
        {title:"Mantenimiento de Instalaciones", text: "Supervisión regular de las instalaciones para asegurar su correcto funcionamiento.", Icon: IconMessage },
        {title:"Atención al Personal", text: "Capacitación y supervisión del personal de mantenimiento y servicios.", Icon: IconMessage },
        {title:"Atención a Residentes", text: "Comunicación fluida y atención personalizada a las inquietudes y necesidades de los propietarios.", Icon: IconMessage },
    ];

    const categories = [
        "Casas",
        "Condominios"
    ]

    const benefitsTexts = [
        { text: "Alto nivel de satisfacción entre los residentes gracias a la atención cercana y eficiente.", Icon: IconTime },
        { text: "Reducción de costos operativos debido a la gestión centralizada de las necesidades del edificio.", Icon: IconSatisfied },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Servicio Preferente"
                imageBanner="https://img.freepik.com/foto-gratis/arquitectura-moderna-apartamentos_1268-14696.jpg?t=st=1728677794~exp=1728681394~hmac=b87fd4fb6283621a667d5572e64ca38d6a3f817e9480faf537fd3f59292f5a81&w=1380"
            />
            <ServicesPage
                title="Servicio Preferente"
                whyTitle="Este servicio está diseñado para edificios de baja densidad que albergan hasta 12 departamentos con bajo metraje de áreas comunes. La administración se enfoca siempre en un trato personalizado, y la cercanía entre residentes."
                descriptionTitle="Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos que no cuenten con Instalaciones INDECI"
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://img.freepik.com/foto-gratis/vista-aerea-compleja-ciudad_23-2148975282.jpg"
                twoImg="https://img.freepik.com/foto-gratis/vista-aerea-compleja-paisaje-urbano_23-2148975287.jpg"
                threeImg="https://img.freepik.com/fotos-premium/vista-aerea-compleja-paisaje-urbano_23-2148975289.jpg"
                priceService="Entre S/ 60 - S/ 100 por departamento"
                conditionService="El distrito/zona definirá el precio, máximo 12 departamentos"
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    );
}
