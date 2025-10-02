import React from 'react';
import './features-section.css';

export default function FeaturesSection() {
  const features = [
    {
      icon: '🔮',
      title: 'Tarot Místico',
      description: 'Desvende os segredos do seu futuro através das cartas sagradas do Tarot.'
    },
    {
      icon: '⭐',
      title: 'Astrologia',
      description: 'Compreenda a influência dos astros em sua vida e destino.'
    },
    {
      icon: '🪬',
      title: 'Runas Antigas',
      description: 'Conecte-se com a sabedoria ancestral através das runas nórdicas.'
    },
    {
      icon: '🔢',
      title: 'Numerologia',
      description: 'Descubra os números que regem sua existência e propósito.'
    },
    {
      icon: '💎',
      title: 'Cristais',
      description: 'Harmonize suas energias com o poder dos cristais e pedras preciosas.'
    },
    {
      icon: '🌙',
      title: 'Magia Lunar',
      description: 'Aprenda a trabalhar com as fases da lua e seus ciclos energéticos.'
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Práticas Místicas</h2>
          <p className="features-subtitle">
            Explore as diversas modalidades espirituais que oferecemos
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
