import { useState } from "react"

function Listings() {
  const [items] = useState([
    { id: 1, title: "Calculus Textbook", price: 40 },
    { id: 2, title: "Desk Lamp", price: 15 },
    { id: 3, title: "iClicker", price: 20 }
  ])

  return (
    <div>
      <h2>Listings</h2>

      {items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Listings
