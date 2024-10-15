import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import PreferenteService from "./pages/PreferenteService";
import PreferenteIndeciService from "./pages/PreferenteIndeciService";
import Presencial from "./pages/Presencial";
import Contacto from "./components/Home/Contact";
import ScrollToTop from "./hooks/ScrollToTop";

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
                  <About />
                </motion.div>
              }
            />
            <Route
              path="serviciopreferente"
              element={
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.1 }}
                >
                  <PreferenteService />
                </motion.div>
              }
            />
            <Route
              path="serviciopreferenteindeci"
              element={
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.1 }}
                >
                  <PreferenteIndeciService />
                </motion.div>
              }
            />
            <Route
              path="serviciopresencial"
              element={
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.1 }}
                >
                  <Presencial />
                </motion.div>
              }
            />
            <Route
              path="contacto"
              element={
                <motion.div
                  initial="initial"
                  animate="enter"
                  exit="exit"
                  variants={pageVariants}
                  transition={{ duration: 0.1 }}
                >
                  <Contacto />
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