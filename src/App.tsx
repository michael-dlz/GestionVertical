import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import PreferenteService from "./pages/PreferenteService";
import PreferenteIndeciService from "./pages/PreferenteIndeciService";
import Presencial from "./pages/Presencial";
import ScrollToTop from "./hooks/ScrollToTop";
import WorkUs from "./pages/WorkUs";

const pageVariants = {
  initial: { opacity: 0 }, // Comienza completamente transparente
  enter: { opacity: 1 },   // Se desvanece a completamente visible
  exit: { opacity: 0 },    // Se desvanece a completamente transparente
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }} // Duración de la animación
              >
                <Helmet>
                  <title>Gestión Vertical</title>
                  <meta name="description" content="Bienvenido a Gestión Vertical, especialistas en administración de propiedades en Lima." />
                  <meta name="keywords" content="gestión de propiedades, administración de inmuebles, Lima" />
                </Helmet>
                <Home />
              </motion.div>
            }
          />
          <Route
            path="nosotros"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Gestión Vertical - Nosotros</title>
                  <meta name="description" content="Conoce más sobre Gestión Vertical y nuestros servicios de administración de propiedades." />
                  <meta name="keywords" content="acerca de, gestión de propiedades, administración de inmuebles" />
                </Helmet>
                <About />
              </motion.div>
            }
          />
          <Route
            path="servicio-preferente"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Gestión Vertical - Servicio Preferente</title>
                  <meta name="description" content="Descubre nuestros servicios preferentes en administración de propiedades." />
                  <meta name="keywords" content="servicios preferentes, gestión de propiedades, administración de inmuebles" />
                </Helmet>
                <PreferenteService />
              </motion.div>
            }
          />
          <Route
            path="servicio-preferente-indeci"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Gestión Vertical - Servicio Preferente Indeci</title>
                  <meta name="description" content="Conoce el servicio preferente Indeci en Gestión Vertical." />
                  <meta name="keywords" content="Indeci, servicios preferentes, gestión de propiedades" />
                </Helmet>
                <PreferenteIndeciService />
              </motion.div>
            }
          />
          <Route
            path="servicio-presencial"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Gestión Vertical - Servicio Presencial</title>
                  <meta name="description" content="Servicios presenciales de gestión y administración de propiedades." />
                  <meta name="keywords" content="servicios presenciales, gestión de propiedades, administración de inmuebles" />
                </Helmet>
                <Presencial />
              </motion.div>
            }
          /><Route
            path="trabaja-con-nosotros"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Gestión Vertical - Trabaja con Nosotros</title>
                  <meta name="description" content="Únete al equipo de Gestión Vertical. Descubre nuestras ofertas laborales y oportunidades de crecimiento en la administración de propiedades en Lima." />
                  <meta name="keywords" content="trabajo en gestión de propiedades, empleos en administración de inmuebles, oportunidades laborales Lima" />
                </Helmet>
                <WorkUs />
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;