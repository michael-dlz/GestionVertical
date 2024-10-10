import NavBar from "../NavBar"

export default function Header() {
    return (
        <>
            <div className="w-full h-[90vh] bg-banner-home bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                    <NavBar />
                    <div className="flex w-[1570px] m-auto pb-20 gap-16">
                        <form className="w-[36rem] h-auto bg-white text-s p-10 rounded-xl">
                            <div className="">
                                <label className="text-xs font-bold" htmlFor="">NOMBRE Y APELLIDO</label>
                                <div className="">
                                    <input className="py-5 my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Luis Sandoval" />
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-xs font-bold" htmlFor="">CORREO ELECTRÓNICO</label>
                                <div className="">
                                    <input className="py-5 my-2 px-3 rounded-lg bg-lightGray w-full" type="email" placeholder="luissandoval@gmail.com" />
                                </div>
                            </div>
                            <div className="mt-3 flex justify-between gap-5">
                                <div className="w-full">
                                    <label className="text-xs font-bold" htmlFor="">TELÉFONO</label>
                                    <div className="">
                                        <input className="py-5 my-2 px-3 rounded-lg bg-lightGray w-full" type="phone" placeholder="+51 998 223 519" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className="text-xs font-bold" htmlFor="">DISTRITO</label>
                                    <div className="">
                                        <input className="py-5 my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Santiago de Surco" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 w-full">
                                <button className="w-full bg-secondary text-white px-7 py-5 rounded-lg text-l">Cotizar Ahora</button>
                            </div>
                        </form>
                        <div className="flex flex-col justify-center text-white gap-3">
                            <h2 className="font-bold text-5xl">GESTIÓN VERTICAL</h2>
                            <h3 className="text-s">Administración de Edificios</h3>
                            <p className="font-semibold text-xl">!HACEMOS DE LA CONVIVENCIA, UN PLACER!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}