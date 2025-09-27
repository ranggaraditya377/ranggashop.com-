import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // ambil hook cart

export default function Dashboard() {
  const { addToCart } = useCart(); // ambil fungsi dari context

  const PRODUCTS = [
    { id: 1, name: "Pants", price: 200000, img: "/images/pants.png" },
    { id: 2, name: "T-Shirt", price: 100000, img: "/images/tshirt.png" },
    { id: 3, name: "Hat", price: 50000, img: "/images/hat.png" },
  ];

  return (
    <div className="px-6 py-4">
      <h1 className="text-5xl font-bold mb-6 text-center">DASHBOARD</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PRODUCTS.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Gambar Produk */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            {/* Detail Produk */}
            <div className="p-4">
              <h2 className="font-semibold text-lg">{item.name}</h2>
              <p className="text-gray-600 text-sm">
                Rp {item.price.toLocaleString()}
              </p>

              {/* Tombol Detail */}
              <Link
                to={`/product/${item.id}`}
                className="text-blue-600 hover:underline mt-3 inline-block"
              >
                Lihat Detail
              </Link>

              {/* Tombol Add to Cart */}
              <button
                onClick={() => addToCart(item)}
                className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors w-full"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
