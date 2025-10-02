import React from 'react';
import './club-section.css';

export default function ClubSection() {
  const benefits = [
    '✨ Acesso exclusivo a lives mensais',
    '📚 Biblioteca digital com e-books e guias',
    '🎁 Descontos especiais em cursos e produtos',
    '🔮 Consultas com preços reduzidos',
    '👥 Comunidade privada de membros',
    '🎯 Conteúdos exclusivos semanais'
  ];

  return (
    <section className="club-section" id="clube">
      <div className="club-container">
        <div className="club-content">
          <div className="club-text">
            <span className="club-badge">Exclusivo</span>
            <h2 className="club-title">Clube Místico</h2>
            <p className="club-description">
              Faça parte da nossa comunidade exclusiva e tenha acesso a benefícios únicos, 
              conteúdos especiais e descontos em todos os nossos serviços e produtos.
            </p>

            <div className="club-benefits">
              <h3 className="benefits-title">Benefícios do Clube:</h3>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="club-pricing">
              <div className="price-tag">
                <span className="price-label">Apenas</span>
                <span className="price-value">R$ 49,90</span>
                <span className="price-period">/mês</span>
              </div>
            </div>

            <button className="club-btn">Entrar no Clube Agora</button>
          </div>

          <div className="club-visual">
            <div className="club-icon-large">🔮</div>
            <div className="club-decoration">
              <span className="decoration-star star-1">✨</span>
              <span className="decoration-star star-2">⭐</span>
              <span className="decoration-star star-3">✨</span>
              <span className="decoration-star star-4">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
