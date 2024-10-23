import { useForm, ValidationError } from "@formspree/react"
import { IconCheck, IconQuote } from "../Icons/Icons"
import { useState } from "react"
import { dbDistricts } from "../data/Distritos"
import { Link } from "react-router-dom"
import "../index.css"

interface FormProps{
    padding: string
}

export default function Form({padding} : FormProps) {

    const [selectedDistrict, setSelectedDistrict] = useState<string>("");
    const [selectedAntiguedad, setSelectedAntiguedad] = useState("")

    const handleAntiguedadChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAntiguedad(event.target.value);
    };

    // Generar años desde "Estreno" hasta 30 años o más.
    const antiguedades: string[] = ['Estreno', ...Array.from({ length: 29 }, (_, i) => `${i + 1} Años`), '30 a más Años'];

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrict(event.target.value);
    };

    const [state, handleSubmit] = useForm("movqqvkv")
    if (state.succeeded) {
        return (
            <div className="w-[36rem] h-auto text-s p-10 rounded-xl text-primary text-center flex flex-col items-center">
                <IconCheck
                    size={80}
                    stroke={"#246AF3"}
                />
                <h2 className="text-2xl font-semibold py-5">Enviado Exitosamente</h2>
                <p className="mb-10">¡Muchas gracias, te responderemos lo más pronto posible!</p>
                <Link className="w-full bg-secondary text-white px-7 py-5 rounded-sm text-base hover:shadow-2xl" to="/">Volver a Inicio</Link>
            </div>
        )
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={`w-full h-full bg-white text-s ${padding} rounded-xl`}>
                <h1 className="mb-7 text-lg font-bold text-secondary text-center">¡No esperes más! Mejora tu gestión hoy mismo.</h1>
                <div className="">
                    <label className="text-xs font-semibold" htmlFor="name">Nombre y Apellido</label>
                    <div className="">
                        <input required id="name" name="Nombre y Apellido" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="text" placeholder="Luis Sandoval" />
                        <ValidationError prefix="Name" field="Nombre y Apellido" errors={state.errors} />
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-xs font-semibold" htmlFor="email">Correo Electrónico</label>
                    <div className="">
                        <input required id="email" name="Correo Electrónico" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="email" placeholder="luissandoval@gmail.com" />
                        <ValidationError prefix="Email" field="Correo Electrónico" errors={state.errors} />
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-2 justify-between gap-5 max-lg:grid-cols-1">
                    <div className="w-full">
                        <label className="text-xs font-semibold" htmlFor="phone">Teléfono</label>
                        <div className="">
                            <input required id="phone" name="Número de Teléfono" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="phone" placeholder="+51 998 223 519" />
                            <ValidationError prefix="Phone" field="Número de Teléfono" errors={state.errors} />
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-xs font-semibold" htmlFor="adress">Distrito</label>
                        <div className="">
                            <select
                                required
                                id="district"
                                name="Distrito"
                                value={selectedDistrict}
                                onChange={handleDistrictChange}
                                className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full"
                            >
                                <option value="" disabled>Seleccione un distrito</option>
                                {dbDistricts.map((district, index) => (
                                    <option key={index} value={district.name}>
                                        {district.name}
                                    </option>
                                ))}
                            </select>
                            <ValidationError prefix="Adress" field="Distrito" errors={state.errors} />
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <label className="text-xs font-semibold" htmlFor="currentadmin">Empresa Admistradora Actual <span className="text-xs text-zinc-600 font-light">(dejar en blanco sino cuenta con una)</span></label>
                    <div className="">
                        <input id="currentadmin" name="Empresa Administradora Actual" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="text" placeholder="Empresa X Administración" />
                        <ValidationError prefix="Currentadmin" field="Empresa Administradora Actual" errors={state.errors} />
                    </div>
                </div>
                <div className="mt-3 grid grid-cols-2 max-lg:grid-cols-1 justify-between gap-5">
                    <div className="w-full">
                        <label className="text-xs font-semibold" htmlFor="antique">Antiguedad</label>
                        <div className="">
                            <select
                                required
                                id="antique"
                                name="Antiguedad"
                                value={selectedAntiguedad}
                                onChange={handleAntiguedadChange}
                                className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full">
                                <option value="" disabled>Seleccione la antigüedad</option>
                                {antiguedades.map((antiguedad, index) => (
                                    <option key={index} value={antiguedad}>{antiguedad}</option>
                                ))}
                            </select>
                            <ValidationError prefix="Antique" field="Antiguedad" errors={state.errors} />
                            {/*
                            <input required id="antique" name="Antiguedad" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="number" min={1} placeholder="5 años" />
                            <ValidationError prefix="Antique" field="Antiguedad" errors={state.errors} /> */}
                        </div>
                    </div>
                    <div className="w-full">
                        <label className="text-xs font-semibold" htmlFor="departaments">Número de Departamentos</label>
                        <div className="">
                            <input required id="departaments" name="Número de Departamentos" className="py-3 text-xs my-2 px-3 rounded-sm bg-inputColor w-full" type="number" min={1} placeholder="25" />
                            <ValidationError prefix="Departaments" field="Número de Departamentos" errors={state.errors} />
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <button type="submit" disabled={state.submitting} className="w-full bg-secondary text-white px-7 py-5 rounded-sm text-sm cursor-pointer flex justify-center items-center gap-2 hover:shadow-2xl">
                        <IconQuote size={20} />Cotiza Ahora</button>
                </div>
            </form>
        </>
    )
}
