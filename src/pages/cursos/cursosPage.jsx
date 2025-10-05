import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import "./cursos.css";

export default function CursosPage() {
  const cursos = [
    {
      id: 1,
      titulo: "Curso de Tarot para Iniciantes",
      descricao:
        "Aprenda os significados das cartas e como fazer leituras completas com segurança e intuição.",
      preco: "R$ 199,00",
    },
    {
      id: 2,
      titulo: "Astrologia Descomplicada",
      descricao:
        "Entenda os signos, planetas e casas astrológicas de forma prática e acessível.",
      preco: "R$ 249,00",
    },
    {
      id: 3,
      titulo: "Desenvolvimento Espiritual e Intuição",
      descricao:
        "Conecte-se com sua essência e aprenda técnicas para fortalecer sua intuição.",
      preco: "R$ 299,00",
    },
  ];

  const enviarMensagem = (curso) => {
    const mensagem = `Olá, me interessei pelo curso "${curso.titulo}" e gostaria de saber mais informações!`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <main className="cursos-container">
        <h1 className="cursos-title">Nossos Cursos Místicos 📚</h1>
        <p className="cursos-subtitle">
          Expanda seu conhecimento e conecte-se com o universo.
        </p>

        <div className="cursos-grid">
          {cursos.map((curso) => (
            <div key={curso.id} className="curso-card">
              <h2>{curso.titulo}</h2>
              <p>{curso.descricao}</p>
              <span className="curso-preco">{curso.preco}</span>
              <button
                className="curso-btn"
                onClick={() => enviarMensagem(curso)}
              >
                Quero saber mais
              </button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
