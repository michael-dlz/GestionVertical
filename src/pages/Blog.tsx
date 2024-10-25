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
                imageBanner="https://res.cloudinary.com/degbnkdoh/image/upload/v1729898880/quienes_somos-min_pslbmh.jpg"
            />
            <div className="bg-lightGray">
                <div className="2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 py-40">
                    <h1 className="text-primary font-extrabold text-3xl text-center">Explora todos <span className="text-secondary underline">nuestros artículos</span></h1>
                    <h2 className="text-textBlackp text-lg pt-3 text-center pb-20">Recursos, consejos e información para nuestros usuarios</h2>
                    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
                        <ListBlogs />
                    </div>
                </div>
            </div >
        </>
    )
}
