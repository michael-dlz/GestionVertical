import SubsHeader from "../components/SubsHeader";
import ListBlogs from "../components/ListBlogs";


export const formatTitleForUrl = (title: string) => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-') // Reemplaza espacios con guiones
        .replace(/[^\w\-]+/g, '') // Elimina caracteres no alfanuméricos
        .replace(/\-\-+/g, '-') // Reemplaza múltiples guiones por uno solo
        .trim(); // Elimina guiones al principio y al final
};

export default function Blog() {

    return (
        <>
            <SubsHeader
                titleBanner="El Blog de Gestión Vertical"
                imageBanner="https://img.freepik.com/foto-gratis/equipo-trabajando-juntos-proyecto_23-2149325409.jpg?t=st=1728666926~exp=1728670526~hmac=cc75ac9e5dce4ec18529ba4a5c46f846166f1bf7cbda007339c826f4cb21242d&w=1380"
            />
            <div className="bg-lightGray">
                <div className="2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 py-40">
                    <h1 className="text-primary font-bold text-3xl max-2xl:text-2xl text-center">Explora todos nuestros artículos</h1>
                    <h2 className="text-textBlackp text-lg pt-3 text-center pb-20">Recursos, consejos e información para nuestros usuarios</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <ListBlogs />
                    </div>
                </div>
            </div >
        </>
    )
}
