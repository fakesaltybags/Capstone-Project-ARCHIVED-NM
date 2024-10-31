import React from 'react';
import '../styles/AdminPage.css';

const AdminPage = () => {
    const handleCreate = () => {
        console.log("Create project clicked");
    };

    const handleRead = () => {
        console.log("Read projects clicked");
    };

    const handleUpdate = () => {
        console.log("Update project clicked");
    };

    const handleDelete = () => {
        console.log("Delete project clicked");
    };

    return (
        <div className='admin-container'>
            <h1>Admin Controls</h1>
            <div className='button-group'>
                <button className='admin-button' onClick={handleCreate}>Create Project</button>
                <button className='admin-button' onClick={handleRead}>View Projects</button>
                <button className='admin-button' onClick={handleUpdate}>Update Project</button>
                <button className='admin-button' onClick={handleDelete}>Delete Project</button>
            </div>
            <p>This page is for admin use only.</p>
        </div>
    )
}

export default AdminPage;
