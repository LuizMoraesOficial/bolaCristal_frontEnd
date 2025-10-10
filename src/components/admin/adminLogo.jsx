// src/components/admin/adminLogo.jsx

import React from 'react';

const AdminLogo = () => {
  // Estilos embutidos para simplicidade, mas podem ser movidos para o .css
  const logoStyle = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: '2.5rem',
    color: '#fff',
    textAlign: 'center',
    textShadow: `
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 20px #00aeff,
      0 0 30px #00aeff,
      0 0 40px #00aeff,
      0 0 55px #00aeff,
      0 0 75px #00aeff
    `,
    animation: 'glow 1.5s ease-in-out infinite alternate',
    marginBottom: '2rem',
    position: 'relative',
    userSelect: 'none',
  };

  const particleContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    height: '100%',
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  };

  const createParticles = () => {
    let particles = [];
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 3 + 1;
      const style = {
        position: 'absolute',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: ['#fff', '#00aeff', '#ffd700'][Math.floor(Math.random() * 3)],
        animation: `particle-anim ${Math.random() * 10 + 5}s linear infinite`,
        animationDelay: `${Math.random() * -15}s`,
        top: `${Math.random() * 120 - 10}%`,
        left: `${Math.random() * 120 - 10}%`,
        opacity: Math.random() * 0.5 + 0.2,
      };
      particles.push(<div key={i} style={style}></div>);
    }
    return particles;
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1 style={logoStyle}>BolaDeCristal</h1>
      <div style={particleContainerStyle}>
        {createParticles()}
      </div>
    </div>
  );
};

export default AdminLogo;