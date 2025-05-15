function ItemCard({ item }) {
  console.log("Item:", item)
  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
      {item.image_url && <img src={item.image_url} alt={item.title} width={150} />}
      <p>Listed by: {item.username}</p>
    </div>
  )
}
export default ItemCard