import React, { useState } from 'react';
import './testimonials-section.css';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente desde 2023',
      text: 'A consulta de Tarot mudou completamente minha perspectiva sobre os desafios que estava enfrentando. Recomendo de coração!',
      rating: 5,
      avatar: '👩'
    },
    {
      name: 'João Santos',
      role: 'Aluno do curso de Astrologia',
      text: 'O curso de Astrologia Essencial superou todas as minhas expectativas. Aprendi muito e agora consigo fazer minhas próprias leituras.',
      rating: 5,
      avatar: '👨'
    },
    {
      name: 'Ana Costa',
      role: 'Cliente desde 2022',
      text: 'As sessões de Numerologia me ajudaram a entender melhor meu propósito de vida. Gratidão eterna!',
      rating: 5,
      avatar: '👩‍🦰'
    },
    {
      name: 'Pedro Oliveira',
      role: 'Aluno do curso de Tarot',
      text: 'Excelente didática e conteúdo muito completo. Já estou fazendo leituras para amigos e família!',
      rating: 5,
      avatar: '👨‍🦱'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Depoimentos</h2>
          <p className="testimonials-subtitle">
            O que nossos clientes dizem sobre nós
          </p>
        </div>

        <div className="testimonials-carousel">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={prevTestimonial}
            aria-label="Depoimento anterior"
          >
            ‹
          </button>

          <div className="testimonial-card">
            <div className="testimonial-avatar">
              {testimonials[currentIndex].avatar}
            </div>
            <div className="testimonial-stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <p className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </p>
            <h4 className="testimonial-name">
              {testimonials[currentIndex].name}
            </h4>
            <p className="testimonial-role">
              {testimonials[currentIndex].role}
            </p>
          </div>

          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={nextTestimonial}
            aria-label="Próximo depoimento"
          >
            ›
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'dot-active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
