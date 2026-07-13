export default function Shop() {
  const products = [
    { id: 1, name: "টাইম বুস্টার", price: "2500", image: "/InShot_20260709_190552389.jpg" },
    { id: 2, name: "প্রিমিয়াম মধু", price: "1200", image: "/InShot_20260709_190552389.jpg" },
    { id: 3, name: "কালোজিরা তেল", price: "800", image: "/InShot_20260709_190552389.jpg" },
    { id: 4, name: "খেজুর", price: "600", image: "/InShot_20260709_190552389.jpg" },
    { id: 5, name: "ঘি", price: "1500", image: "/InShot_20260709_190552389.jpg" },
    { id: 6, name: "চিয়া সিড", price: "900", image: "/InShot_20260709_190552389.jpg" },
  ];

  return (
    <main className="min-h-screen bg-green-50 p-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">আমাদের সব পণ্য</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg p-4">
            <img src={product.image} className="w-full h-32 object-cover rounded-xl mb-3" />
            <h2 className="text-xl font-bold text-green-800">{product.name}</h2>
            <p className="text-2xl font-bold text-red-600 my-2">{product.price} টাকা</p>
            <a href="<a 
  href="/shop"
  className="inline-block mt-6 bg-white text-green-800 px-8 py-3 rounded-full font-bold text-lg"
>
  সব পণ্য দেখুন
</a>" target="_blank" className="block bg-green-500 text-white text-center py-2 rounded-lg font-bold">
              অর্ডার করুন
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
