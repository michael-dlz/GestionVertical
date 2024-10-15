import Form from "../Form"

export default function Header() {
    return (

        <div className="w-full h-auto">
            <div className="flex relative flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src="https://videos.pexels.com/video-files/15809953/15809953-uhd_2560_1440_25fps.mp4" autoPlay muted loop></video>
                <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:mx-10 max-w-7xl lg:w-full mx-auto py-40 gap-16 ">
                    <Form />
                    <div className="flex flex-col justify-center text-white gap-5">
                        <h2 className="font-bold text-5xl">GESTIÓN VERTICAL</h2>
                        <h3 className="text-s">Administración de Edificios</h3>
                        <p className="font-semibold text-xl italic">!HAGAMOS DE LA CONVIVENCIA, UN PLACER!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
