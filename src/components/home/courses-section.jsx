import React from 'react';
import './courses-section.css';

export default function CoursesSection() {
  const courses = [
    {
      title: 'Tarot para Iniciantes',
      description: 'Aprenda a interpretar as 78 cartas do Tarot e realizar leituras para si mesmo e outras pessoas.',
      level: 'Iniciante',
      duration: '8 semanas',
      price: 'R$ 497',
      image: '🔮'
    },
    {
      title: 'Astrologia Essencial',
      description: 'Domine os fundamentos da astrologia e aprenda a interpretar mapas astrais completos.',
      level: 'Intermediário',
      duration: '12 semanas',
      price: 'R$ 697',
      image: '⭐'
    },
    {
      title: 'Runas Nórdicas',
      description: 'Mergulhe na sabedoria ancestral das runas e aprenda suas aplicações práticas.',
      level: 'Iniciante',
      duration: '6 semanas',
      price: 'R$ 397',
      image: '🪬'
    },
    {
      title: 'Numerologia Avançada',
      description: 'Explore os mistérios dos números e suas influências em todos os aspectos da vida.',
      level: 'Avançado',
      duration: '10 semanas',
      price: 'R$ 597',
      image: '🔢'
    },
    {
      title: 'Cristaloterapia',
      description: 'Conheça as propriedades dos cristais e como utilizá-los para cura e equilíbrio energético.',
      level: 'Iniciante',
      duration: '8 semanas',
      price: 'R$ 447',
      image: '💎'
    },
    {
      title: 'Magia Lunar',
      description: 'Aprenda a trabalhar com os ciclos lunares e realizar rituais poderosos.',
      level: 'Intermediário',
      duration: '6 semanas',
      price: 'R$ 397',
      image: '🌙'
    }
  ];

  return (
    <section className="courses-section" id="cursos">
      <div className="courses-container">
        <div className="courses-header">
          <h2 className="courses-title">Cursos Online</h2>
          <p className="courses-subtitle">
            Desenvolva suas habilidades místicas com nossos cursos especializados
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image">{course.image}</div>
              <div className="course-content">
                <span className="course-level">{course.level}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-info">
                  <span className="course-duration">📅 {course.duration}</span>
                  <span className="course-price">{course.price}</span>
                </div>
                <button className="course-btn">Saiba Mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
