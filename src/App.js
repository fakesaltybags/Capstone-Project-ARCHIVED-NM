import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProjectPage from './pages/ProjectPage.js';
import ProjectDetails from './pages/ProjectDetails.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
