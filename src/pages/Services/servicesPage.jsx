import React from "react";
import "./services.css";

export default function ServicesPage() {
  const phoneNumber = "21969740634"; // ✅ coloque aqui o número do WhatsApp

  const services = [
    {
      id: 1,
      name: "Tarot",
      description: "Descubra respostas e orientações para o seu caminho espiritual através das cartas do tarot.",
      icon: "🔮",
    },
    {
      id: 2,
      name: "Astrologia",
      description: "Entenda sua personalidade, relacionamentos e destino com um mapa astral completo.",
      icon: "🌙",
    },
    {
      id: 3,
      name: "Runas",
      description: "Receba mensagens ancestrais e direcionamentos por meio da sabedoria das runas nórdicas.",
      icon: "⚡",
    },
    {
      id: 4,
      name: "Numerologia",
      description: "Descubra o significado espiritual dos números e como eles influenciam sua jornada.",
      icon: "🔢",
    },
    {
      id: 5,
      name: "Cristais",
      description: "A energia dos cristais pode equilibrar, curar e proteger sua vida espiritual e emocional.",
      icon: "💎",
    },
  ];

  const sendWhatsApp = (serviceName) => {
    const message = `Olá, me interessei no serviço de ${serviceName} e gostaria de saber mais informações!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="services-container">
      <h1 className="services-title">Nossos Serviços Místicos ✨</h1>
      <p className="services-subtitle">
        Explore nossas práticas espirituais e escolha o serviço que ressoa com sua energia.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <button
              className="service-btn"
              onClick={() => sendWhatsApp(service.name)}
            >
              Saber mais
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
