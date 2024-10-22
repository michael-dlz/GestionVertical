import Form from "../Form"

export default function Header() {
    return (

        <div className="w-full h-auto">
            <div className="flex relative flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="https://videos.pexels.com/video-files/15809953/15809953-uhd_2560_1440_25fps.mp4" autoPlay muted loop></video>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-5 2xl:max-w-6xl max-w-5xl lg:w-full mx-auto py-40 gap-20 ">
                    <Form />
                    <div className="flex flex-col justify-center text-white gap-3">
                        <h1 className="text-sm">Administración de Propiedades</h1>
                        <h2 className="font-bold text-5xl">Tu propiedad, nuestra prioridad. Gestión eficaz y Transparente para tu Bienestar.</h2>
                        <p className="font-semibold text-lg italic">!HAGAMOS DE LA CONVIVENCIA, UN PLACER!</p>
                        <div className="my-5">
                            <a href="/#Servicios" className="bg-secondary text-white px-7 py-4 rounded-lg text-sm max-2xl:text-xs gap-2 hover:shadow-2xl">Adquiere el Servicio Ideal para TI.</a>
                        </div>
                        <div className="">
                            <h3 className="font-bold text-3xl">+ 1000</h3>
                            <p className="text-base">Clientes Felices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
