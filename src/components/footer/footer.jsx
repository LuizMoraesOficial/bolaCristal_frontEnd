import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Coluna 1: Logo e descrição */}
        <div className="footer-column">
          <div className="footer-logo">
            <span className="footer-logo-icon">🔮</span>
            <span className="footer-logo-text">Bola de Cristal</span>
          </div>
          <p className="footer-description">
            Descubra os mistérios do universo através de práticas ancestrais e conhecimento espiritual.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="YouTube">📹</a>
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div className="footer-column">
          <h3 className="footer-title">Links Rápidos</h3>
          <ul className="footer-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#loja">Loja</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Coluna 3: Serviços */}
        <div className="footer-column">
          <h3 className="footer-title">Serviços</h3>
          <ul className="footer-links">
            <li><a href="#tarot">Tarot</a></li>
            <li><a href="#astrologia">Astrologia</a></li>
            <li><a href="#runas">Runas</a></li>
            <li><a href="#numerologia">Numerologia</a></li>
            <li><a href="#cristais">Cristais</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div className="footer-column">
          <h3 className="footer-title">Contato</h3>
          <ul className="footer-contact">
            <li>📧 contato@boladecristal.com</li>
            <li>📞 (11) 99999-9999</li>
            <li>📍 São Paulo, SP - Brasil</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Bola de Cristal. Todos os direitos reservados.
        </p>
        <div className="footer-legal">
          <a href="#privacidade">Política de Privacidade</a>
          <span className="separator">•</span>
          <a href="#termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}
