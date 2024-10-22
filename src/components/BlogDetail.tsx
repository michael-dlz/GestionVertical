import Form from "./Form";
import SubsHeader from "./SubsHeader";
import { dbblogs } from "../data/Blogs";
import { useParams } from "react-router-dom";
import { formatTitleForUrl } from "../pages/Blog";
import ListBlogs from "./ListBlogs";
import { IconFacebook2, IconInstagram2, IconLinkedin2, IconWhatsApp2 } from "../Icons/Icons";


export default function BlogDetail() {

  const { title } = useParams();
  // Busca el blog usando el título
  const blog = dbblogs.find(item => formatTitleForUrl(item.firstTitle) === title);

  if (!blog) {
    return <div>Blog no encontrado</div>
  }

  return (
    <>
      <SubsHeader
        titleBanner="Blog de Noticias"
        imageBanner="https://img.freepik.com/foto-gratis/equipo-trabajando-juntos-proyecto_23-2149325409.jpg?t=st=1728666926~exp=1728670526~hmac=cc75ac9e5dce4ec18529ba4a5c46f846166f1bf7cbda007339c826f4cb21242d&w=1380"
      />
      <div className="flex items-start 2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 mt-48 gap-16 max-lg:flex-col">
        <div className="w-3/5 max-lg:w-full">
          <div className="">
            <h1 className="font-bold text-2xl max-2xl:text-xl text-primary">{blog.firstTitle}</h1>
            <div className="flex gap-1 text-xs py-6">
              <p className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-sm">{blog.date}</p>
              {blog.category.map((item, index) => (
                <p key={index} className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-sm border">{item.text}</p>
              ))}
            </div>
            <div className="pb-10 overflow-hidden">
              <img className="w-full h-full object-cover" src={blog.firstImage} alt="" />
            </div>
            <div className="">
              <h2 className="font-bold text-2xl max-2xl:text-xl">Indice</h2>
              <ul className="list-disc ml-10 font-light pt-5 text-secondary cursor-pointer">
                <li><a href={`#${blog.secondTitle}`}>{blog.secondTitle}</a></li>
                <li><a href={`#${blog.thirstTitle}`}>{blog.thirstTitle}</a></li>
                <li><a href={`#${blog.fourthTitle}`}>{blog.fourthTitle}</a></li>
                <li><a href={`#${blog.fifthTitle}`}>{blog.fifthTitle}</a></li>
                <li><a href={`#${blog.sixthTitle}`}>{blog.sixthTitle}</a></li>
                <li><a href={`#${blog.seventhTitle}`}>{blog.seventhTitle}</a></li>
                <li><a href="#Conclusión">Conclusión</a></li>
              </ul>
            </div>
            <div className="py-5 font-light text-md max-2xl:text-sm">
              <p className="">{blog.introduction}</p>
            </div>
            <div className="">
              <h2 id={blog.secondTitle} className="font-bold text-2xl max-2xl:text-xl text-primary">{blog.secondTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.secondDescription}</p>
              <ul className="list-disc ml-10 font-light">
                {blog.secondList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.secondDescription_2}</p>
            </div>
            <div className="">
              <h2 id={blog.thirstTitle} className="font-bold text-2xl max-2xl:text-xl text-primary">{blog.thirstTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.thirstDescription}</p>
              <ul className="list-disc ml-10 font-light">
                {blog.thirstList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 id={blog.fourthTitle} className="font-bold text-2xl max-2xl:text-xl pt-5 text-primary">{blog.fourthTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.fourthDescription}</p>
              <ul className="list-disc ml-10 font-light">
                {blog.fourthList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 id={blog.fifthTitle} className="font-bold text-2xl max-2xl:text-xl pt-5 text-primary">{blog.fifthTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.fifthDescription}</p>
              <ul className="list-disc ml-10 font-light">
                {blog.fifthList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 id={blog.sixthTitle} className="font-bold text-2xl max-2xl:text-xl pt-5 text-primary">{blog.sixthTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.sixthDescription}</p>
            </div>
            <div className="">
              <h2 id={blog.seventhTitle} className="font-bold text-2xl max-2xl:text-xl pt-5 text-primary">{blog.seventhTitle}</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.seventhDescription}</p>
            </div>
            <div className="">
              <h2 id="Conclusión" className="font-bold text-2xl max-2xl:text-xl pt-5 text-primary">Conclusión:</h2>
              <p className="py-5 font-light text-md max-2xl:text-sm">{blog.conclution}</p>
            </div>
            <div className="flex gap-8 items-center border-t-4 py-8">
              <p className="font-semibold text-lg">Compartir con:</p>
              <div className="flex gap-4 items-center">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(blog.firstTitle)}`)}&quote=${encodeURIComponent(blog.firstTitle)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconFacebook2 size={20} />
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(blog.firstTitle)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin2 size={20} />
                </a>

                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${blog.firstTitle} - ${`https://gestion-vertical.vercel.app/blog/${formatTitleForUrl(blog.firstTitle)}`}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp2 size={25}/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky w-2/5 top-40">
          <Form padding={"p-0"} />
        </div>
      </div>
      <div className="2xl:max-w-6xl max-w-5xl mx-auto max-lg:mx-5 pt-10 pb-40 gap-16">
        <h2 className={`$"" pb-10`}>Enterate de las últimas noticias:</h2>
        <div className="grid grid-cols-3 gap-5">

          <ListBlogs />

        </div>
      </div>
    </>
  )
}
