import ServicesPage from "../components/ServicesPage";
import SubsHeader from "../components/SubsHeader";
import { IconCheckList, IconDollar, IconLoveAdmin, IconMessage, IconNormative, IconPropietary, IconSatisfied, IconTime } from "../Icons/Icons";

export default function PreferenteService() {
    const whyTexts = [
        { text: "Gestión de la Junta de Propietarios", Icon: IconPropietary },
        { text: "Atención Personalizada", Icon: IconMessage },
        { text: "Informes Periódicos", Icon: IconCheckList },
        { text: "Cumplimiento Normativo", Icon: IconNormative },
        { text: "Tarifas Competitivas", Icon: IconDollar },
    ];

    const categories = [
        "Casas",
        "Condominios"
    ]

    const benefitsTexts = [
        { text: "Ahorro de Tiempo", Icon: IconTime },
        { text: "Mayor Satisfacción de Residentes", Icon: IconSatisfied },
        { text: "Administración sin Preocupaciones", Icon: IconLoveAdmin },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Servicio Preferente"
                imageBanner="https://img.freepik.com/foto-gratis/arquitectura-moderna-apartamentos_1268-14696.jpg?t=st=1728677794~exp=1728681394~hmac=b87fd4fb6283621a667d5572e64ca38d6a3f817e9480faf537fd3f59292f5a81&w=1380"
            />
            <ServicesPage
                title="Servicio Preferente"
                whyTitle="El Servicio Básico es ideal para edificios residenciales con pocos departamentos que no cuentan con instalaciones INDECI. Este servicio ofrece una administración efectiva y accesible de la Junta de Propietarios, permitiendo a los residentes disfrutar de una gestión organizada sin preocupaciones. Al elegir esta opción, te beneficiarás de un enfoque personalizado que se adapta a las características específicas de tu comunidad. La flexibilidad en el precio, dependiendo del distrito o zona, asegura que recibirás un servicio de calidad que se ajusta a tu presupuesto. Nuestro compromiso es proporcionar un ambiente de convivencia saludable y satisfactorio para todos los residentes."
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
