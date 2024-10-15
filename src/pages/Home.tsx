
import Introduction from "../components/Home/Introduction"
import { Services } from "../components/Home/Services"
import { Benefits } from "../components/Home/Benefits"
import { Reviews } from "../components/Home/Reviews"
import Header from "../components/Home/Header"
import Contact from "../components/Home/Contact"

export default function Home() {
    return (
        <>
            <Header />
            <Introduction />
            <Services />
            <Benefits />
            <Reviews />
            <Contact />
        </>
    )
}
