import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import BtnWhatsapp from "./components/btnwhatsapp/btnwhatsapp.jsx";
import HomePage from "./pages/Home/homePage.jsx";
import BlogPage from "./pages/Blog/blogPage.jsx";
import ServicesPage from "./pages/Services/servicesPage.jsx";
import CursosPage from "./pages/cursos/cursosPage.jsx";
import LojaPage from "./pages/loja/lojaPage.jsx";
import ClubePage from "./pages/clube/clubePage.jsx";
import ContatoPage from "./pages/contato/contatoPage.jsx";
import "./App.css";

export default function App() {
  // Adiciona padding automático abaixo do header
  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) {
      const updatePadding = () => {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
      };
      updatePadding();
      window.addEventListener("resize", updatePadding);
      return () => window.removeEventListener("resize", updatePadding);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/cursos" element={<CursosPage />} />
          <Route path="/loja" element={<LojaPage />} />
          <Route path="/clube" element={<ClubePage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
      </main>
      <Footer />
      <BtnWhatsapp />
    </>
  );
}
