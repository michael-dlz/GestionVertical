
import Introduction from "../components/Home/Introduction"
import { Services } from "../components/Home/Services"
import { Benefits } from "../components/Home/Benefits"
import { Reviews } from "../components/Home/Reviews"
import Header from "../components/Home/Header"

export default function Home() {
    return (
        <>
            <Header />
            <Introduction />
            <Services />
            <Benefits />
            <Reviews />
        </>
    )
}
