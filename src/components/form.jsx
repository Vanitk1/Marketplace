function Form({ sortBy, setSortBy }) {
    return (
        <form>
            <label>Sort by:</label>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}>

                <option value="price">Price</option>
            </select>
        </form>
    )
}

export default Form