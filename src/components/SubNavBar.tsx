import { email, phone, socials} from "../data/ContactInfo"
import { IconEmail, IconWhatsApp } from "../Icons/Icons"

export default function SubNavBar() {

    return (
        <>
            <nav className="bg-inputColor text-textBlackp font-titilium sticky top-0 z-20 ">
                <div className="2xl:max-w-7xl max-w-5xl max-lg:mx-5 m-auto py-2 text-xs flex justify-between items-center">
                    <div className="flex gap-3">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link}><social.Icon stroke="#000" /></a>
                        ))}
                    </div>
                    <div className="flex gap-4 font-medium text-xs">
                        <a className="flex gap-1 items-center" href={`mailto:${email}`}><IconEmail stroke="#000" />{email}</a>
                        <a className="flex gap-1 items-center" href={`tel:${phone}`}><IconWhatsApp stroke="#000"/>{phone}</a>
                    </div>
                </div>
            </nav >
        </>
    )
}