import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with proper API call or hardcoded password check
    if (password === 'ChangeThis123') {
      localStorage.setItem('admin_logged_in', 'true');
      onLogin(); // Redirect handled in App.jsx
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-maasaiRed text-center">Admin Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Admin Password"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-maasaiRed text-white py-2 rounded hover:bg-accentGold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
