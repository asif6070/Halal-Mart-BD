export default function Shop() {
  return (
    <main className="min-h-screen bg-green-50">
      
      {/* উপরের টাইটেল */}
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-green-800">আমাদের সব পণ্য</h1>
        <p className="text-lg text-gray-600 mt-2">যে কোন পণ্যের বিশ্বস্ত প্রতিষ্ঠান</p>
      </div>

      {/* 6 টা প্রোডাক্ট কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-10 max-w-6xl mx-auto">
        
        {/* প্রোডাক্ট 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-6xl">🍯</div>
          <h3 className="text-xl font-bold mt-2">খাঁটি মধু</h3>
          <p className="text-gray-600">১ কেজি - ৮০০ টাকা</p>
        </div>

        {/* প্রোডাক্ট 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-6xl">🫒</div>
          <h3 className="text-xl font-bold mt-2">জয়তুন তেল</h3>
          <p className="text-gray-600">৫০০ মিলি - ৬০০ টাকা</p>
        </div>

        {/* প্রোডাক্ট 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-6xl">🌴</div>
          <h3 className="text-xl font-bold mt-2">খেজুর</h3>
          <p className="text-gray-600">১ কেজি - ৫০০ টাকা</p>
        </div>

        {/* প্রোডাক্ট 4 */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center">
          <div className="text-6xl">🌰</div>
          <h3 class
