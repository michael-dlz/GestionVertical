import SubsHeader from "../components/SubsHeader"
import ServicesPage from "../components/ServicesPage"
import { IconCheckList, IconDollar, IconLoveAdmin, IconMessage, IconNormative, IconPropietary, IconSatisfied, IconTime } from "../Icons/Icons";

export default function PreferenteIndeciService() {

    const whyTexts = [
        { text: "Gestión de la Junta de Propietarios", Icon: IconPropietary },
        { text: "Atención Personalizada", Icon: IconMessage },
        { text: "Informes Periódicos", Icon: IconCheckList },
        { text: "Cumplimiento Normativo", Icon: IconNormative },
        { text: "Tarifas Competitivas", Icon: IconDollar },
    ];

    const categories = [
        "Edificios",
        "INDECI"
    ]

    const benefitsTexts = [
        { text: "Ahorro de Tiempo", Icon: IconTime },
        { text: "Mayor Satisfacción de Residentes", Icon: IconSatisfied },
        { text: "Administración sin Preocupaciones", Icon: IconLoveAdmin },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Servicio Preferente INDECI"
                imageBanner="https://img.freepik.com/foto-gratis/edificios-nuevos-zonas-verdes_1122-1533.jpg?t=st=1728678357~exp=1728681957~hmac=92d2a366303ff585623c609a416caa7c56e95db3c3bcac3d616c75402dd74f80&w=1380"
            />

            <ServicesPage
                title="Servicio Preferente INDECI"
                whyTitle="Nuestro Servicio Básico INDECI es la opción perfecta para edificios residenciales con pocos departamentos que cuentan con instalaciones INDECI. Al elegir este servicio, asegurarás una gestión eficaz de la Junta de Propietarios, cumpliendo con las normativas vigentes y optimizando el uso de los recursos del edificio. Este servicio está diseñado para promover una convivencia armoniosa entre los residentes, asegurando que todos estén informados y participen activamente en la toma de decisiones. Además, al contar con tarifas competitivas, obtendrás un excelente valor por tu inversión en la administración de tu propiedad."
                descriptionTitle="Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos que cuenten con instalaciones INDECI"
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://img.freepik.com/fotos-premium/edificio-cesped-verde-cielo-azul-algunas-nubes_605423-148964.jpg?semt=ais_hybrid-rr-similar"
                twoImg="https://img.freepik.com/foto-gratis/modernos-apartamentos-lujo-reflejan-crecimiento-urbano-futurista-generado-ia_188544-26162.jpg?semt=ais_hybrid-rr-similar"
                threeImg="https://img.freepik.com/foto-gratis/paisaje-analogico-ciudad-edificios_23-2149661455.jpg?t=st=1728685688~exp=1728689288~hmac=03d8c4f6428c2dc3df77ef191d524f14dd81ac787bd6fbc3929c5ac040894ec9&w=1380"
                priceService="Entre S/ 20 - S/ 60 por departamento"
                conditionService="El distrito/zona definirá el precio, mínimo 12 departamentos y máximo 100 departamentos"
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    )
}
