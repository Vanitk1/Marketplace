import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "../components/form";
import ItemCard from "../components/itemcard";

function Category() {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("");

useEffect(() => {
  const formattedCategory = name.charAt(0).toUpperCase() + name.slice(1);
  const url = `https://nc-marketplace-1-xm97.onrender.com/api/items?category=${formattedCategory}&sort_by=${sortBy}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
  const filtered = data.items.filter(item => item.category_name === formattedCategory)
  setItems(filtered);
})
    .catch(err => {
      console.error("Error fetching items:", err);
    });
}, [name, sortBy]);

  return (
    <div>
      <h2>{name.charAt(0).toUpperCase() + name.slice(1)} Items</h2>
      <Form sortBy={sortBy} setSortBy={setSortBy} />
      {items.map(item => (
        <ItemCard key={item.item_id} item={item} />
      ))}
    </div>
  );
}

export default Category;
