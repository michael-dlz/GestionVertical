import { email, phone, socials} from "../data/ContactInfo"

export default function SubNavBar() {

    return (
        <>
            <nav className="bg-lightGray font-titilium sticky top-0 z-20 ">
                <div className="w-widthPerson m-auto py-2 text-xs flex justify-between items-center">
                    <div className="flex gap-3">
                        {socials.map((social, index) => (
                            <a key={index} href={social.link}><social.Icon stroke="#000" /></a>
                        ))}
                    </div>
                    <div className="flex gap-4 text-textBlackp">
                        <a href={`mailto:${email}`}>{email}</a>
                        <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                </div>
            </nav >
        </>
    )
}