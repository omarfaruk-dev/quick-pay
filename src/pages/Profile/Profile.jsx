import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { updateProfile } from 'firebase/auth';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
        address: user.address || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    const handleUpdate = async () => {
        try {
            await updateProfile(user, {
                displayName: editedData.displayName,
                photoURL: editedData.photoURL
            });

            // যদি অ্যাড্রেস আলাদা ভাবে ইউজ করা হয় (Custom Claims বা DB), তখন সেটাও হ্যান্ডেল করো।
            user.address = editedData.address;

            alert('Profile updated successfully!');
            setIsEditing(false);
        } catch (error) {
            console.error('Update failed:', error);
            alert('Failed to update profile');
        }
    };

    const handleCancel = () => {
        setEditedData({
            displayName: user.displayName,
            photoURL: user.photoURL,
            address: user.address || '',
        });
        setIsEditing(false);
    };

    return (
        <div className="min-h-[calc(100vh-361px)] flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <img
                        src={editedData.photoURL}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border-4 border-blue-700 shadow-md mb-4"
                    />
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="displayName"
                                value={editedData.displayName}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-3xl px-4 py-2 text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-700 mb-2"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="photoURL"
                                value={editedData.photoURL}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-3xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-700 mb-4"
                                placeholder="Photo URL"
                            />
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold text-blue-800">{user.displayName}</h2>
                            <p className="text-sm text-gray-600 mb-6">{user.email}</p>
                        </>
                    )}
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="text-sm text-blue-700 font-semibold">Address</p>
                        {isEditing ? (
                            <input
                            type="text"
                            name="address"
                            value={editedData.address}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-700"
                            placeholder="Address"
                          />
                        ) : (
                            <p className="text-gray-800">{user.address || 'N/A'}</p>
                        )}
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

                <div className="mt-6 flex justify-center space-x-4">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleUpdate}
                                className="px-6 py-2 rounded-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleCancel}
                                className="px-6 py-2 rounded-full bg-gray-300 text-gray-800 font-semibold hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white font-semibold hover:from-purple-700 hover:to-blue-700 transition"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
