// src/components/admin/adminButton.jsx

import React from 'react';

const AdminButton = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="admin-button"
    >
      {children}
      <span className="shine-effect"></span>
    </button>
  );
};

export default AdminButton;
