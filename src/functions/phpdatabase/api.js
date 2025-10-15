// Exemplo: /frontend/src/functions/phpdatabase/api.js
const API_URL = "https://bolacristalbackend-1.onrender.com/";

export const getPosts = async () => {
  const res = await fetch(`${API_URL}getPosts.php`);
  return await res.json();
};

export const savePost = async (post) => {
  await fetch(`${API_URL}savePost.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

export const updatePost = async (post) => {
  await fetch(`${API_URL}updatePost.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
  });
};

export const deletePost = async (id) => {
  await fetch(`${API_URL}deletePost.php?id=${id}`, {
    method: "DELETE",
  });
};
