export default function NavBar() {
    return (
        <>
            <div className="text-white">
                <div className="flex justify-between w-[1570px] m-auto py-12">
                    <div className="flex gap-16 items-center font-semibold">
                        <h2 className="font-bold text-2xl">LOGO</h2>
                        <ul className="flex gap-12 text-sm">
                            <a href=""><li>INICIO</li></a>
                            <a href=""><li>NOSOTROS</li></a>
                            <a href=""><li>SERVICIOS</li></a>
                            <a href=""><li>TRABAJA CON NOSOTROS</li></a>
                        </ul>
                    </div>
                    <a href="" className="bg-secondary text-white px-7 py-4 rounded-lg text-l">Contactános</a>
                </div>
            </div>
        </>
    )
}