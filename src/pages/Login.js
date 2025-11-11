import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For demo: just save name/email
    login({ name, email, orders: [], wishlist: [], payments: [], settings: {} });
    navigate('/account');
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login / Sign Up</h2>
      <input
        className="block w-full mb-3 border px-3 py-2 rounded"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="block w-full mb-3 border px-3 py-2 rounded"
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button className="bg-gold-600 text-white px-4 py-2 rounded" type="submit">
        Continue
      </button>
    </form>
  );
}