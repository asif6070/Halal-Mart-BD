export default function Home() {
  const whatsappNumber = "8801602124640";
  const message = "আসসালামু আলাইকুম। আমি 'টাইম বুস্টার' সম্পর্কে জানতে চাই";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{padding: "20px", backgroundColor: "#f0fdf4", minHeight: "100vh"}}>
      <h1 style={{textAlign: "center", color: "#166534"}}>টাইম বুস্টার</h1>
      <p style={{textAlign: "center", fontSize: "18px"}}>পুরুষের গোপন সমস্যার 100% হারবাল সমাধান</p>

      <div style={{border: "2px solid #22c55e", borderRadius: "15px", padding: "10px", margin: "20px 0"}}>
        <img
          src="/InShot_20260709_190552389.jpg"
          alt="টাইম বুস্টার"
          style={{width: "100%", borderRadius: "10px"}}
        />
      </div>

      <h2 style={{color: "#166534", marginTop: "20px"}}>কেন আমাদের প্রোডাক্ট সেরা?</h2>
      <p style={{fontSize: "15px"}}>প্রকৃতির সেরা উপাদান দিয়ে তৈরি। কোনো পার্শ্বপ্রতিক্রিয়া নেই।</p>

      <div style={{margin: "15px 0"}}>
        <p>✅ 100% হারবাল ও নিরাপদ</p>
        <p>✅ 3 বছরের আস্থা</p>
        <p>✅ সারা দেশে হোম ডেলিভারি</p>
        <p>🎁 প্রথমে 7 দিনের স্যাম্পল</p>
      </div>

      <h3 style={{color: "red", fontSize: "24px", textAlign: "center"}}>
        দাম: 2500 টাকা
      </h3>

      <a href={whatsappLink} target="_blank"
        style={{
          display: "block",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px",
          textAlign: "center",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "bold",
          marginTop: "20px"
        }}
      >
        📲 WhatsApp এ অর্ডার করুন
      </a>
    </main>
  )
}
