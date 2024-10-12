import Form from "../Form"

export default function Header() {
    return (

        <div className="w-full h-auto bg-banner-home bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <div className="flex w-widthPerson m-auto py-40 gap-16">
                    <Form />
                    <div className="flex flex-col justify-center text-white gap-5">
                        <h2 className="font-bold text-5xl">GESTIÓN VERTICAL</h2>
                        <h3 className="text-s">Administración de Edificios</h3>
                        <p className="font-semibold text-xl italic">!HACEMOS DE LA CONVIVENCIA, UN PLACER!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
