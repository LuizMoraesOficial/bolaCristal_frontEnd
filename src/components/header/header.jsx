import React, { useState, useEffect } from 'react';
import './header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <span className="logo-icon">🔮</span>
          <span className="logo-text">Bola de Cristal</span>
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" className="nav-link">Início</a>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#cursos" className="nav-link">Cursos</a>
          <a href="#loja" className="nav-link">Loja</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#clube" className="nav-link">Clube</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="header-btn-theme" aria-label="Alternar tema">
            🌙
          </button>
          <button className="header-btn-user" aria-label="Perfil do usuário">
            👤
          </button>
          <button className="header-btn-cart" aria-label="Carrinho de compras">
            🛒
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="header-mobile-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
