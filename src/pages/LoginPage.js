import React, { useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

Amplify.configure(awsconfig);

const Login = () => {
    const navigate = useNavigate();

    const { user } = useAuthenticator((context) => [context.user]);

    useEffect(() => {
        if (user) {
            navigate('/profile');
        }
    }, [user, navigate]);

    return (
        <div className='login-container'>
            <Header />
            <div className='login-content'>
                <h2 className='welcome-message'>Welcome, {user ? user.username : 'Guest'}</h2>
            </div>
        </div>
    );
};

export default Login;
