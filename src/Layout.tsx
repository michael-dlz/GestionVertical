import SubNavBar from "./components/SubNavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Layout() {
    return (
        <>
        
            <SubNavBar />
            <div>
                <NavBar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
            
        </>
    )
}
