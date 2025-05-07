import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.config';
import { MdVerifiedUser } from "react-icons/md";
import DynamicTitle from '../Components/DynamicTitle';

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage('');
    setError(' ');

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
      });
      setUser({ ...auth.currentUser });

      setMessage('Profile updated successfully!');
      setEditMode(false);
    } catch (err) {
      console.error(err);
      setError(' Failed to update profile.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg gloria-hallelujah-font">

      <DynamicTitle title={'My_Profile'} />

      <h2 className="text-3xl font-bold text-center text-cyan-700 mb-8 flex justify-center ">My Profile <MdVerifiedUser /></h2>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">

        <div className="flex flex-col items-center">
          <img
            src={user?.photoURL || 'https://i.ibb.co/2kRj0kQ/default-user.png'}
            alt="Profile"
            className="profile-image w-40 h-40 rounded-full border object-cover"
          />
          <button
            onClick={() => setEditMode(!editMode)}
            className="mt-4 px-8 font-semibold  py-2 bg-cyan-500 border border-cyan-500 hover:bg-white hover:text-black text-white rounded "
          >
            {editMode ? 'Cancel Edit' : 'Edit Profile'}
          </button>
        </div>


        <div className="flex-1 w-full">
          <p className="mb-2 text-gray-500"><strong>Name:</strong> <span className='text-gray-600 text-lg'>{user?.displayName}</span></p>
          <p className="mb-2 text-lg text-gray-500"><strong>Email:</strong> <span className='text-gray-700'>{user?.email}</span></p>
          <p className="mb-2 text-gray-500"><strong>Photo URL:</strong> <span className='text-gray-700'>{user?.photoURL}</span></p>

          {editMode && (
            <form onSubmit={handleUpdate} className="mt-6 space-y-4">
              <div>
                <label className="block font-medium text-lg">Edit Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border-gray-300 rounded bg-gray-200 "
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Edit Photo URL:</label>
                <input
                  type="text"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                  className="w-full p-2 bg-gray-200 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
              >
                Save Changes
              </button>
              {message && <p className="text-green-600 mt-2">{message}</p>}
              {error && <p className="text-red-600 mt-2">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
