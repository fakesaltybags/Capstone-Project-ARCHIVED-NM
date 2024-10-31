import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
import LoginPage from './pages/LoginPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import ProfilePage from './pages/ProfilePage.js';
import AuthenticatorWrapper from './components/AuthenticatorWrapper.js';
import AdminPage from './pages/AdminPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/login" element={<AuthenticatorWrapper><LoginPage /></AuthenticatorWrapper>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<AuthenticatorWrapper><ProfilePage /></AuthenticatorWrapper>} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
