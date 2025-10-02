import React from 'react';
import './btnwhatsapp.css';

export default function BtnWhatsapp() {
  const whatsappNumber = '5511999999999'; // Altere para o número real
  const whatsappMessage = 'Olá! Gostaria de agendar uma consulta.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn-whatsapp"
      aria-label="Contato via WhatsApp"
    >
      <span className="whatsapp-icon">💬</span>
    </a>
  );
}
