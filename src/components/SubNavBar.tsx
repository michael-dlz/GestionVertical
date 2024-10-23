import { email, phone, socials } from "../data/ContactInfo"
import { IconEmail, IconWhatsApp } from "../Icons/Icons"

export default function SubNavBar() {

    return (
        <>
            <nav className="bg-gradient-to-l from-ligthSpan to-lightSecondary text-black font-titilium sticky top-0 z-20 ">
                <div className="2xl:max-w-6xl max-w-5xl max-lg:mx-5 m-auto py-2 text-xs flex justify-between items-center max-lg:items-start max-lg:gap-3">
                    <div className="flex gap-3 items-center max-lg:gap-1">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link}><social.Icon stroke="#000" size={20} /></a>
                        ))}
                    </div>
                    <div className="flex gap-4 font-semibold">
                        <a className="flex gap-1 items-center" href={`mailto:${email}`}><IconEmail stroke="#000" size={20} />{email}</a>
                        <a className="flex gap-1 items-center" href={`tel:${phone}`}><IconWhatsApp stroke="#000" size={20} />{phone}</a>
                    </div>
                </div>
            </nav >
        </>
    )
}