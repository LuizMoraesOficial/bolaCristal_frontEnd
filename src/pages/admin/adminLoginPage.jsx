// src/pages/admin/adminLoginPage.jsx

import React from 'react';
import AdminLogo from '../../components/admin/adminLogo';
import AdminForm from '../../components/admin/adminForm';
import './adminLoginPage.css';

const AdminLoginPage = () => {
  return (
    <div className="admin-login-page">
      <div className="glass-container">
        <AdminLogo />
        <AdminForm />
      </div>
    </div>
  );
};

export default AdminLoginPage;
