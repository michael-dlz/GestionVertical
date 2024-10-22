import Form from "./Form";
import SubsHeader from "./SubsHeader";
import type { TypeBlog } from "../types";


const styleTitle = "text-primary font-bold text-3xl max-2xl:text-2xl"
const styleParaphrase = "text-textBlackp py-8 text-base max-2xl:text-sm"
const styleList = "flex flex-col gap-2 list-disc ml-10 text-textBlackp text-base max-2xl:text-sm pb-8"

interface BlogProps {
  dbblogs: TypeBlog
}

export default function BlogDetail({ dbblogs } : BlogProps) {

  const { 
    firstTitle,
    firstImage,
    introduction,
    secondDescription,
    secondDescription_2,
    secondList,
    secondTitle,
    thirstDescription,
    thirstList,
    thirstTitle,
    fourthDescription,
    fourthList,
    fourthTitle,
    fifthDescription,
    fifthList,
    fifthTitle,
    sixthDescription,
    sixthTitle,
    seventhDescription,
    seventhTitle,
    conclution } = dbblogs

  return (
    <>
      <SubsHeader
        titleBanner="Blog de Noticias"
        imageBanner="https://img.freepik.com/foto-gratis/equipo-trabajando-juntos-proyecto_23-2149325409.jpg?t=st=1728666926~exp=1728670526~hmac=cc75ac9e5dce4ec18529ba4a5c46f846166f1bf7cbda007339c826f4cb21242d&w=1380"
      />
      <div className="flex items-start 2xl:max-w-[70rem] max-w-5xl mx-auto max-lg:mx-5 mt-48 gap-16 max-lg:flex-col">
        <div className="w-1/2 max-lg:w-full">
          <div className="">
            <h1 className={styleTitle}>{firstTitle}</h1>
            <div className="flex gap-1 text-xs py-6">
              <p className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">Administración</p>
              <p className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">21 de Octubre, 2024</p>
              <p className="bg-lightSecondary text-secondary w-auto px-6 py-1 rounded-lg border border-secondary">Noticias</p>
            </div>
            <div className="pb-10">
              <img src={firstImage} alt="" />
            </div>
            <div className="">
              <h2 className={styleTitle}>Indice</h2>
            </div>
            <div className="">
              <p className={styleParaphrase}>{introduction}</p>
            </div>
            <div className="">
              <h2 className={styleTitle}>{secondTitle}</h2>
              <p className={styleParaphrase}>{secondDescription}</p>
              <ul className={styleList}>
                {secondList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
              <p className={styleParaphrase}>{secondDescription_2}</p>
            </div>
            <div className="">
              <h2 className={styleTitle}>{thirstTitle}</h2>
              <p className={styleParaphrase}>{thirstDescription}</p>
              <ul className={styleList}>
                {thirstList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className={styleTitle}>{fourthTitle}</h2>
              <p className={styleParaphrase}>{fourthDescription}</p>
              <ul className={styleList}>
                {fourthList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className={styleTitle}>{fifthTitle}</h2>
              <p className={styleParaphrase}>{fifthDescription}</p>
              <ul className={styleList}>
                {fifthList.map((item, index) => (
                  <li key={index}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="">
              <h2 className={styleTitle}>{sixthTitle}</h2>
              <p className={styleParaphrase}>{sixthDescription}</p>
            </div>
            <div className="">
              <h2 className={styleTitle}>{seventhTitle}</h2>
              <p className={styleParaphrase}>{seventhDescription}</p>
            </div>
            <div className="">
              <h2 className={styleTitle}>Conclusión:</h2>
              <p className={styleParaphrase}>{conclution}</p>
            </div>
            <div className="flex gap-8 items-center border-t-4 py-8">
              <p className="font-semibold text-lg">Compartir con:</p>
              <div className="flex gap-4 items-center">
                <img className="w-10" src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?ga=GA1.1.662401299.1729483548&semt=ais_hybrid" alt="" />
                <img className="w-10" src="https://cdn-icons-png.freepik.com/256/5968/5968789.png?ga=GA1.1.662401299.1729483548" alt="" />
                <img className="w-10" src="https://cdn-icons-png.freepik.com/256/5968/5968776.png?ga=GA1.1.662401299.1729483548" alt="" />
                <img className="w-10" src="https://cdn-icons-png.freepik.com/256/5968/5968841.png?ga=GA1.1.662401299.1729483548" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sticky max-lg:w-full top-40">
          <Form />
        </div>
      </div>
      <div className="2xl:max-w-[70rem] max-w-5xl mx-auto max-lg:mx-5 pt-10 pb-40 gap-16">
        <h2 className={`${styleTitle} pb-10`}>Enterate de las últimas noticias:</h2>
        <div className="grid grid-cols-3 gap-5">

{/*
          {dbblogs.map((item, index) => (

            <div key={index} className="">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={item.firstImage} alt="" />
              </div>
              <h2 className="py-5 text-base font-semibold">{item.firstTitle}</h2>
              <button className="text-secondary font-semibold text-lg">Leer más</button>
            </div>
          ))} */}

        </div>
      </div>
    </>
  )
}
