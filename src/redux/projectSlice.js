import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProjectsFromAPI = async () => {
    return [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2'},
        { id: 3, name: 'Project 3'},
    ];
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await fetchProjectsFromAPI();
    return response;
});

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        status: 'idle',
        error: null
    },
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        updateProject: (state, action) => {
            const index = state.projects.findIndex(project => project.id === action.payload.id);
            if (index !== -1) {
                state.projects[index] = action.payload;
            }
        },
        removeProject: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setError: (state, action) => {
            state.status = 'succeeded';
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const {
    setProjects,
    addProject,
    updateProject,
    removeProject,
    setLoading,
    setError,
    clearError
} = projectSlice.actions;

export default projectSlice.reducer;
