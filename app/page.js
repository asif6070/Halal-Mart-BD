export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      
      {/* Banner Section */}
      <div className="bg-green-800 text-white text-center py-16 px-4">
        <h1 className="text-5xl font-bold mb-4">Halal Mart BD</h1>
        <p className="text-xl">যে কোন পণ্যের বিশ্বস্ত প্রতিষ্ঠান</p>
        <a 
          href="/shop"
          className="inline-block mt-6 bg-white text-green-800 px-8 py-3 rounded-full font-bold text-lg"
        >
          সব পণ্য দেখুন
        </a>
      </div>

    </main>
  );
}
