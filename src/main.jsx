import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import UserManagement from './pages/UserMAnagement';
import QuestionForms from './pages/QuestionForms';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question-forms" element={<QuestionForms />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
