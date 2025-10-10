import React, { useState, useEffect } from 'react';
import './header.css';
import { Link } from "react-router-dom";

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
          <Link href="#inicio" className="nav-link" to="/">Início</Link>
          <Link href="#servicos" className="nav-link" to="/servicos">Serviços</Link>
          <Link href="#cursos" className="nav-link" to="cursos">Cursos</Link>
          <Link href="#loja" className="nav-link" to="loja">Loja</Link>
          <Link href="#blog" className="nav-link" to="/blog">Blog</Link>
          <Link href="#clube" className="nav-link" to="clube">Clube</Link>
          <Link href="#contato" className="nav-link" to="contato">Contato</Link>
        </nav>

        {/* Action Buttons */}
        <div className="header-actions">
          <button className="header-btn-theme" aria-label="Alternar tema">
            🌙
          </button>
          <Link className="header-btn-user" aria-label="Perfil do usuário" to="/admin/login">
            👤
          </Link>
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
