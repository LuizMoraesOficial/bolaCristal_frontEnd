import React, { useState } from "react";
import "./contatoPage.css";

export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada! (Futuramente será registrada no painel de administração 💬)");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section className="contato-page">
      <div className="contato-container">
        <h1 className="contato-title">📬 Entre em Contato</h1>
        <p className="contato-subtitle">
          Envie sua mensagem e entraremos em contato o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="contato-form">
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="mensagem"
            placeholder="Escreva sua mensagem..."
            value={form.mensagem}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contato-btn">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}
