import React, { useEffect, useContext } from 'react';
import { useAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { useNavigate } from 'react-router-dom';
import { useMessage } from '../contexts/MessageContext';
import '../styles/LoginPage.css'
import { UserContext } from '../App';

Amplify.configure(awsconfig);

const Login = () => {
    const navigate = useNavigate();
    const { user } = useAuthenticator((context) => [context.user]);
    const { message, setMessage } = useMessage();
    const { user: globalUser, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setUser(user);
            navigate('/profile');
        }
        if (message) {
            alert(message);
            setMessage('');
        }
    }, [user, navigate, message, setMessage, setUser]);

    return (
        <div className='login-container'>
            {globalUser ? (
                <div className='login-content'>
                    <h2 className='welcome-message'>Welcome, {user ? user.username : 'Guest'}</h2>
                </div>
            ) : (
                <Authenticator />
            )}
        </div>
    );
};

export default Login;
