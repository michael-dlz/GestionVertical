interface SubsHeaderProps {
    imageBanner: string;
    titleBanner: string;
}

export default function SubsHeader({ imageBanner, titleBanner }: SubsHeaderProps) {
    return (
        <div 
            className="w-full h-80 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${imageBanner})` }}
        >
            <div className="w-full h-full bg-gradient-to-r from-black/60 to-black/60">
                <div className="h-full grid items-end pb-20 2xl:max-w-6xl max-w-5xl  max-lg:mx-5 text-left m-auto">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl max-2xl:text-2xl underline">{titleBanner}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
