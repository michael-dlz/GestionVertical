import { Link } from "react-router-dom"
import { dbblogs } from "../data/Blogs"
import { formatTitleForUrl } from "../pages/Blog"

export default function ListBlogs() {
    return (
        <>
            {dbblogs.map((item, index) => (

                <Link
                    to={`/blog/${formatTitleForUrl(item.firstTitle)}`} // Convierte el título para la URL
                    key={index}
                    className="flex flex-col gap-4 bg-white hover:shadow-2xl group overflow-hidden border"
                >
                    <div className="overflow-hidden">
                        <img className="transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={item.firstImage} alt="" />
                    </div>
                    <div className="p-4">
                        <div className="flex flex-col gap-2">
                            <p className="text-xs text-textBlackp">{item.date}</p>
                            <div className="flex gap-2 flex-wrap">
                                {item.category.map((item, index) => (
                                    <p key={index} className="text-secondary w-auto text-xs flex items-center rounded-md">{item.text}</p>
                                ))}
                            </div>
                        </div>
                        <h2 className="font-semibold py-3">{item.firstTitle}</h2>
                    </div>
                </Link>
            ))}
        </>
    )
}
