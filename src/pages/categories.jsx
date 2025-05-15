import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import SortForm from "../components/form"
import ItemCard from "../components/itemcard"

function Category() {
  const { name } = useParams()
  const [items, setItems] = useState([])
  const [sortBy, setSortBy] = useState("")

useEffect(() => {
  fetch(`https://nc-marketplace-1-xm97.onrender.com/api/items?category=${name}&sort_by=${sortBy}`)
    .then(res => res.json())
    .then(data => {
      console.log("API response:", data)
      if (!data.items) {
        setItems([])
        return
      }
      setItems(data.items)
    })
    .catch(err => {
      console.error("Error fetching items:", err)
    })
}, [name, sortBy])


  return (
    <div>
      <h2>{name} Items</h2>
      <SortForm sortBy={sortBy} setSortBy={setSortBy} />
      {items.map(item => (
        <ItemCard key={item.item_id} item={item} />
      ))}
    </div>
  )
}

export default Category