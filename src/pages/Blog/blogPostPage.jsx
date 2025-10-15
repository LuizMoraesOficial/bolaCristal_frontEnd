import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import "./blog.css";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const { id } = useParams();

  // 👉 Busca os posts do backend
  useEffect(() => {
    fetch("https://bolacristalbackend-1.onrender.com/getPosts.php")
      .then((res) => res.json())
      .then((data) => {
        const allPosts = data.reverse();
        setPosts(allPosts);

        // se tiver um ID na URL, mostra o post correspondente
        if (id) {
          const found = allPosts.find((p) => p.id === id);
          if (found) setSelectedPost(found);
        }
      })
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, [id]);

  return (
    <>
      <Header />
      <main className="blog-container">
        {/* 🔮 Modo lista */}
        {!selectedPost ? (
          <>
            <h1 className="blog-title">Nosso Blog Místico ✨</h1>
            <p className="blog-subtitle">
              Explore artigos sobre tarot, astrologia e espiritualidade.
            </p>

            {posts.length > 0 ? (
              <div className="blog-grid">
                {posts.map((post) => (
                  <div key={post.id} className="blog-card">
                    {post.imagem && (
                      <div className="blog-image">
                        <img
                          src={post.imagem}
                          alt={post.titulo}
                          style={{ width: "100%", borderRadius: "8px" }}
                        />
                      </div>
                    )}
                    <h2>{post.titulo}</h2>
                    <p>
                      {(post.descricao || post.texto || post.conteudo || "")
                        .substring(0, 120) + "..."}
                    </p>
                    <Link to={`/blog/${post.id}`} className="read-more-btn">
                      Ler mais →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-posts">Nenhum post publicado ainda 🔮</p>
            )}
          </>
        ) : (
          // 🌙 Post expandido (visual idêntico à página Blog)
          <div className="expanded-post">
            <div className="expanded-header">
              {selectedPost.imagem && (
                <div className="expanded-image">
                  <img
                    src={selectedPost.imagem}
                    alt={selectedPost.titulo}
                  />
                </div>
              )}

              <h2 className="expanded-title">{selectedPost.titulo}</h2>
            </div>

            <div className="expanded-content">
              <p>{selectedPost.conteudo || selectedPost.texto}</p>
            </div>

            <div className="expanded-footer">
              <span className="post-meta">📅 Post recente</span>
              <Link to="/blog" className="back-btn">
                ⬅ Voltar ao Blog
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
      <BtnWhatsapp />
    </>
  );
}
