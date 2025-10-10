import React from "react";
import { Link, useLocation } from "wouter";
import { useNavigate } from "react-router-dom";
import "./headerAdmin.css";

export default function HeaderAdmin() {
  const [location] = useLocation();
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
        <Link href="/admin/dashboard">
          <span className="logo-text">Painel Cristal</span>
        </Link>
      </div>

      <nav className="admin-nav">
        <Link href="/admin/dashboard">
          <span className={location === "/admin/dashboard" ? "active" : ""}>
            Dashboard
          </span>
        </Link>
        <Link href="/admin/blog">
          <span className={location === "/admin/blog" ? "active" : ""}>
            Blog Post
          </span>
        </Link>
        <Link href="/admin/cursos">
          <span className={location === "/admin/cursos" ? "active" : ""}>
            Cursos
          </span>
        </Link>
        <Link href="/admin/produtos">
          <span className={location === "/admin/produtos" ? "active" : ""}>
            Produtos
          </span>
        </Link>
        <Link href="/admin/servicos">
          <span className={location === "/admin/servicos" ? "active" : ""}>
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
