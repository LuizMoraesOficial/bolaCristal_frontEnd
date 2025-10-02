import React from "react";
import "./btnwhatsapp.css";

export default function BtnWhatsapp() {
  // Atualize o telefone abaixo
  const phone = "5511999999999";
  const text = encodeURIComponent("Olá! Vim pelo site e quero saber mais...");
  return (
    <a className="btn-whatsapp" href={`https://wa.me/${phone}?text=${text}`} target="_blank" rel="noreferrer">
      💬
    </a>
  );
}
