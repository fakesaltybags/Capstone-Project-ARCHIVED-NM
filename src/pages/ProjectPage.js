import React, { useState } from 'react';
import '../styles/ProjectPage.css';
import CodeEditor from '../components/CodeEditor';

const ProjectPage = () => {
    const [code, setCode] = useState('');

    const handleCreate = () => {
        console.log('Create project', code);
    };

    const handleUpdate = () => {
        console.log('Update project', code);
    };

    const handleDelete = () => {
        console.log('Delete project', code);
    };

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    return (
        <div className="project-container">
            <h1 className="project-title">Project Page</h1>
            <div className="wip-box">
                <h2 className="wip-title">Code Editor (WIP)</h2>
                <p>This section will contain the code editor.</p>
                <CodeEditor
                    language='javascript'
                    theme='vs-dark'
                    onCodeChange={handleCodeChange}
                />
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
