import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMessage } from '../contexts/MessageContext';
import { UserContext } from "../App";
import '../styles/ProjectListPage.css';

const ProjectsListPage = () => {
    const { user } = useContext(UserContext);
    const { setMessage } = useMessage();
    const navigate = useNavigate();

    const handleCreateProject = () => {
        if(!user) {
            setMessage('Please log in to access this page');
            navigate('/login');
        } else {
            navigate('/create-project')
        }
    };

    return (
        <div className="projects-list-container">
            <h1 className="projects-title">Projects</h1>
            <p>Work in progress. This page will show a list of all projects.</p>
            <button className="create-project-button" onClick={handleCreateProject}>
                Create Project
            </button>
        </div>
    );
};

export default ProjectsListPage;
