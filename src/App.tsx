import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Layout from "./Layout"
import PreferenteService from "./pages/PreferenteService"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<About />} />
          <Route path="serviciopreferente" element={<PreferenteService />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
