import React, { useState } from 'react';
import './newsletter-section.css';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Aqui você pode adicionar a lógica para enviar o email
      console.log('Email inscrito:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Resetar mensagem após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <div className="newsletter-icon">✉️</div>
          <h2 className="newsletter-title">Receba Insights Místicos</h2>
          <p className="newsletter-description">
            Inscreva-se na nossa newsletter e receba semanalmente dicas, previsões astrológicas 
            e conteúdos exclusivos diretamente no seu e-mail.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="newsletter-input"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn">
                Inscrever-se
              </button>
            </div>
            
            {isSubmitted && (
              <p className="newsletter-success">
                ✓ Obrigado! Você foi inscrito com sucesso.
              </p>
            )}
          </form>

          <p className="newsletter-privacy">
            🔒 Seus dados estão seguros. Não compartilhamos informações com terceiros.
          </p>
        </div>
      </div>
    </section>
  );
}
