import NavBar from "./NavBar"

export default function SubsHeader() {
    return (
        <div className="w-full h-[70vh] bg-banner-about bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <NavBar />
                <div className="h-full flex items-end pb-28 max-w-[1570px] w-full text-left m-auto">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl underline">Acerca de Nosotros</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}