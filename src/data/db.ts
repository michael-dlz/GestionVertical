import { TypeReviews, TypeBenefits, TypeServices } from "../types"

export const dbservices: TypeServices[] = [
    {
        id: 1,
        title: "Servicio Preferente",
        description: "Servicio de administración de Junta de Propietarios para edificios residenciales con hasta 12 departamentos, que no cuenten con Instalaciones INDECI.",
        price: "Entre S/ 60,00 - S/ 100,00",
        condition: "(precio por departamento, máximo 12)",
        image: "https://img.freepik.com/fotos-premium/diseno-arquitectonico-moderno-edificio-balcones_605022-179383.jpg?w=740",
        url: "/servicio-preferente",
    },
    {
        id: 2,
        title: "Servicio Preferente Indeci",
        description: "Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos, que cuenten con instalaciones INDECI.",
        price: "Entre S/ 20,00 - S/ 60,00",
        condition: "(precio por departamento, mínimo 12, máximo 100)",
        image: "https://img.freepik.com/fotos-premium/edificios-residenciales-modernos-gran-altura-munich-alemania_1048944-2246915.jpg?w=1380",
        url: "/servicio-preferente-indeci",
    },
    {
        id: 3,
        title: "Servicio Presencial",
        description: "Servicio ideal para edificios con múltiples propietarios y/o instalaciones, donde nuestro equipo se involucra activamente en la gestión de la Junta de Propietarios.",
        price: "Precio Negociable",
        condition: "(De acorde al caso)",
        image: "https://img.freepik.com/foto-gratis/angulo-edificios-oficinas-ciudad_23-2148798680.jpg?t=st=1728608053~exp=1728611653~hmac=4e94045a867539c7d647810e8ae648bcc94dd0f358ed968089ca89692d78c857&w=1380",
        url: "/servicio-presencial",
    },
]

export const dbbenefits: TypeBenefits[] = [
    {
        id: 1,
        image: "https://img.freepik.com/foto-gratis/hombre-sujetando-promocionando-despertador_144627-61291.jpg?t=st=1728588897~exp=1728592497~hmac=e068a3af4294c484a0ac802253a545f6e07820d3da0440f23a6f6e389af660a6&w=1380",
        title: "Ahorro de Tiempo",
        description: "Nos encargamos de la gestión administrativa, permitiéndote enfocarte en lo que realmente importa.",
    },
    {
        id: 2,
        image: "https://img.freepik.com/foto-gratis/gente-cosecha-que-mira-graficos-estadisticas_23-2147656686.jpg?semt=ais_hybrid-rr-similar",
        title: "Eficiencia Operativa",
        description: "Procesos rápidos y efectivos que mejoran la comunicación y resolución de problemas en tu comunidad.",
    },
    {
        id: 3,
        image: "https://img.freepik.com/foto-gratis/gente-sentado-escritorio-trabajando_23-2147650936.jpg?semt=ais_hybrid-rr-similar",
        title: "Cumplimiento Normativo",
        description: "Garantizamos que tu edificio cumpla con todas las regulaciones vigentes, impidiendo sanciones.",
    },
    {
        id: 4,
        image: "https://img.freepik.com/foto-gratis/familia-cuatro-personas-celebrando-vispera-ano-nuevo-casa-juntos_23-2149581068.jpg?semt=ais_hybrid-rr-similar",
        title: "Satisfacción de los Residentes",
        description: "Nuestra gestión mejora la calidad de vida al resolver reclamos de manera rápida y efectiva.",
    },
    {
        id: 5,
        image: "https://img.freepik.com/foto-gratis/mano-colocando-bloque-madera-representar-crecimiento_23-2148780590.jpg?semt=ais_hybrid-rr-similar",
        title: "Valor Agregado",
        description: "Un edificio bien administrado aumenta su valor, atrayendo compradores e inquilinos interesados.",
    },
    {
        id: 6,
        image: "https://img.freepik.com/foto-gratis/retrato-guardia-seguridad-masculino-estacion-radio-pantallas-camara_23-2150368714.jpg?t=st=1728695548~exp=1728699148~hmac=2e4809482c14cb3fe824195f3618fb91091179d64ef49716f7ad2f35cdd55f13&w=1380",
        title: "Seguridad Garantizada",
        description: "Implementamos tecnologías avanzadas y procesos efectivos que protegen a los residentes y sus bienes, brindando tranquilidad las 24 horas del día.",
    },
]

export const dbreviews: TypeReviews[] = [
    {
        id: 1,
        perfil: "https://img.freepik.com/foto-gratis/mujer-expresiva-posando-al-aire-libre_344912-3096.jpg?semt=ais_hybrid-rr-similar",
        name: "María López",
        position: "Presidente de la Junta de Propietarios",
        comment: "Desde que contratamos a esta empresa para administrar nuestro edificio, todo ha cambiado. La comunicación es fluida, los problemas se resuelven rápidamente y nuestros residentes están más satisfechos que nunca. ¡Es un alivio saber que están en buenas manos!"
    },
    {
        id: 2,
        perfil: "https://img.freepik.com/fotos-premium/gestion-permisos-roles-usuarios-plataformas-comercio-electronico_1104763-19809.jpg?semt=ais_hybrid-rr-similar",
        name: "Carlos Fernández",
        position: "Propietario de un departamento",
        comment: "Estoy muy contento con el servicio que ofrecen. Siempre están disponibles para resolver cualquier duda o problema. La administración es impecable."
    },
    {
        id: 3,
        perfil: "https://img.freepik.com/vector-gratis/imagen-perfil-tiktok-judith-geometrica-minimalista_742173-12131.jpg?semt=ais_hybrid-rr-similar",
        name: "Lucía González",
        position: "Propietaria y miembro de la Junta",
        comment: "Gracias a esta administración, el edificio se mantiene en perfectas condiciones. Siempre están atentos a lo que necesitamos y proponen soluciones efectivas."
    },
    {
        id: 4,
        perfil: "https://img.freepik.com/fotos-premium/hombre-rapado-capucha-sonrisa-circulo-generativo-ai_1035767-12808.jpg?semt=ais_hybrid-rr-similar",
        name: "Pedro Ramírez",
        position: "Propietario de un local comercial",
        comment: "El equipo de administración ha mejorado mucho la convivencia entre los vecinos y la gestión de los espacios comunes. Sin duda, una excelente elección."
    },
    {
        id: 5,
        perfil: "https://img.freepik.com/psd-gratis/mujer-expresiva-gesticulando_23-2150198673.jpg?semt=ais_hybrid-rr-similar",
        name: "Ana Martínez",
        position: "Residente",
        comment: "Antes había muchos problemas de comunicación, pero desde que esta empresa se encarga de la administración, todo es más transparente y organizado."
    },
    {
        id: 6,
        perfil: "https://img.freepik.com/fotos-premium/testimonio-personal-patrocinador-o-revision-campana-crowdfunding-que-ha-apoyado_995578-19399.jpg?semt=ais_hybrid-rr-similar",
        name: "José Gutiérrez",
        position: "Miembro de la Junta de Propietarios",
        comment: "La administración ha sido muy eficiente y profesional. Han mejorado significativamente el mantenimiento del edificio y la calidad de vida de los residentes."
    }
]
