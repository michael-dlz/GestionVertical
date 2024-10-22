
import { IconFacebook2, IconLinkedin2, IconWhatsApp2 } from "../Icons/Icons";
import { formatTitleForUrl } from "../pages/Blog";
import { TypeBlog } from "../types";

interface sharedProps{
    dbblogs: TypeBlog;
}

export default function SharedSocials({dbblogs} : sharedProps) {
    
    return (
        <>
            <div className="flex gap-8 items-center border-t-4 py-8">
                <p className="font-semibold text-lg">Compartir con:</p>
                <div className="flex gap-4 items-center">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(dbblogs.firstTitle)}`)}&quote=${encodeURIComponent(dbblogs.firstTitle)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconFacebook2 size={30} />
                    </a>

                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(dbblogs.firstTitle)}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconLinkedin2 size={30} />
                    </a>

                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${dbblogs.firstTitle} - ${`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(dbblogs.firstTitle)}`}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconWhatsApp2 size={35} />
                    </a>
                </div>
            </div>
        </>
    )
}
