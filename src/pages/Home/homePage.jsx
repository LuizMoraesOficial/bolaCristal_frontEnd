import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import HeroSection from "../../components/home/hero-section.jsx";
import FeaturesSection from "../../components/home/features-section.jsx";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* quando o manus gerar, substitua/adicione as outras seções aqui */}
      </main>

      <Footer />
      <BtnWhatsapp />
    </>
  );
}
