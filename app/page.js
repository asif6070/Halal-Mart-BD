export default function Home() {
  const products = [
    {id: 1, name: "প্রিমিয়াম খেজুর", price: "500 টাকা"},
    {id: 2, name: "খাঁটি মধু", price: "1200 টাকা"},
    {id: 3, name: "তুর্কি জায়নামাজ", price: "800 টাকা"},
  ]

  return (
    <main style={{padding: "20px", textAlign: "center"}}>
      <h1 style={{color: "green"}}>Halal Mart Bangladesh</h1>
      
      {products.map(p => (
        <div key={p.id} style={{border: "1px solid #ddd", margin: "10px", padding: "10px", borderRadius: "8px"}}>
          <h2>{p.name}</h2>
          <p><b>দাম: {p.price}</b></p>
          <button>কার্টে যোগ করুন</button>
        </div>
      ))}
    </main>
  )
        }
