import React from "react";
import "./features-section.css";

export default function FeaturesSection() {
  return (
    <section id="servicos" className="features">
      <div className="container">
        <h2>O que oferecemos</h2>
        <div className="features-grid">
          <div className="feature-card">Tarô</div>
          <div className="feature-card">Astrologia</div>
          <div className="feature-card">Numerologia</div>
          <div className="feature-card">Cristais</div>
        </div>
      </div>
    </section>
  );
}
