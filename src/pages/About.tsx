import SubsHeader from "../components/SubsHeader"

export default function About() {
  return (
    <>
      <SubsHeader />
      <div className="pt-40">
        <div className="">
          <div className="flex gap-28 items-center pb-40 max-w-[1570px] mx-auto">
            <div className="flex-1">
              <h2 className="font-bold text-primary text-3xl mb-10">Quienes Somos</h2>
              <p className="text-l">Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños. Nuestro enfoque está en crear un entorno armónico y funcional, donde los residentes puedan disfrutar de una convivencia organizada, segura y libre de preocupaciones.</p>
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl shadow-2xl h-96">
              <img src="https://img.freepik.com/foto-gratis/equipo-trabajando-juntos-proyecto_23-2149325415.jpg?t=st=1728667408~exp=1728671008~hmac=7670ea243aabc6b8f9f72661d6f17ec28fea7927eeb1432094d08cfbfc4361e8&w=1380" alt="" />
            </div>
          </div>
        </div>

        <div className="bg-lightGray p-40">
          <div className="flex gap-28 items-center max-w-[1570px] mx-auto">
            <div className="flex-1 overflow-hidden rounded-3xl shadow-2xl h-96">
              <img src="https://img.freepik.com/fotos-premium/socios-poniendo-sus-punos-juntos-encima-mesa-cosas-trabajo_603656-2186.jpg?w=1380" alt="" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-primary text-3xl mb-10">Nuestra <span className="text-secondary underline">Misión</span></h2>
              <p className="text-l">Nuestra misión es ofrecer un servicio integral en la administración de edificios residenciales, enfocado en satisfacer las necesidades particulares de cada comunidad. Nos esforzamos por garantizar una gestión eficiente, promoviendo la armonía y el bienestar de los residentes a través de un manejo transparente y responsable. Al asegurar el cumplimiento de todas las normativas y regulaciones vigentes, trabajamos para mejorar la calidad de vida de las personas y fomentar un entorno seguro y organizado en cada propiedad que gestionamos.</p>
            </div>
          </div>
        </div>


        <div className="pt-40">
          <div className="flex gap-28 items-center pb-40 max-w-[1570px] mx-auto">
            <div className="flex-1">
              <h2 className="font-bold text-primary text-3xl mb-10">Nuestra <span className="text-secondary underline">Visión</span></h2>
              <p className="text-l">Aspiramos a ser la empresa líder y referente en el sector de administración de edificios residenciales, destacándonos por nuestra innovación, adaptabilidad y compromiso con la excelencia. Nuestra visión es transformar la manera en que se gestionan las comunidades, ofreciendo soluciones inteligentes y sostenibles que se anticipen a las necesidades futuras de los propietarios y residentes. Queremos ser reconocidos por mejorar continuamente la experiencia de vida en cada edificio bajo nuestra administración, creando relaciones de confianza duraderas con nuestros clientes.</p>
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl shadow-2xl h-96">
              <img src="https://img.freepik.com/foto-gratis/objetivos-exito-estrategia-negocio_1421-33.jpg?t=st=1728668602~exp=1728672202~hmac=4e6bd40c1ed42b6310b7a9576283a8d019f5686df83d30026cd4be347df31c27&w=1380" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-lightGray text-center py-40">
        <div className="w-[1570px] mx-auto">
          <h2 className="font-bold text-primary text-3xl mb-10">Política de <span className="text-secondary underline">Cumplimiento</span></h2>
          <ul className="list-disc text-left">
            <li><b>Cumplimiento legal:</b> Compromiso de cumplir con todas las leyes y regulacionesrelevantes que afectan a la administración de edificios, incluyendo leyes de propiedad,seguridad, salud ocupacional, protección ambiental, etc.</li>
            <li><b>Ética empresarial:</b> Fomento de una cultura empresarial ética, que promueva lahonestidad, la integridad y el comportamiento responsable en todas las operaciones yrelaciones comerciales.</li>
            <li><b>Prevención de conflictos de interés:</b> Establecemos comopolítica yprocedimiento paraidentificar, divulgar y manejar adecuadamente cualquier conflicto de interés que puedasurgir entre los intereses personales y los intereses de la empresa, comunicaciónmediante correo electrónico, previa a las contrataciones.</li>
            <li><b>Lucha contra la corrupción y el soborno:</b> Compromiso de no participar en prácticascorruptas, sobornos o cualquier otra forma de conducta antiética en las relaciones comerciales.</li>
            <li><b>Protección de datos y privacidad:</b> Compromiso de proteger la información confidencialde los clientes, empleados y otras partes interesadas, cumpliendo con las leyes deprivacidad y protección de datos correspondientes.</li>
            <li><b>Transparencia financiera:</b> Mantenimiento de registros financieros precisos y transparentes, y divulgación adecuada de información financiera según sea necesario.</li>
            <li><b>Capacitación y concientización:</b> Proporcionar capacitación regular a los empleadossobre las políticas de compliance de la empresa, así como también crear conciencia sobrela importancia del cumplimiento ético y legal en todas las actividades laborales.</li>
            <li><b>Monitoreo y cumplimiento:</b> Establecimiento de mecanismos de monitoreo y auditoríapara garantizar el cumplimiento continuo de las políticas de compliance y laidentificación temprana de cualquier desviación o incumplimiento.</li>
            <li><b>Reporte y respuesta a infracciones:</b> Establecimiento de procedimientos para reportar yresponder a cualquier infracción o violación de las políticas de compliance, incluyendo laimplementación de medidas disciplinarias apropiadas cuando sea necesario.</li>
          </ul>
        </div>
      </div>
    </>
  )
}
