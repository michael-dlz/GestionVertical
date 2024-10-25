import SubsHeader from "../components/SubsHeader"
import ServicesPage from "../components/ServicesPage"
import { IconCapacitate, IconEthics, IconPropietary, IconSatisfied, IconTime } from "../Icons/Icons";

export default function Presencial() {

    const whyTexts = [
        {title:"Atención Presencial Continua", text: "Personal disponible en el lugar durante todo el horario laboral para resolver cualquier consulta o incidencia.", Icon: IconPropietary },
        {title:"Manejo de Áreas de Esparcimiento",  text: "Coordinación de actividades y eventos comunitarios para promover la interacción entre residentes.", Icon: IconEthics },
        {title:"Gestión Integral",  text: "Administración de todas las áreas del edificio, incluyendo mantenimiento, seguridad y atención a emergencias.", Icon: IconCapacitate },
    ];

    const categories = [
        "Condominios",
        "INDECI"
    ]

    const benefitsTexts = [
        { text: "Respuesta inmediata a las necesidades y preocupaciones de los residentes, lo que se traduce en un ambiente más seguro y agradable.", Icon: IconTime },
        { text: "Creación de una comunidad activa y unida a través de la promoción de actividades y el uso de espacios comunes.", Icon: IconSatisfied },
    ];

    return (
        <>
            <SubsHeader
                titleBanner="Residencial Presencial"
                imageBanner="https://img.freepik.com/foto-gratis/vista-ciudad-edificios-apartamentos-vegetacion-verde_23-2150439367.jpg?t=st=1728686251~exp=1728689851~hmac=79a8273804d5274990da3d855ac5b1c850311875f3d83690ab9e7971f93007df&w=1380"
            />

            <ServicesPage
                title="Residencial Presencial"
                whyTitle="Este servicio está pensado para edificios con más de 80 departamentos, donde la atención presencial es crucial. Se garantiza una gestión a tiempo completo, asegurando la atención inmediata a las necesidades de los residentes."
                descriptionTitle="Servicio ideal para edificios con muchos propietarios y/o muchas instalaciones donde parte de nuestro equipo estará presente en la gestión de la junta de propietarios."
                needTitle="Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños."
                oneImg="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895208/edificios_grandes_3_pjrgyh.jpg"
                twoImg="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895207/edificios_grandes_5_mkuo7u.jpg"
                threeImg="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895209/edificios_grandes_11_uael5i.jpg"
                priceService="Se negociará de acorde al caso"
                conditionService=""
                whyTexts={whyTexts}
                benefitsTexts={benefitsTexts}
                categories={categories}
            />
        </>
    )
}
