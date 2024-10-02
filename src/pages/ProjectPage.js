import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../redux/projectSlice';

const ProjectPage = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects.items);

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectPage;
