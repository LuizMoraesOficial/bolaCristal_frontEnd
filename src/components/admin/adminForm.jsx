// src/components/admin/adminForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminInput from './adminInput';
import AdminButton from './adminButton';


const AdminForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simulação de validação
    if (email === 'admin@boladecristal.com' && password === '123456') {
      // Redireciona para o dashboard em caso de sucesso
      navigate('/admin/dashboard');
    } else {
      // Exibe mensagem de erro
      setError('E-mail ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <AdminInput
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <AdminInput
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <AdminButton type="submit">
        Entrar
      </AdminButton>
    </form>
  );
};

export default AdminForm;
