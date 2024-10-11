import SubsHeader from "../components/SubsHeader"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function PreferenteService() {
    return (
        <>
            <SubsHeader />
            <div className="py-40 h-auto">
                <div className="max-w-[1570px] mx-auto grid grid-cols-2 items-start gap-28 h-auto">
                    <div className="text-l">
                        <div className="">
                            <h2 className="text-primary font-bold text-3xl">¿Porque Elegir el Servicio Preferente?</h2>
                            <p className="py-10">El Servicio Básico es ideal para edificios residenciales con pocos departamentos que no cuentan con instalaciones INDECI. Este servicio ofrece una administración efectiva y accesible de la Junta de Propietarios, permitiendo a los residentes disfrutar de una gestión organizada sin preocupaciones. Al elegir esta opción, te beneficiarás de un enfoque personalizado que se adapta a las características específicas de tu comunidad. La flexibilidad en el precio, dependiendo del distrito o zona, asegura que recibirás un servicio de calidad que se ajusta a tu presupuesto. Nuestro compromiso es proporcionar un ambiente de convivencia saludable y satisfactorio para todos los residentes.</p>
                        </div>
                        <div className="">
                            <h2 className="text-primary font-bold text-3xl">¿Qué Incluye nuestro Servicio?</h2>
                            <div className="py-10">
                                <p>Gestión de la Junta de Propietarios</p>
                                <p>Atención Personalizada</p>
                                <p>Informes Periódicos</p>
                                <p>Cumplimiento Normativo</p>
                                <p>Tarifas Competitivas</p>
                            </div>
                        </div>
                        <div className="">
                            <h2 className="text-primary font-bold text-3xl">Beneficios de Elegir nuestro Servicio</h2>
                            <div className="py-10">
                                <p>Ahorro de Tiempo</p>
                                <p>Mayor Satisfacción de Residentes</p>
                                <p>Administración sin Preocupaciones</p>
                            </div>
                        </div>
                        <button className="border border-secondary text-secondary px-7 py-4 hover:bg-secondary hover:text-white text-left rounded-lg text-l">Contactános para más información</button>
                    </div>
                    <div className="bg-white shadow-2xl h-auto p-20 text-l rounded-3xl grid items-center sticky top-20">
                        <div className="">
                            <h2 className="text-primary font-bold text-lg">ADQUIERE UNA COTIZACIÓN FORMAL</h2>
                            <div className="flex gap-1 text-xs py-6">
                                <span className="bg-spanColor px-6 py-1 rounded-lg">Casas</span>
                                <span className="bg-spanColor px-6 py-1 rounded-lg">Condominios</span>
                            </div>
                            <p className="">Servicio de administración de Junta de Propietarios para edificios residenciales con pocos departamentos que no cuenten con Instalaciones INDECI</p>
                        </div>
                        <div className="">
                            <h2 className="text-primary font-bold text-lg py-6">PRECIO</h2>
                            <div className="pb-10">
                                <p>Entre S/ 60 - S/ 100 por departamento</p>
                                <p>El distrito/zona definirá el precio, máximo 12 departamentos</p>
                            </div>
                            <a className="text-secondary font-semibold" href="">GUIA DE GASTOS COMUNES</a>
                        </div>
                        <button className="bg-secondary w-full text-white px-14 py-8 rounded-lg text-l mt-10">LO QUIERO</button>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <div className="max-w-[1570px] w-full mx-auto h-full">
                    <Swiper
                        slidesPerView={2.5}
                        spaceBetween={30}
                        grabCursor={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay]}
                        className="mySwiper3 w-full grid mb-40"
                    >
                        <SwiperSlide className="bg-primary text-white p-10 flex flex-col justify-center rounded-2xl overflow-hidden shadow-2xl">
                            <h2 className="font-bold text-lg pb-10">NOS ADECUAMOS A TU NECESIDAD</h2>
                            <p className="text-l">Somos un equipo de profesionales especializados en la administración de edificios residenciales, comprometidos con la gestión eficiente de las Juntas de Propietarios y con el cumplimiento de las normativas legales vigentes. Con años de experiencia en el sector, nos dedicamos a proporcionar soluciones personalizadas para cada comunidad, adaptándonos a las particularidades de edificios grandes o pequeños.</p>
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img src="https://img.freepik.com/foto-gratis/vista-aerea-compleja-ciudad_23-2148975282.jpg?t=st=1728674718~exp=1728678318~hmac=a4396c567be450d60dd394add3eb10a21606d7762c082d54800629954dd8d2f4&w=1380" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img src="https://img.freepik.com/foto-gratis/vista-aerea-compleja-paisaje-urbano_23-2148975287.jpg?t=st=1728674727~exp=1728678327~hmac=1f87d82f25c73b6f14ab33348a6fdad0a59a1bf2d18d769ef8f3f2d6f31e0d3f&w=1380" alt="" />
                        </SwiperSlide>
                        <SwiperSlide className="rounded-2xl overflow-hidden">
                            <img src="https://img.freepik.com/fotos-premium/vista-aerea-compleja-paisaje-urbano_23-2148975289.jpg?w=1380" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
