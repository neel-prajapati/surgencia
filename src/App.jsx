import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import HeaderPage from "./pages/Header";
import FeaturesPage from "./pages/Features";
import AboutPage from "./pages/About";
import Products from "./pages/Products";
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

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HeaderPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsSpecialized" element={<ProductsSpecialized />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
