// src/pages/frontpages/Cart.jsx
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();
  const navigate = useNavigate();

  // Hitung total harga
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="px-6 py-4">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow-sm"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Rp {item.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <select
                  value={item.qty}
                  onChange={(e) =>
                    updateQty(item.id, parseInt(e.target.value))
                  }
                  className="border px-2 py-1 rounded"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          {/* Bagian Total + Checkout */}
          <div className="flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">
              Total: Rp {total.toLocaleString()}
            </h2>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
