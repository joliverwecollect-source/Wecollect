import React, { useState } from "react";

export default function SignUpPage({ onSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if(username && password) {
      alert('Account created! Please log in.');
      onSignUp();
    } else {
      alert('Enter both username and password.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded" />
        <button onClick={handleSignUp} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Create Account</button>
      </div>
    </div>
  );
}
