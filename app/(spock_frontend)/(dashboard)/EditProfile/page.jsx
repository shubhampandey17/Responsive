
"use client"
import React, { useState } from 'react';

const page = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');

  const updateUser = async () => {
    const apiToken = 'YOUR_API_TOKEN';
    const userId = 'USER_ID';

    const response = await fetch(`/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, position, location })
    });

    if (response.ok) {
      // Handle successful update (display message, potentially)
    } else {
      // Handle errors
    }
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Position" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button onClick={updateUser}>Update Profile</button>
    </div>
  );
};

export default page;