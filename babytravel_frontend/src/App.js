// import logo from './logo.svg';
import './App.css';


// import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import GaleriaPage from "./pages/GaleriaPage";
import ServiciosPage from "./pages/ServiciosPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="galeria" element={<GaleriaPage />} />
          <Route path="nosotros" element={<NosotrosPage />} />
          <Route path="novedades" element={<NovedadesPage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
