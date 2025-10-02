import React, { useState } from 'react';
import './contact-section.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    
    // Resetar formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    // Resetar mensagem após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Estamos aqui para ajudar você em sua jornada espiritual
          </p>
        </div>

        <div className="contact-content">
          {/* Informações de contato */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3 className="info-title">E-mail</h3>
              <p className="info-text">contato@boladecristal.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3 className="info-title">Telefone</h3>
              <p className="info-text">(11) 99999-9999</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3 className="info-title">Endereço</h3>
              <p className="info-text">São Paulo, SP - Brasil</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3 className="info-title">Horário</h3>
              <p className="info-text">Seg-Sex: 9h às 18h</p>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Enviar Mensagem
              </button>

              {isSubmitted && (
                <p className="form-success">
                  ✓ Mensagem enviada com sucesso! Retornaremos em breve.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
