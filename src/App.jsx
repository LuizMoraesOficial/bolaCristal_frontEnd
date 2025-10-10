import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import AdminLoginPage from "./pages/admin/adminLoginPage.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

import "./App.css";

// Componente para controlar a exibição do layout
function LayoutWrapper({ children }) {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  // Adiciona padding automático abaixo do header apenas nas páginas públicas
  useEffect(() => {
    if (!isAdminPage) {
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
    } else {
      document.body.style.paddingTop = "0px";
    }
  }, [isAdminPage]);

  return (
    <>
      {!isAdminPage && <Header />}
      <main>{children}</main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <BtnWhatsapp />}
    </>
  );
}

export default function App() {
  return (
    <LayoutWrapper>
      <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/servicos" element={<ServicesPage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/loja" element={<LojaPage />} />
        <Route path="/clube" element={<ClubePage />} />
        <Route path="/contato" element={<ContatoPage />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </LayoutWrapper>
  );
}
