import { Link } from "react-router-dom"

function Home() {
  const categories = ["Electronics", "relics", "household"]

  return (
    <div>
      <h2>Welcome to the Marketplace</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/category/${cat}`}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Home