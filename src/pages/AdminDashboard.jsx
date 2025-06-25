import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (!isLoggedIn) navigate('/admin');
    fetchProducts();
  }, [navigate]);

  const fetchProducts = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products/`);
    const data = await res.json();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    await fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}/`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCreate = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    fetchProducts();
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-ivory p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-maasaiRed">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-deepBrown text-white px-4 py-2 rounded hover:bg-accentGold transition">
          Logout
        </button>
      </div>

      <button onClick={handleCreate} className="mb-6 bg-maasaiRed text-white px-4 py-2 rounded hover:bg-accentGold transition">
        Add New Product
      </button>

      {showForm && (
        <ProductForm
          product={editingProduct}
          onSave={() => {
            setShowForm(false);
            fetchProducts();
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
            <h3 className="text-xl font-semibold text-maasaiRed">{product.name}</h3>
            <p>{product.description}</p>
            <p className="font-bold">Ksh {product.price}</p>
            <div className="flex gap-2 mt-4">
              <button onClick={() => handleEdit(product)} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
