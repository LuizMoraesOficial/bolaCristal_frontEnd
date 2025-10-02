import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} Bola de Cristal — Todos os direitos reservados</div>
        <div className="footer-links">Siga-nos: <span>🔗 Instagram</span> • <span>🔗 Facebook</span></div>
      </div>
    </footer>
  );
}
