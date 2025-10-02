import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-emoji">🔮</span>
          <span className="logo-text">Bola de Cristal</span>
        </div>

        <nav className="header-nav">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#cursos">Cursos</a>
          <a href="#loja">Loja</a>
          <a href="#blog">Blog</a>
          <a href="#clube">Clube</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="header-icons">
          <button className="icon-btn" aria-label="login">👤</button>
          <button className="icon-btn" aria-label="carrinho">🛒</button>
        </div>
      </div>
    </header>
  );
}
