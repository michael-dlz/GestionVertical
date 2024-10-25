import SubsHeader from "../components/SubsHeader"
import { IconCapacitate, IconCorruption, IconEthics, IconFinance, IconLegal, IconMonitoring, IconPrevention, IconProtect, IconReport } from "../Icons/Icons"

export default function About() {

  interface ComplianceLegal {
    title: string
    text: string
    Icon: React.ComponentType<{ size?: number, stroke?: string }>
  }

  const complianceLegal: ComplianceLegal[] = [
    { title: "Cumplimiento legal", text: "Tenemos el compromiso de cumplir con todas las leyes y regulaciones relevantes que afectan a la administración de edificios, incluyendo leyes de propiedad, seguridad, salud ocupacional, protección ambiental, etc.", Icon: IconLegal },
    { title: "Ética empresarial", text: "Fomentamos una cultura empresarial ética, que promueva la honestidad, la integridad y el comportamiento responsable en todas las operaciones y relaciones comerciales.", Icon: IconEthics },
    { title: "Prevención de conflictos de interés", text: "Establecemos como política y procedimiento para identificar, divulgar y manejar adecuadamente cualquier conflicto de interés que pueda surgir entre los intereses personales y los intereses de la empresa, comunicación mediante correo electrónico, previa a las contrataciones.", Icon: IconPrevention },
    { title: "Lucha contra la corrupción y el soborno", text: "Nos comprometemos firmemente a abstenernos de prácticas corruptas, sobornos o cualquier conducta antiética en las relaciones comerciales.", Icon: IconCorruption },
    { title: "Protección de datos y privacidad", text: "Tenemos el deber de proteger la información confidencial de los clientes, empleados y otras partes interesadas, cumpliendo con las leyes de privacidad y protección de datos correspondientes.", Icon: IconProtect },
    { title: "Transparencia Financiera", text: "Mantenemos la transparencia de los registros financieros y compartimos dicha información de forma ética y adecuada según sea necesario.", Icon: IconFinance },
    { title: "Capacitación y concientización", text: "Proporcionamos capacitación regular a los empleados sobre las políticas de compliance de la empresa, así como también crear conciencia sobre la importancia del cumplimiento ético y legal en todas las actividades laborales.", Icon: IconCapacitate },
    { title: "Monitoreo y cumplimiento", text: "Implementamos mecanismos de monitoreo y auditoría para garantizar el cumplimiento continuo de las políticas de compliance y la detección temprana de cualquier desviación o incumplimiento.", Icon: IconMonitoring },
    { title: "Reporte y respuesta a infracciones", text: "Establecemos procedimientos para reportar y responder ante cualquier infracción o violación de las políticas de compliance, incluyendo la implementación de medidas disciplinarias apropiadas cuando sea necesario.", Icon: IconReport }
  ]

  return (
    <>
      <SubsHeader
        titleBanner="Acerca de Nosotros"
        imageBanner="https://res.cloudinary.com/degbnkdoh/image/upload/v1729898880/quienes_somos-min_pslbmh.jpg"
      />
      <div className="">
        <div className="py-40">
          <div className="grid grid-cols-2 gap-28 items-center 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 max-lg:grid-cols-1">
            <div className="">
              <h1 className="font-extrabold text-primary text-3xl mb-10">Quienes Somos</h1>
              <div className="ml-5 max-2xl:ml-0">
                <p className="text-base text-textBlackp">Con más de 11 años de experiencia en la gestión inmobiliaria, nos especializamos en el desarrollo de procesos transparentes y eficientes para la administración de edificios residenciales y condominios. La calidad y excelencia de nuestros servicios garantizan a los propietarios una gestión integral y satisfactoria.
                </p>
                <p className="mt-8 text-base">
                  En Gestión Vertical, adoptamos <span className="text-secondary font-semibold">un enfoque diferente al de las administradoras tradicionales.</span> Nuestro firme compromiso con el cumplimiento de las normativas legales nos ha permitido ganar la confianza de clientes, entidades reguladoras y organismos de control.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl h-80">
              <img className="w-full h-full object-cover" src="https://res.cloudinary.com/degbnkdoh/image/upload/v1729898880/quienes_somos-min_pslbmh.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tr from-ligthSpan to-lightSecondary h-auto py-40">
          <div className="grid grid-cols-2 gap-28 items-center 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 max-lg:grid-cols-1">
            <div className="overflow-hidden rounded-3xl shadow-2xl h-80">
              <img className="w-full h-full object-cover" src="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895205/cumplimiento_normativo_mlrmbh.jpg" alt="" />
            </div>
            <div className="">
              <h1 className="font-extrabold text-primary text-3xl mb-10">Nuestra <span className="text-secondary underline">Misión</span></h1>
              <div className="ml-5 max-2xl:ml-0">
                <p className="text-smtext-textBlackp">En Gestión Vertical, nos comprometemos a ofrecer un servicio integral en la administración de edificios y condominios, adaptado a las necesidades de cada comunidad. Promovemos el bienestar de los residentes con una gestión eficiente y transparente, cumpliendo normativas para garantizar un entorno seguro y organizado para cada propietario.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="py-40">
          <div className="grid grid-cols-2 gap-28 items-center 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 max-lg:grid-cols-1">
            <div className="">
              <h1 className="font-extrabold text-primary text-3xl mb-10">Nuestra <span className="text-secondary underline">Visión</span></h1>
              <div className="ml-5 max-2xl:ml-0">
                <p className="text-smtext-textBlackp">Consolidarnos como unas de las empresas líderes en la administración de Juntas de Propietarios, destacando por nuestra innovación y compromiso con la excelencia. Buscamos transformar la gestión de comunidades con soluciones integrales que anticipen las necesidades de propietarios y residentes, mejorando así la experiencia de vida en cada edificio bajo nuestra administración y creando relaciones de confianza duraderas con nuestros clientes.</p></div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl h-80">
              <img className="w-full h-full object-cover" src="https://res.cloudinary.com/degbnkdoh/image/upload/v1729895206/close-up-businessman-businesswoman-holding-documents-standing-front-building_ya20uy.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-tr from-ligthSpan to-lightSecondary h-auto text-center py-40">
        <div className="2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5">
          <h1 className="font-extrabold text-primary text-3xl pb-20">Políticas de <span className="text-secondary underline">Cumplimiento</span></h1>
          <ul className="list-disc text-left text-textBlackp max-lg:mx-5 max">
            {complianceLegal.map((cump, index) => (
              <li key={index} className="flex items-start gap-4 py-4 text-textBlackp">
                <div className="p-3 shadow-lg bg-lightSecondary rounded-xl border border-secondary">
                  <cump.Icon size={30} stroke="#246AF3" />
                </div>
                <div className="">
                  <h2 className="font-semibold">{cump.title}</h2>
                  <p className="text-sm my-1">{cump.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
