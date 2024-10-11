import SubNavBar from "./components/SubNavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <SubNavBar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
