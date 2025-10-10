// src/components/admin/adminInput.jsx

import React from 'react';

const AdminInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="admin-input"
      required
    />
  );
};

export default AdminInput;
