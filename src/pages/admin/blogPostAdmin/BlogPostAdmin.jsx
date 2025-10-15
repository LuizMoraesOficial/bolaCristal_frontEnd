import React, { useState, useEffect } from "react";
import "./blogPostAdmin.css";
import HeaderAdmin from "../../../components/headerAdmin/headerAdmin.jsx";

const API_URL = "https://bolacristalbackend-1.onrender.com";

const BlogPostAdmin = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    conteudo: "",
    imagem: ""
  });

  const loadPosts = async () => {
    try {
      const res = await fetch(`${API_URL}/getPosts.php`);
      const data = await res.json();
      setPosts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Erro ao carregar posts:", err);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const savePost = async (e) => {
    e.preventDefault();
    const endpoint = currentPost ? "updatePost.php" : "savePost.php";
    const payload = currentPost ? { ...formData, id: currentPost.id } : formData;

    try {
      await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      closeModal();
      loadPosts();
    } catch (err) {
      console.error("Erro ao salvar post:", err);
    }
  };

  const handleDeletePost = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      await fetch(`${API_URL}/deletePost.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      loadPosts();
    }
  };

  const openModal = (post = null) => {
    if (post) {
      setCurrentPost(post);
      setFormData({
        titulo: post.titulo,
        descricao: post.descricao,
        conteudo: post.conteudo,
        imagem: post.imagem
      });
    } else {
      setCurrentPost(null);
      setFormData({ titulo: "", descricao: "", conteudo: "", imagem: "" });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPost(null);
    setFormData({ titulo: "", descricao: "", conteudo: "", imagem: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-dark text-white font-poppins">
      <HeaderAdmin />

      <main className="container mx-auto px-6 py-12 pt-32">
        <div className="text-center section-spacing">
          <h2 className="text-5xl font-orbitron text-neon-blue mb-5">
            Gerenciamento de Blog Posts
          </h2>
          <p className="text-xl text-subtitle">
            Crie, edite e organize seus posts facilmente.
          </p>
        </div>

        <div className="flex justify-end section-spacing">
          <button
            onClick={() => openModal()}
            className="btn-novo-post font-orbitron"
          >
            <span className="text-2xl">✨</span>
            Novo Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="card-glassmorphism card-enter p-7"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image flex justify-center">
                <img
                  src={post.imagem || "https://via.placeholder.com/200x120"}
                  alt={post.titulo}
                  className="w-32 h-20 object-cover rounded-md border border-cyan-400 shadow-md"
                />
              </div>

              <h3 className="text-2xl font-orbitron text-cyan-400 mb-3 leading-tight">
                {post.titulo}
              </h3>

              <p className="text-gray-300 text-base mb-6 leading-relaxed">
                {post.descricao}
              </p>

              <div
                className="button-group"
                style={{ justifyContent: "flex-end" }}
              >
                <button
                  onClick={() => openModal(post)}
                  className="btn-editar"
                  type="button"
                >
                  <span>✏️</span> Editar
                </button>
                <button
                  onClick={() => handleDeletePost(post.id)}
                  className="btn-excluir"
                  type="button"
                >
                  <span>🗑️</span> Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-2xl font-light">
              Nenhum post criado ainda. Clique em "Novo Post" para começar.
            </p>
          </div>
        )}
      </main>

      {isModalOpen && (
        <div className="modal-fullscreen">
          <div className="modal-form fixed-size-modal">
            <h3 className="text-4xl font-orbitron text-neon-blue mb-8">
              {currentPost ? "✏️ Editar Post" : "✨ Novo Post"}
            </h3>

            <form onSubmit={savePost} className="space-y-7">
              <div>
                <label
                  htmlFor="titulo"
                  className="block text-cyan-300 text-base font-semibold mb-3"
                >
                  Título do Post
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleInputChange}
                  className="input-neon"
                  placeholder="Digite o título do post"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="descricao"
                  className="block text-cyan-300 text-base font-semibold mb-3"
                >
                  Descrição Curta
                </label>
                <input
                  type="text"
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  className="input-neon"
                  placeholder="Uma breve descrição do post"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="conteudo"
                  className="block text-cyan-300 text-base font-semibold mb-3"
                >
                  Conteúdo
                </label>
                <textarea
                  id="conteudo"
                  name="conteudo"
                  value={formData.conteudo}
                  onChange={handleInputChange}
                  className="input-neon"
                  rows="14"
                  placeholder="Escreva o conteúdo completo do post aqui..."
                  required
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="imagem"
                  className="block text-cyan-300 text-base font-semibold mb-3"
                >
                  URL da Imagem (opcional)
                </label>
                <input
                  type="text"
                  id="imagem"
                  name="imagem"
                  value={formData.imagem}
                  onChange={handleInputChange}
                  className="input-neon"
                  placeholder="Cole a URL da imagem ou deixe em branco"
                />
                <p className="text-gray-400 text-sm mt-2">
                  💡 Deixe em branco para usar uma imagem placeholder
                </p>

                {formData.imagem && (
                  <div className="mt-4 image-preview-container">
                    <img
                      src={formData.imagem}
                      alt="Pré-visualização"
                      className="image-preview"
                    />
                  </div>
                )}
              </div>

              <div className="modal-button-group">
                <button
                  type="button"
                  onClick={closeModal}
                  className="btn-cancel"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn-save">
                  Salvar Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostAdmin;

