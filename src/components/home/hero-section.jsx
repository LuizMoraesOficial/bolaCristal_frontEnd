import React from 'react';
import './hero-section.css';

export default function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      {/* Background com partículas animadas */}
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="hero-content">
        {/* Ícone místico */}
        <div className="hero-icon">
          <div className="mystical-symbol">🔮</div>
        </div>

        {/* Título principal */}
        <h1 className="hero-title">
          Descubra os<br />
          <span className="hero-title-highlight">Mistérios</span> do<br />
          <span className="hero-title-gold">Universo</span>
        </h1>

        {/* Subtítulo */}
        <p className="hero-subtitle">
          Transforme sua vida através do Tarot, Astrologia, Runas, Numerologia,<br />
          Cristais e muito mais.
        </p>

        {/* Botões de ação */}
        <div className="hero-buttons">
          <button className="hero-btn hero-btn-primary">
            Agendar Consulta
          </button>
          <button className="hero-btn hero-btn-secondary">
            Explorar Cursos
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  );
}
