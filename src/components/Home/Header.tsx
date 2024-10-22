import Form from "../Form"
import BackgroundGV from "../../../public/bg-gv.png"

export default function Header() {
    return (

        <div className="h-auto w-full">
            <div className="flex relative flex-col justify-center w-full h-full py-10">
                <img className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src={BackgroundGV}></img>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-5 2xl:max-w-6xl max-w-5xl lg:w-full mx-auto gap-20 ">
                    <div className="flex flex-col justify-center text-white gap-3">
                        <h1 className="text-sm">Administración de Propiedades</h1>
                        <h2 className="font-extrabold text-5xl">Tu propiedad, nuestra prioridad. Gestión eficaz y transparente para tu bienestar.</h2>
                        <p className="font-semibold text-lg italic">!HAGAMOS DE LA CONVIVENCIA, UN PLACER!</p>
                        <div className="my-5">
                            <a href="/#Servicios" className="bg-secondary text-white px-7 py-4 rounded-sm text-sm max-2xl:text-xs gap-2 hover:shadow-2xl">Adquiere el Servicio Ideal para TI.</a>
                        </div>
                        <div className="">
                            <h3 className="font-bold text-3xl">+ 1000</h3>
                            <p className="text-base">Clientes Felices</p>
                        </div>
                    </div>
                    <Form padding={"p-10"} />
                </div>
            </div>
        </div>
    )
}

/* 

        <div className="h-auto w-full">
            <div className="flex relative flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="https://videos.pexels.com/video-files/15809953/15809953-uhd_2560_1440_25fps.mp4" autoPlay muted loop></video>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-5 2xl:max-w-6xl max-w-5xl lg:w-full mx-auto py-40 gap-20 ">
                    <Form padding={"p-10"} />
                    <div className="flex flex-col justify-center text-white gap-3">
                        <h1 className="text-sm">Administración de Propiedades</h1>
                        <h2 className="font-extrabold text-5xl">Tu propiedad, nuestra prioridad. Gestión eficaz y Transparente para tu Bienestar.</h2>
                        <p className="font-semibold text-lg italic">!HAGAMOS DE LA CONVIVENCIA, UN PLACER!</p>
                        <div className="my-5">
                            <a href="/#Servicios" className="bg-secondary text-white px-7 py-4 rounded-sm text-sm max-2xl:text-xs gap-2 hover:shadow-2xl">Adquiere el Servicio Ideal para TI.</a>
                        </div>
                        <div className="">
                            <h3 className="font-bold text-3xl">+ 1000</h3>
                            <p className="text-base">Clientes Felices</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

*/