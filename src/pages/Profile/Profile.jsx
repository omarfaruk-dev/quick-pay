import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {

    const { user } = use(AuthContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-purple-50 px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-blue-700 shadow-md mb-4"
                    />
                    <h2 className="text-2xl font-bold text-blue-800">{user.displayName}</h2>
                    <p className="text-sm text-gray-600 mb-6">{user.email}</p>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-blue-700 font-semibold">Address</p>
                        <p className="text-gray-800">{user.address}</p>
                    </div>
                    <div>
                        <p className="text-sm text-blue-700 font-semibold">Last Sign In</p>
                        <p className="text-gray-800">{user.metadata.lastSignInTime}</p>
                    </div>
                    <div>
                        <p className="text-sm text-blue-700 font-semibold">Member Since</p>
                        <p className="text-gray-800">{user.metadata.creationTime}</p>
                    </div>

                </div>

                <div className="mt-6 flex justify-center">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition">
                        Edit Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;