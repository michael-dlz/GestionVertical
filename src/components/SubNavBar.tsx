import { IconFacebook, IconInstagram, IconLinkedin, IconTiktok } from "../Icons/Icons"
import { email, phone } from "../data/ContactInfo"

export default function SubNavBar() {

    return (
        <>
            <nav className="bg-lightGray font-titilium sticky top-0 z-10 ">
                <div className="max-w-[1570px] m-auto py-2 text-xs flex justify-between items-center">
                    <div className="flex flex gap-3">
                        <IconFacebook
                            stroke={"#000"}
                        />
                        <IconInstagram
                            stroke={"#000"}
                        />
                        <IconTiktok
                            stroke={"#000"}
                        />
                        <IconLinkedin
                            stroke={"#000"}
                        />
                    </div>
                    <div className="flex gap-4">
                        <p>{email}</p>
                        <p>{phone}</p>
                    </div>
                </div>
            </nav >
        </>
    )
}