import React from 'react';
import './blog-section.css';

export default function BlogSection() {
  const posts = [
    {
      title: 'Como Interpretar as Cartas do Tarot',
      excerpt: 'Descubra os segredos por trás das 22 cartas dos Arcanos Maiores e como elas podem revelar aspectos profundos da sua jornada.',
      date: '15 de Setembro, 2025',
      category: 'Tarot',
      image: '🔮',
      readTime: '5 min'
    },
    {
      title: 'Lua Nova: Momento de Novos Começos',
      excerpt: 'Entenda a energia da Lua Nova e como aproveitá-la para manifestar seus desejos e iniciar novos projetos.',
      date: '10 de Setembro, 2025',
      category: 'Astrologia',
      image: '🌑',
      readTime: '7 min'
    },
    {
      title: 'O Poder dos Cristais na Cura Energética',
      excerpt: 'Conheça as propriedades curativas dos cristais mais populares e como utilizá-los no seu dia a dia.',
      date: '5 de Setembro, 2025',
      category: 'Cristais',
      image: '💎',
      readTime: '6 min'
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog</h2>
          <p className="blog-subtitle">
            Artigos e insights sobre o mundo místico
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={index} className="blog-card">
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">{post.date}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-read-time">📖 {post.readTime}</span>
                  <button className="blog-read-more">Ler Mais →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <button className="blog-view-all">Ver Todos os Artigos</button>
        </div>
      </div>
    </section>
  );
}
