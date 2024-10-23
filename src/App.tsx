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
import Blog from "./pages/Blog";
import BlogDetail from "./components/BlogDetail";

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
                  <title>Administración de Propiedades - Gestión Vertical</title>
                  <meta name="description" content="Especialistas en la gestión y administración de propiedades en Lima." />
                  <meta name="keywords" content="gestión de propiedades, administración de inmuebles, Lima" />
                  <meta property="og:title" content="Administración de Propiedades - Gestión Vertical" />
                  <meta property="og:description" content="Ofrecemos servicios de alquiler y venta de inmuebles." />
                  <meta name="robots" content="index,follow" />
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
                  <title>Nosotros - Gestión Vertical</title>
                  <meta name="description" content="Conoce más sobre Gestión Vertical y nuestros servicios de administración de propiedades." />
                  <meta name="keywords" content="acerca de, gestión de propiedades, administración de inmuebles" />
                  <meta property="og:title" content="Nosotros - Gestión Vertical" />
                  <meta property="og:description"
                    content="Conoce más sobre Gestión Vertical y nuestros servicios de administración de propiedades."></meta>
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
                  <title>Servicio Preferente - Gestión Vertical</title>
                  <meta name="description" content="Descubre nuestros servicios preferentes en administración de propiedades." />
                  <meta name="keywords" content="servicios preferentes, gestión de propiedades, administración de inmuebles" />
                  <meta property="og:title" content="Servicio Preferente - Gestión Vertical" />
                  <meta property="og:description"
                    content="Descubre nuestros servicios preferentes en administración de propiedades."></meta>
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
                  <title>Servicio Preferente Indeci - Gestión Vertical</title>
                  <meta name="description" content="Conoce el servicio preferente Indeci en Gestión Vertical." />
                  <meta name="keywords" content="Indeci, servicios preferentes, gestión de propiedades" />
                  <meta property="og:title" content="Servicio Preferente Indeci - Gestión Vertical" />
                  <meta property="og:description"
                    content="Conoce el servicio preferente Indeci en Gestión Vertical."></meta>
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
                  <title>Servicio Presencial - Gestión Vertical</title>
                  <meta name="description" content="Servicios presenciales de gestión y administración de propiedades." />
                  <meta name="keywords" content="servicios presenciales, gestión de propiedades, administración de inmuebles" />
                  <meta property="og:title" content="Servicio Presencial - Gestión Vertical" />
                  <meta property="og:description"
                    content="Servicios presenciales de gestión y administración de propiedades."></meta>
                </Helmet>
                <Presencial />
              </motion.div>
            }
          />
          <Route
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
                  <title>Trabaja con Nosotros - Gestión Vertical</title>
                  <meta name="description" content="Únete al equipo de Gestión Vertical. Descubre nuestras ofertas laborales y oportunidades de crecimiento en la administración de propiedades en Lima." />
                  <meta name="keywords" content="trabajo en gestión de propiedades, empleos en administración de inmuebles, oportunidades laborales Lima" />
                  <meta property="og:title" content="Trabaja con Nosotros - Gestión Vertical" />
                  <meta property="og:description"
                    content="Únete al equipo de Gestión Vertical. Descubre nuestras ofertas laborales y oportunidades de crecimiento en la administración de propiedades en Lima."></meta>
                </Helmet>
                <WorkUs />
              </motion.div>
            }
          />

          <Route
            path="blog"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <Helmet>
                  <title>Blog - Gestión Vertical</title>
                  <meta name="description" content="Descubre los últimos artículos, noticias y consejos sobre la gestión de propiedades y administración inmobiliaria en nuestro blog." />
                  <meta property="og:title" content="Blog - Gestión Vertical" />
                  <meta property="og:description"
                    content="Descubre los últimos artículos, noticias y consejos sobre la gestión de propiedades y administración inmobiliaria en nuestro blog."></meta>
                </Helmet>
                <Blog />
              </motion.div>
            }
          />

          <Route
            path="blog/:title"
            element={
              <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.1 }}
              >
                <BlogDetail />
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