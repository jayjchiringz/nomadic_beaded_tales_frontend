import { useEffect, useState } from 'react';

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  // Placeholder fetch (backend hook ready)
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/products/`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="py-12 bg-ivory text-deepBrown">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-maasaiRed text-outline-gold">
          Featured Ornaments
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-maasaiRed mb-2">{product.name}</h3>
                <p className="text-sm mb-2">{product.description}</p>
                <p className="text-lg font-bold text-deepBrown mb-2">Ksh {product.price}</p>
                <button className="bg-maasaiRed hover:bg-accentGold text-white py-2 px-4 rounded shadow">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
