import SubsHeader from "../components/SubsHeader"
import Work from "../components/Work"
import { useState } from "react"

export default function WorkUs() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedWorkTime, setSelectedWorkTime] = useState('');

    // Aquí definimos los trabajos que serán filtrados
    const jobs = [
        {
            titleWork: "Administrador de Edificios",
            descriptionWork: "Estamos buscando un Administrador de Edificios responsable de gestionar las operaciones diarias...",
            categories: ["Administración", "Tiempo Completo"],
            requirements: ["Experiencia en administración de propiedades o edificios.", "Habilidades de liderazgo y comunicación.", "Conocimiento de normativas legales."],
            benefits: ["Sueldo competitivo.", "Capacitación constante.", "Horario flexible."],
        },
        {
            titleWork: "Supervisor de Mantenimiento",
            descriptionWork: "Se necesita un Supervisor de Mantenimiento que garantice el buen estado de las instalaciones...",
            categories: ["Mantenimiento", "Tiempo Completo"],
            requirements: ["Experiencia en mantenimiento de edificios o instalaciones.", "Conocimientos técnicos en electricidad y plomería.", "Capacidad para gestionar equipos."],
            benefits: ["Salario acorde al mercado.", "Bonos por desempeño.", "Oportunidades de crecimiento."],
        },
        {
            titleWork: "Asistente Administrativo",
            descriptionWork: "Buscamos un Asistente Administrativo que apoye en la gestión documental y atención al cliente...",
            categories: ["Administración", "Tiempo Parcial"],
            requirements: ["Conocimientos en herramientas ofimáticas.", "Capacidad de organización y atención al detalle.", "Experiencia en atención al cliente."],
            benefits: ["Horarios flexibles.", "Ambiente de trabajo agradable.", "Capacitación constante."],
        },
        {
            titleWork: "Coordinador de Servicios de Limpieza",
            descriptionWork: "Estamos en búsqueda de un Coordinador de Servicios de Limpieza para gestionar los cronogramas...",
            categories: ["Operaciones", "Tiempo Completo"],
            requirements: ["Experiencia en coordinación de equipos de limpieza.", "Habilidades de organización y planificación.", "Capacidad para trabajar bajo presión."],
            benefits: ["Sueldo competitivo.", "Oportunidades de desarrollo profesional.", "Seguro de salud."],
        },
        {
            titleWork: "Recepcionista",
            descriptionWork: "Se requiere una Recepcionista para la atención al público y manejo de correspondencia...",
            categories: ["Atención al Cliente", "Tiempo Parcial"],
            requirements: ["Excelente trato al cliente.", "Capacidad para gestionar múltiples tareas.", "Conocimientos básicos en administración."],
            benefits: ["Horarios flexibles.", "Ambiente de trabajo estable.", "Posibilidad de ascenso."],
        }
    ];

    // Función para filtrar los trabajos según las categorías seleccionadas
    const filteredJobs = jobs.filter((job) => {
        const matchCategory = selectedCategory ? job.categories.includes(selectedCategory) : true;
        const matchWorkTime = selectedWorkTime ? job.categories.includes(selectedWorkTime) : true;
        return matchCategory && matchWorkTime;
    });

    return (
        <>
            <SubsHeader
                titleBanner="Trabaja con Nosotros"
                imageBanner="https://img.freepik.com/free-photo/co-working-people-working-together_23-2149328285.jpg"
            />
            <div className="py-40 h-auto">
                <div className="2xl:max-w-7xl max-w-5xl mx-auto h-auto max-lg:mx-5">
                    <div className="grid grid-cols-[1fr_2fr] items-start gap-5 h-auto">
                        <div className="bg-white shadow-2xl p-10 rounded-2xl grid items-center h-auto sticky top-40 hover:shadow-lg">
                            <h2 className="text-primary font-bold text-base text-center mb-5">Filtra tu Búsqueda</h2>
                            <select
                                name="category"
                                id="category"
                                className="py-4 text-sm w-full"
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">Categoría de Trabajo (Todos)</option>
                                <option value="Administración">Administración</option>
                                <option value="Operaciones">Operaciones</option>
                                <option value="Mantenimiento">Mantenimiento</option>
                                <option value="Atención al Cliente">Atención al Cliente</option>
                            </select>
                            <select
                                name="workTime"
                                id="workTime"
                                className="py-4 text-sm w-full"
                                onChange={(e) => setSelectedWorkTime(e.target.value)}
                            >
                                <option value="">Horario de Trabajo (Todos)</option>
                                <option value="Tiempo Completo">Tiempo Completo</option>
                                <option value="Tiempo Parcial">Tiempo Parcial</option>
                            </select>
                        </div>

                        <div className="grid gap-5">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job, index) => (
                                    <Work
                                        key={index}
                                        titleWork={job.titleWork}
                                        descriptionWork={job.descriptionWork}
                                        categories={job.categories}
                                        requirements={job.requirements}
                                        benefits={job.benefits}
                                    />
                                ))
                            ) : (
                                <p className="text-primary font-semibold text-base text-center my-10">No se encontraron trabajos con los filtros seleccionados.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}