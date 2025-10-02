import React from "react";
import "./hero-section.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          DESCUBRA OS <span>MISTÉRIOS</span> DO <span className="gold">UNIVERSO</span>
        </h1>
        <p className="hero-subtitle">
          Transforme sua vida através do Tarô, Astrologia, Runas, Numerologia, Cristais e muito mais.
        </p>
        <div className="hero-ctas">
          <button className="btn primary">Agendar Consulta</button>
          <button className="btn outline">Explorar Cursos</button>
        </div>
      </div>
    </section>
  );
}
