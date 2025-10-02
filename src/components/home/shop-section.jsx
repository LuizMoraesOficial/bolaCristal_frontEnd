import React from 'react';
import './shop-section.css';

export default function ShopSection() {
  const products = [
    {
      name: 'Baralho de Tarot Rider-Waite',
      description: 'Baralho clássico com 78 cartas e manual de instruções',
      price: 'R$ 89,90',
      image: '🃏'
    },
    {
      name: 'Kit de Runas em Pedra',
      description: 'Conjunto completo de 25 runas em pedra natural',
      price: 'R$ 129,90',
      image: '🪨'
    },
    {
      name: 'Cristal Ametista',
      description: 'Cristal natural de ametista para proteção e intuição',
      price: 'R$ 79,90',
      image: '💜'
    },
    {
      name: 'Vela Aromática Místico',
      description: 'Vela artesanal com essências para rituais',
      price: 'R$ 39,90',
      image: '🕯️'
    },
    {
      name: 'Incenso Natural Sândalo',
      description: 'Caixa com 20 varetas de incenso natural',
      price: 'R$ 24,90',
      image: '🌿'
    },
    {
      name: 'Pêndulo de Cristal',
      description: 'Pêndulo em cristal natural para radiestesia',
      price: 'R$ 69,90',
      image: '💎'
    }
  ];

  return (
    <section className="shop-section" id="loja">
      <div className="shop-container">
        <div className="shop-header">
          <h2 className="shop-title">Loja Mística</h2>
          <p className="shop-subtitle">
            Produtos selecionados para suas práticas espirituais
          </p>
        </div>

        <div className="shop-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="product-btn">Comprar</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="shop-cta">
          <button className="shop-view-all">Ver Todos os Produtos</button>
        </div>
      </div>
    </section>
  );
}
