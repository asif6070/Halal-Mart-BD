export default function Home() {
  const products = [
    {id: 1, name: "প্রিমিয়াম আজওয়া খেজুর", price: "500 টাকা", img: "https://images.unsplash.com/photo-1574323347407-6e1ad6d020ab?w=300"},
    {id: 2, name: "খাঁটি সুন্দরবনের মধু", price: "1200 টাকা", img: "https://images.unsplash.com/photo-1587049352851-8d4eaf0177b2?w=300"},
    {id: 3, name: "তুর্কি জায়নামাজ", price: "800 টাকা", img: "https://images.unsplash.com/photo-1609599006353-e2fabbafc2e1?w=300"},
  ]

  const orderWhatsApp = (productName, price) => {
    const phone = "8801602124640" // 👈 তোমার নাম্বার ঠিক আছে
    const message = `আসালামু আলাইকুম Halal Mart
আমি এই প্রোডাক্টটি অর্ডার করতে চাই:

প্রোডাক্ট: ${productName}
দাম: ${price}

নাম:
ঠিকানা:
মোবাইল:`
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <main style={{padding: "20px", background: "#f5f5f5", minHeight: "100vh"}}>
      <h1 style={{color: "green", textAlign: "center", fontSize: "28px"}}>Halal Mart Bangladesh</h1>
      <p style={{textAlign: "center", color: "#555"}}>100% হাল প্রোডাক্ট</p>
      
      <div style={{display: "grid", gap: "15px", marginTop: "20px"}}>
      {products.map(p => (
        <div key={p.id} style={{background: "white", borderRadius: "12px", padding: "15px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"}}>
          <img src={p.img} alt={p.name} style={{width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px"}}/>
          <h2 style={{margin: "10px 0 5px 0"}}>{p.name}</h2>
          <p style={{fontWeight: "bold", color: "green", fontSize: "18px"}}>দাম: {p.price}</p>
          <button 
            onClick={() => orderWhatsApp(p.name, p.price)}
            style={{width: "100%", padding: "12px", background: "#25D366", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold"}}
          >
            📱 WhatsApp এ অর্ডার করুন
          </button>
        </div>
      ))}
      </div>
    </main>
  )
}
