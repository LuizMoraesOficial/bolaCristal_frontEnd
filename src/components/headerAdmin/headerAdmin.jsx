import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./headerAdmin.css";

export default function HeaderAdmin() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Função para logout e redirecionamento
  const handleLogout = () => {
    // (opcional) remover token do admin
    // localStorage.removeItem("adminToken");

    // Redireciona para a Home
    navigate("/");
  };

  return (
    <header className="admin-header">
      <div className="admin-logo">
        <Link to="/admin/dashboard">
          <span className="logo-text">Painel Cristal</span>
        </Link>
      </div>

      <nav className="admin-nav">
        <Link to="/admin/dashboard">
          <span className={location.pathname === "/admin/dashboard" ? "active" : ""}>
            Dashboard
          </span>
        </Link>
        <Link to="/admin/blog">
          <span className={location.pathname === "/admin/blog" ? "active" : ""}>
            Blog Post
          </span>
        </Link>
        <Link to="/admin/cursos">
          <span className={location.pathname === "/admin/cursos" ? "active" : ""}>
            Cursos
          </span>
        </Link>
        <Link to="/admin/produtos">
          <span className={location.pathname === "/admin/produtos" ? "active" : ""}>
            Produtos
          </span>
        </Link>
        <Link to="/admin/servicos">
          <span className={location.pathname === "/admin/servicos" ? "active" : ""}>
            Serviços
          </span>
        </Link>
      </nav>

      <div className="admin-user">
        <button className="logout-btn" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </header>
  );
}
