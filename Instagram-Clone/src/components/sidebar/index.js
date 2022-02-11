import React from 'react';
import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
    const { user: { userId, username, fullName } } = useUser();
    // console.log(userId, username, fullName);

    return (
        <div className='p-4'>
            <User username={username} fullName={fullName} />
            <Suggestions userId={userId} />
        </div>
    );
}