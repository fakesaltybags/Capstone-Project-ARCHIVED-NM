import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
import LoginPage from './pages/LoginPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import ProfilePage from './pages/ProfilePage.js';
import AdminPage from './pages/AdminPage.js';
import ProjectsListPage from './pages/ProjectListPage.js';
import Header from './components/Header.js';
import { MessageProvider } from './contexts/MessageContext.js';

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  return (
    <MessageProvider>
      <Authenticator.Provider>
        <UserContext.Provider value={{ user, setUser }}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/projects' element={<ProjectsListPage />} />
              <Route path="/create-project" element={<ProjectPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </Authenticator.Provider>
    </MessageProvider>
  );
}

export default App;
