interface SubsHeaderProps {
    imageBanner: string;
    titleBanner: string;
}

export default function SubsHeader({ imageBanner, titleBanner }: SubsHeaderProps) {
    return (
        <div 
            className="w-full h-[70vh] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${imageBanner})` }}
        >
            <div className="flex flex-col w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <div className="h-full flex items-end pb-40 w-widthPerson text-left m-auto">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl underline">{titleBanner}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
