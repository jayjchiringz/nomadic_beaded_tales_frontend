import { useState, useEffect } from "react";

export default function ProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        description: product.description || "",
        price: product.price || "",
        image: null,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.name);
    form.append("description", formData.description);
    form.append("price", formData.price);
    if (formData.image) form.append("image", formData.image);

    const method = product ? "PUT" : "POST";
    const endpoint = product
      ? `${process.env.REACT_APP_API_URL}/api/products/${product.id}/`
      : `${process.env.REACT_APP_API_URL}/api/products/`;

    const response = await fetch(endpoint, {
      method,
      body: form,
    });

    if (response.ok) {
      const data = await response.json();
      onSave(data);
      onCancel();
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow max-w-lg w-full mx-auto"
    >
      <h3 className="text-2xl font-bold text-maasaiRed mb-4">
        {product ? "Edit" : "Add"} Product
      </h3>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        required
        className="w-full p-2 mb-3 border rounded"
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 mb-3 border rounded"
      />

      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
        className="w-full p-2 mb-3 border rounded"
      />
      
      {product?.image && (
        <img
          src={product.image}
          alt="Current"
          className="w-full h-48 object-cover mb-3 rounded"
        />
      )}

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full p-2 mb-3 border rounded"
      />

      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-maasaiRed text-white px-4 py-2 rounded hover:bg-accentGold"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
