import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-ivory p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-maasaiRed">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-deepBrown text-white px-4 py-2 rounded hover:bg-accentGold transition"
        >
          Logout
        </button>
      </div>
      <p className="text-deepBrown">Manage your products and inventory here.</p>
    </div>
  );
}
