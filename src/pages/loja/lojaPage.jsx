import React from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import "./loja.css";

export default function LojaPage() {
  const produtos = [
    {
      id: 1,
      nome: "Baralho de Tarot Clássico",
      descricao: "Um baralho completo para leituras profissionais e estudos.",
      preco: "R$ 129,00",
    },
    {
      id: 2,
      nome: "Incensos Energéticos",
      descricao: "Purifique o ambiente com aromas que elevam sua vibração.",
      preco: "R$ 39,90",
    },
    {
      id: 3,
      nome: "Cristais Energéticos",
      descricao: "Pedras naturais para equilíbrio e proteção espiritual.",
      preco: "R$ 59,00",
    },
  ];

  const enviarMensagem = (produto) => {
    const mensagem = `Olá, me interessei pelo produto "${produto.nome}" e gostaria de saber mais informações!`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <main className="loja-container">
        <h1 className="loja-title">Loja Mística 🔮</h1>
        <p className="loja-subtitle">
          Itens espirituais para sua jornada mística e autoconhecimento.
        </p>

        <div className="loja-grid">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto-card">
              <h2>{produto.nome}</h2>
              <p>{produto.descricao}</p>
              <span className="produto-preco">{produto.preco}</span>
              <button
                className="produto-btn"
                onClick={() => enviarMensagem(produto)}
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
