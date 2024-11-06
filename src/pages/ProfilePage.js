import React, { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user, context.signOut]);
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const apiEndpoint = "https://ep75rj1c2f.execute-api.us-east-2.amazonaws.com/dev/users";

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        const fetchUserData = async () => {
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: user.userId }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                const userData = JSON.parse(data.body);
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [user, navigate]);

    const handleSignOut = () => {
        signOut();
    };

    const handleEditProfile = () => {
        navigate('/edit-profile');
    };

    return (
        <div className='profile-container'>
            <h1 className='profile-title'>Profile Page</h1>
            {userData ? (
                <>
                    <h2 className='profile-username'>Welcome, {userData.username}</h2>
                    <p className='profile-info'>Email: {userData.email}</p>
                    <button className='edit-profile-button' onClick={handleEditProfile}>
                        Edit Profile
                    </button>
                </>
            ) : (
                <p>Loading user data...</p>
            )}
            <button className='sign-out-button' onClick={handleSignOut}>
                Sign Out
            </button>
        </div>
    );
};

export default ProfilePage;
