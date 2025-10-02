import React from 'react';
import './services-section.css';

export default function ServicesSection() {
  const services = [
    {
      title: 'Consulta de Tarot',
      description: 'Sessão individual com leitura personalizada das cartas para esclarecer suas dúvidas e orientar suas decisões.',
      price: 'R$ 150',
      duration: '60 minutos',
      icon: '🃏'
    },
    {
      title: 'Mapa Astral Completo',
      description: 'Análise detalhada do seu mapa natal, revelando aspectos da personalidade, talentos e desafios.',
      price: 'R$ 250',
      duration: '90 minutos',
      icon: '🌟'
    },
    {
      title: 'Leitura de Runas',
      description: 'Consulta com as runas ancestrais para obter orientação sobre questões específicas da sua vida.',
      price: 'R$ 120',
      duration: '45 minutos',
      icon: '🪬'
    },
    {
      title: 'Análise Numerológica',
      description: 'Descubra seu número de vida, missão e ciclos pessoais através da numerologia pitagórica.',
      price: 'R$ 180',
      duration: '60 minutos',
      icon: '🔢'
    }
  ];

  return (
    <section className="services-section" id="servicos">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Nossos Serviços</h2>
          <p className="services-subtitle">
            Escolha a modalidade que mais ressoa com você
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-details">
                <span className="service-duration">⏱️ {service.duration}</span>
                <span className="service-price">{service.price}</span>
              </div>
              <button className="service-btn">Agendar Agora</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
