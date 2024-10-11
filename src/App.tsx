import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./Layout"
import PreferenteService from "./pages/PreferenteService"
import PreferenteIndeciService from "./pages/PreferenteIndeciService"
import Presencial from "./pages/Presencial"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="serviciopreferente" element={<PreferenteService />} />
          <Route path="serviciopreferenteindeci" element={<PreferenteIndeciService />} />
          <Route path="serviciopresencial" element={<Presencial />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
