// src/pages/frontpages/Checkout.jsx
import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  // Hitung total harga
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-700">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Formulir Data Pembeli */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Data Pembeli
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama Anda"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="contoh@email.com"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Alamat</label>
              <textarea
                rows="3"
                placeholder="Masukkan alamat lengkap"
                className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Metode Pembayaran</label>
              <select className="w-full border rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-indigo-400 outline-none">
                <option>Transfer Bank</option>
                <option>COD (Bayar di Tempat)</option>
                <option>OVO / GoPay / Dana</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Konfirmasi Pesanan
            </button>
          </form>
        </div>

        {/* Ringkasan Pesanan */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            Ringkasan Pesanan
          </h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Keranjang kosong.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      {item.qty} x Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-bold">
                    Rp {(item.price * item.qty).toLocaleString()}
                  </p>
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-between items-center border-t pt-4">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-extrabold text-indigo-700">
                  Rp {total.toLocaleString()}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
