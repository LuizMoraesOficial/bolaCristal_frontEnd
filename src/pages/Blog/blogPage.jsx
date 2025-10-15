import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp.jsx";
import "./blog.css";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // 👉 Busca os posts via PHP
  useEffect(() => {
    fetch("https://bolacristalbackend-1.onrender.com/getPosts.php")
      .then((res) => res.json())
      .then((data) => setPosts(data.reverse())) // posts mais recentes primeiro
      .catch((err) => console.error("Erro ao carregar posts:", err));
  }, []);

  return (
    <>
      <Header />
      <main className="blog-container">
        {!selectedPost ? (
          <>
            <h1 className="blog-title">Nosso Blog Místico ✨</h1>
            <p className="blog-subtitle">
              Explore artigos sobre tarot, astrologia e espiritualidade.
            </p>

            {posts.length > 0 ? (
              <div className="blog-grid">
                {posts.map((post) => {
                  const imageSrc = post.imagem || post.image || post.image_url;

                  return (
                    <div key={post.id} className="blog-card">
                      {imageSrc && (
                        <div className="blog-image">
                          <img
                            src={imageSrc}
                            alt={post.titulo}
                            style={{ width: "100%", borderRadius: "8px" }}
                          />
                        </div>
                      )}
                      <h2>{post.titulo}</h2>
                      <p>
                        {(post.conteudo || post.texto)?.substring(0, 120) + "..."}
                      </p>
                      <button
                        className="read-more-btn"
                        onClick={() => setSelectedPost(post)}
                      >
                        Ler mais
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="no-posts">Nenhum post publicado ainda 🔮</p>
            )}
          </>
        ) : (
          <div className="expanded-post">
            <button className="back-btn" onClick={() => setSelectedPost(null)}>
              ⬅ Voltar
            </button>

            {/* 🖼️ Exibe imagem (qualquer nome de campo) */}
            {(selectedPost.imagem ||
              selectedPost.image ||
              selectedPost.image_url) && (
              <div className="expanded-image">
                <img
                  src={
                    selectedPost.imagem ||
                    selectedPost.image ||
                    selectedPost.image_url
                  }
                  alt={selectedPost.titulo}
                  className="expanded-post-img"
                />
              </div>
            )}

            {/* 🧙‍♀️ Conteúdo do post */}
            <h2 className="expanded-title">{selectedPost.titulo}</h2>
            <p className="expanded-text">
              {selectedPost.conteudo || selectedPost.texto}
            </p>
          </div>
        )}
      </main>
      <Footer />
      <BtnWhatsapp />
    </>
  );
}
