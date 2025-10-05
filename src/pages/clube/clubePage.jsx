import React, { useState } from "react";
import "./clubePage.css";

export default function ClubePage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bem-vindo(a), ${nome}! Sua inscrição foi registrada (futuramente será salva no banco).`);
    setNome("");
    setEmail("");
  };

  return (
    <section className="clube-page">
      <div className="clube-container">
        <h1 className="clube-title">🌟 Clube Místico Exclusivo</h1>
        <p className="clube-subtitle">
          Venha fazer parte do nosso clube exclusivo e tenha acesso antecipado a conteúdos, eventos e benefícios únicos!
        </p>

        <form onSubmit={handleSubmit} className="clube-form">
          <input
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="clube-btn">
            ✨ Fazer Parte do Clube
          </button>
        </form>
      </div>
    </section>
  );
}
