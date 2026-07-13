export default function Home() {
  const whatsappNumber = "8801602124640";
  const message = "আসসালামু আলাইকুম। আমি 'টাইম বুস্টার 500g' প্রোডাক্টটি 2500 টাকায় অর্ডার করতে চাই।";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{padding: "20px", backgroundColor: "#f0fdf4", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto"}}>
      <h1 style={{textAlign: "center", color: "#166534", fontSize: "28px", marginBottom: "5px"}}>Halal Mart Bangladesh</h1>
      <p style={{textAlign: "center", fontSize: "16px", marginBottom: "20px"}}>100% হাল প্রোডাক্ট</p>

      <div style={{border: "2px solid #22c55e", borderRadius: "15px", padding: "15px", backgroundColor: "white", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"}}>
        <img 
          src="/InShot_20260709_190552389.jpg"
          alt="টাইম বুস্টার" 
          style={{width: "100%", borderRadius: "10px"}}
        />
        <h2 style={{color: "#166534", marginTop: "15px", fontSize: "22px"}}>টাইম বুস্টার - ৫০০ গ্রাম</h2>
        <p style={{fontSize: "15px"}}>প্রকৃতির সাথে, সুস্থ জীবনের পথে</p>
        
        <div style={{margin: "15px 0"}}>
          <p>✅ 100% হারবাল ও নিরাপদ</p>
          <p>✅ 3 বছরের আস্থা</p>
          <p>✅ সারা দেশে হোম ডেলিভারি</p>
          <p>🎁 প্রথমে 7 দিনের স্যাম্পল</p>
        </div>
        
        <h3 style={{color: "red", fontSize: "28px", textAlign: "center", margin: "15px 0"}}>
          দাম: ২৫০০ টাকা
        </h3>
        
        <a href={whatsappLink} target="_blank" style={{
          display: "block", 
          backgroundColor: "#25D366", 
          color: "white", 
          textAlign: "center", 
          padding: "15px", 
          borderRadius: "10px", 
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "10px"
        }}>
          📱 WhatsApp এ অর্ডার করুন
        </a>
      </div>

      <p style={{textAlign: "center", marginTop: "20px", fontSize: "14px", color: "gray"}}>
        Halal Mart Bangladesh © 2026
      </p>
    </main>
  )
}
