import SubsHeader from "../components/SubsHeader"
import ServicesPage from "../components/ServicesPage"
import { IconCheckList, IconDollar, IconLoveAdmin, IconMessage, IconNormative, IconPropietary, IconSatisfied, IconTime } from "../Icons/Icons";

export default function Presencial() {

    const whyTexts = [
        { text: "Gestión de la Junta de Propietarios", Icon: IconPropietary },
        { text: "Atención Personalizada", Icon: IconMessage },
        { text: "Informes Periódicos", Icon: IconCheckList },
        { text: "Cumplimiento Normativo", Icon: IconNormative },
        { text: "Tarifas Competitivas", Icon: IconDollar },
    ];

    const categories = [
        "Condominios",
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
                titleBanner="Servicio Presencial"
                imageBanner="https://img.freepik.com/foto-gratis/vista-ciudad-edificios-apartamentos-vegetacion-verde_23-2150439367.jpg?t=st=1728686251~exp=1728689851~hmac=79a8273804d5274990da3d855ac5b1c850311875f3d83690ab9e7971f93007df&w=1380"
            />

            <ServicesPage
                title="Servicio Presencial"
                whyTitle="Optar por nuestro Servicio Presencial significa contar con el respaldo de un equipo especializado que estará presente en la gestión de la Junta de Propietarios. Este servicio es ideal para edificios con un gran número de propietarios o instalaciones complejas, ya que permite una atención más directa y personalizada. La presencia de nuestro equipo garantiza una mejor comunicación entre los propietarios y una gestión más eficiente de los problemas y decisiones que surgen en la comunidad. Al elegir este servicio, disfrutarás de una administración proactiva que se enfoca en mejorar la convivencia y resolver cualquier inconveniente de manera oportuna."
                descriptionTitle="Servicio ideal para edificios con muchos propietarios y/o muchas instalaciones donde parte de nuestro equipo estará presente en la gestión de la junta de propietarios."
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://img.freepik.com/foto-gratis/paisaje-urbano-tokio-dia_23-2149209889.jpg?t=st=1728686205~exp=1728689805~hmac=724b8c80526abd078a070b29fb3f9f3a41bcfe5dcf24faa97e8a040ada438c32&w=1380"
                twoImg="https://img.freepik.com/foto-gratis/angulo-rascacielos-ciudad_23-2148798665.jpg?t=st=1728686222~exp=1728689822~hmac=89868d30fbc40b362323a7e6d5a8c7d90f4e6fd7094ce82330c8561d2d4a4014&w=1380"
                threeImg="https://img.freepik.com/fotos-premium/rascacielos-apartamentos-residenciales-suburbio-dormitorio-distrito-baltupiai-vilnius-lituania_250132-21324.jpg?w=1060"
                priceService="Se negociará de acorde al caso"
                conditionService=""
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    )
}
