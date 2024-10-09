import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

const Login = () => {
    return (
        <Authenticator>
            {({signOut, user}) => (
                <div>
                    <h2>Welcome, {user.username}</h2>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Login;
