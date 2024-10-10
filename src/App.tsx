import SubNavBar from "./components/SubNavBar"
import Header from "./components/Home/Header"
import Introduction from "./components/Home/Introduction"
import { Services } from "./components/Home/Services"
import { Benefits } from "./components/Home/Benefits"
import { Reviews } from "./components/Home/Reviews"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <SubNavBar />
      <Header />
      <Introduction />
      <Services />
      <Benefits />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
