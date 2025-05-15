function ItemCard({ item }) {
  return (
    <div className="item-card">
      <h3>{item.item_name}</h3>
      <p>{item.description}</p>
      <p>Price: £{item.price}</p>
      {item.img_url && <img src={item.img_url} alt={item.item_name} width={150} />}
      <p>Listed by: {item.seller_name}</p>
    </div>
  )
}
export default ItemCard