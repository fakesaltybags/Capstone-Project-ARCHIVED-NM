import React from 'react';
import '../styles/ProjectPage.css';
import Header from '../components/Header';

const ProjectPage = () => {
    const handleCreate = () => {
        console.log('Create project');
    };

    const handleUpdate = () => {
        console.log('Update project');
    };

    const handleDelete = () => {
        console.log('Delete project');
    };

    return (
        <div className="project-container">
            <Header />
            <h1 className="project-title">Project Page</h1>
            <div className="wip-box">
                <h2 className="wip-title">Code Editor (WIP)</h2>
                <p>This section will contain the code editor.</p>
                {/* WIP Code Editor */}
                <textarea className="code-editor" placeholder="Write your code here..."></textarea>
            </div>
            <div className="button-container">
                <button className="project-button" onClick={handleCreate}>Create Project</button>
                <button className="project-button" onClick={handleUpdate}>Update Project</button>
                <button className="project-button" onClick={handleDelete}>Delete Project</button>
            </div>
        </div>
    );
};

export default ProjectPage;
