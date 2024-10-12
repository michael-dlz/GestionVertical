export default function Form() {
    return (
        <>

            <form className="w-[36rem] h-auto bg-white text-s p-10 rounded-xl shadow-2xl">
                <div className="">
                    <label className="text-xs font-bold" htmlFor="">NOMBRE Y APELLIDO</label>
                    <div className="">
                        <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Luis Sandoval" />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-xs font-bold" htmlFor="">CORREO ELECTRÓNICO</label>
                    <div className="">
                        <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="email" placeholder="luissandoval@gmail.com" />
                    </div>
                </div>
                <div className="mt-3 flex justify-between gap-5">
                    <div className="w-full">
                        <label className="text-xs font-bold" htmlFor="">TELÉFONO</label>
                        <div className="">
                            <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="phone" placeholder="+51 998 223 519" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-xs font-bold" htmlFor="">DISTRITO</label>
                        <div className="">
                            <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Santiago de Surco" />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-xs font-bold" htmlFor="">EMPRESA ADMINISTRADORA ACTUAL</label>
                    <div className="">
                        <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="text" placeholder="Empresa X Administración" />
                    </div>
                </div>
                <div className="mt-3 flex justify-between gap-5">
                    <div className="w-full">
                        <label className="text-xs font-bold" htmlFor="">ANTIGUEDAD</label>
                        <div className="">
                            <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="number" min={1} placeholder="5 años" />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-xs font-bold" htmlFor="">NÚMERO DE DEPARTAMENTOS</label>
                        <div className="">
                            <input className="py-4 text-xs my-2 px-3 rounded-lg bg-lightGray w-full" type="number" min={1} placeholder="25" />
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <button className="w-full bg-secondary text-white px-7 py-5 rounded-lg text-l hover:shadow-2xl">Cotizar Ahora</button>
                </div>
            </form>
        </>
    )
}
