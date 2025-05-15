import { useParams } from "react-router-dom"
import { useState } from "react"

function PostItem() {
  const { name } = useParams()
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`https://nc-marketplace-1-xm97.onrender.com/api/items`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: name,
        title,
        price: Number(price),
        username: "demo_user"
      }),
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post New {name} Item</h2>
      <input type="text" placeholder="Item name" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <button type="submit">Post</button>
    </form>
  )
}

export default PostItem