export default function Home() {
  const products = [
    {
      id: 1,
      name: "টাইম বুস্টার",  // ✅ নাম চেঞ্জ
      price: "2500",
      image: "/InShot_20260709_190552389.jpg",
      desc: "100% হারবাল ও নিরাপদ। কোনো পার্শ্বপ্রতিক্রিয়া নেই।"
    },
    {
      id: 2,
      name: "প্রিমিয়াম মধু",
      price: "1200",
      image: "/InShot_20260709_190552389.jpg",
      desc: "সুন্দরবনের খাঁটি মধু। 100% ন্যাচারাল।"
    },
    {
      id: 3,
      name: "কালোজিরা তেল",
      price: "800",
      image: "/InShot_20260709_190552389.jpg",
      desc: "চুল পড়া বন্ধ করে। নতুন চুল গজায়।"
    }
  ];

  return (
    <main className="min-h-screen bg-green-50 p-4">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-8">
        Halal Mart BD
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg p-4 border-2 border-green-200">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-bold text-green-800 mb-2">{product.name}</h2>
            <p className="text-gray-600 text-base mb-3">{product.desc}</p>
            <p className="text-3xl font-bold text-red-600 mb-4">দাম: {product.price} টাকা</p>
            
            <a 
              href="https://wa.me/8801602124640" 
              target="_blank"
              className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-bold text-lg mb-2"
            >
              📱 WhatsApp এ অর্ডার করুন
            </a>

            <a 
              href="tel:01602124640"
              className="block w-full bg-pink-500 text-white text-center py-3 rounded-xl font-bold text-lg"
            >
              💰 বিকাশ: 01602124640
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
