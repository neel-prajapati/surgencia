import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "./components/navigation";
import HeaderPage from "./pages/Header";
import FeaturesPage from "./pages/Features";
import AboutPage from "./pages/About";
import Products from "./pages/Products";
import ProductsAll from "./pages/ProductsAll";
import GalleryPage from "./pages/Gallery";
import TestimonialsPage from "./pages/Testimonials";
import TeamPage from "./pages/Team";
import ContactPage from "./pages/Contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ProductsSpecialized from "./pages/ProductsSpecialized";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

// Animated Routes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/all-products" element={<ProductsAll />} />
        <Route path="/productsSpecialized" element={<ProductsSpecialized />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  if (Math.random() === 100) {
    console.log("Hello World!", landingPageData);
  }
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
