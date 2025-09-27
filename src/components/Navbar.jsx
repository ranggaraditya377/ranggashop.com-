import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ambil context

export default function Navbar() {
  const { cart } = useCart(); // ambil state cart

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg px-8 py-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur-md">
      {/* Logo */}
      <Link
        to="/"
        className="font-extrabold text-2xl tracking-wide hover:scale-105 transition-transform duration-300"
      >
        RANGGA
      </Link>

      {/* Menu Navigasi (Tengah) */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-10 text-lg font-medium">
          <Link
            to="/dashboard"
            className="relative group hover:text-yellow-300 transition-colors duration-300"
          >
            Dashboard
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Keranjang dengan badge */}
          <Link
            to="/cart"
            className="relative group hover:text-green-300 transition-colors duration-300"
          >
            Keranjang
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            )}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/checkout"
            className="relative group hover:text-pink-300 transition-colors duration-300"
          >
            Checkout
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-300 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </div>

      {/* Search Bar (Kanan) */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Cari produk..."
          className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      </div>
    </nav>
  );
}
