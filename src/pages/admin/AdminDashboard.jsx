// src/pages/admin/AdminDashboard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { FaShoppingCart, FaUserGraduate, FaBook, FaConciergeBell } from 'react-icons/fa';

// Componentes de layout
import HeaderAdmin from '../../components/headerAdmin/headerAdmin'; // Supondo que este componente exista
import Footer from '../../components/footer/footer'; // Supondo que este componente exista

import './AdminDashboard.css';

// --- Dados de exemplo para os gráficos ---
const salesData = [
  { month: 'Jan', vendas: 4000 },
  { month: 'Fev', vendas: 3000 },
  { month: 'Mar', vendas: 5000 },
  { month: 'Abr', vendas: 4500 },
  { month: 'Mai', vendas: 6000 },
  { month: 'Jun', vendas: 5500 },
];

const studentData = [
  { name: 'Tarot', value: 400 },
  { name: 'Astrologia', value: 300 },
  { name: 'Numerologia', value: 300 },
  { name: 'Cristais', value: 200 },
];

const COLORS = ['#00aeff', '#ffd700', '#8884d8', '#82ca9d'];

// --- Animações do Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-page">
      <HeaderAdmin />
      
      <motion.main 
        className="dashboard-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="dashboard-header">
          <h1 className="dashboard-title">Painel Administrativo - Bola de Cristal</h1>
          <p className="dashboard-subtitle">Visão geral das estatísticas e controle do sistema.</p>
        </motion.div>

        {/* --- Cards de Estatísticas --- */}
        <motion.div variants={itemVariants} className="stats-grid">
          <div className="stat-card">
            <FaShoppingCart className="stat-icon" />
            <span className="stat-number">1,287</span>
            <span className="stat-label">Vendas</span>
          </div>
          <div className="stat-card">
            <FaUserGraduate className="stat-icon" />
            <span className="stat-number">3,450</span>
            <span className="stat-label">Alunos</span>
          </div>
          <div className="stat-card">
            <FaBook className="stat-icon" />
            <span className="stat-number">42</span>
            <span className="stat-label">Cursos</span>
          </div>
          <div className="stat-card">
            <FaConciergeBell className="stat-icon" />
            <span className="stat-number">98</span>
            <span className="stat-label">Serviços</span>
          </div>
        </motion.div>

        {/* --- Gráficos --- */}
        <motion.div variants={itemVariants} className="charts-grid">
          <div className="chart-container">
            <h3 className="chart-title">Vendas por Mês</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 215, 0, 0.1)" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(10, 11, 46, 0.8)', border: '1px solid #ffd700' }} />
                <Legend />
                <Bar dataKey="vendas" fill="#00aeff" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container">
            <h3 className="chart-title">Distribuição de Alunos</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={studentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {studentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(10, 11, 46, 0.8)', border: '1px solid #00aeff' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default AdminDashboard;
