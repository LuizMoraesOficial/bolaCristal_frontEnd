import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./blog-section.css";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const API_URL = "https://bolacristalbackend-1.onrender.com/getPosts.php"; // caminho igual ao usado no admin
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Garante que o array está ordenado (últimos primeiro)
        setPosts(data.reverse());
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      }
    };

    loadPosts();
  }, []);

  // Função para redirecionar ao post expandido
  const handleReadMore = (post) => {
    navigate(`/blog/${post.id}`, { state: { post } });
  };

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">Blog</h2>
          <p className="blog-subtitle">Artigos e insights sobre o mundo místico</p>
        </div>

        <div className="blog-grid">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <article key={index} className="blog-card">
                <div className="blog-image">
                  {post.imagem ? (
                    <img
                      src={post.imagem}
                      alt={post.titulo}
                      className="w-full h-56 object-cover rounded-md"
                    />
                  ) : (
                    <div className="no-image">🔮</div>
                  )}
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.data || "Post recente"}</span>
                  </div>
                  <h3 className="blog-post-title">{post.titulo}</h3>
                  <p className="blog-excerpt">{post.conteudo || post.texto}</p>
                  <div className="blog-footer">
                    <button
                      className="blog-read-more"
                      onClick={() => handleReadMore(post)}
                    >
                      Ler mais →
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <p className="no-posts">Nenhum post encontrado ainda 🌓</p>
          )}
        </div>

        <div className="blog-cta">
          <button className="blog-view-all">Ver Todos os Artigos</button>
        </div>
      </div>
    </section>
  );
}
