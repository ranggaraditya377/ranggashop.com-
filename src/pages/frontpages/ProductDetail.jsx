import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const PRODUCTS = [
    { id: 1, name: "Pants", price: 200000, img: "/images/pants.png" },
    { id: 2, name: "T-Shirt", price: 100000, img: "/images/tshirt.png" },
    { id: 3, name: "Hat", price: 50000, img: "/images/hat.png" },
  ];

  const product = PRODUCTS.find((p) => p.id === Number(id));

  // State untuk review
  const [reviews, setReviews] = useState([
    { rating: 5, text: "Barang bagus!" },
    { rating: 4, text: "Lumayan oke" },
  ]);
  const [rating, setRating] = useState(0);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && text.trim() !== "") {
      setReviews([...reviews, { rating, text }]);
      setRating(0);
      setText("");
    }
  };

  if (!product) {
    return <p>Produk tidak ditemukan</p>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Bagian kiri - produk */}
      <div className="flex-1 border rounded-lg p-4 shadow">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Rp {product.price.toLocaleString()}</p>
        <img src={product.img} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />

        {/* Review List */}
        <h3 className="font-semibold mb-2">User Reviews</h3>
        <div className="space-y-2">
          {reviews.map((r, i) => (
            <div key={i} className="border rounded-lg p-2">
              <p>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian kanan - form review */}
      <div className="w-full md:w-1/3 border rounded-lg p-4 shadow">
        <h3 className="font-semibold mb-2">Reviews</h3>
        <p className="mb-1">Rating:</p>
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border rounded-lg p-2 mb-3"
            placeholder="Tulis pengalaman Anda..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
