import React, { useState } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import "./blog.css";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      id: 1,
      title: "Título do Artigo 1",
      summary: "Um breve resumo do conteúdo do artigo 1 — logo mais virá do banco MariaDB.",
      content: "Aqui estaria o conteúdo completo do artigo 1, com detalhes, imagens e muito mais...",
    },
    {
      id: 2,
      title: "Título do Artigo 2",
      summary: "Um breve resumo do conteúdo do artigo 2 — logo mais virá do banco MariaDB.",
      content: "Aqui estaria o conteúdo completo do artigo 2. Você pode expandir para ler tudo.",
    },
    {
      id: 3,
      title: "Título do Artigo 3",
      summary: "Um breve resumo do conteúdo do artigo 3 — logo mais virá do banco MariaDB.",
      content: "Aqui estaria o conteúdo completo do artigo 3. Logo virá direto do banco de dados.",
    },
  ];

  return (
    <>
      
      <main className="blog-container">
        {!selectedPost ? (
          <>
            <h1 className="blog-title">Nosso Blog Místico ✨</h1>
            <p className="blog-subtitle">
              Explore artigos sobre tarot, astrologia e espiritualidade.
            </p>
            <div className="blog-grid">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="blog-card"
                >
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                  <button
                    className="read-more-btn"
                    onClick={() => setSelectedPost(post)}
                  >
                    Ler mais
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="expanded-post">
            <button className="back-btn" onClick={() => setSelectedPost(null)}>
              ⬅ Voltar
            </button>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
          </div>
        )}
        </main>
    </>
  );
}
