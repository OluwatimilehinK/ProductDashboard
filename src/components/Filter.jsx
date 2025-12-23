const Filter = ({ search, setSearch }) => {
  return (
    <div>
      <select
        className="w-full border p-2 rounded-lg"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      >
        <option value="">All categories</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  )
}

export default Filter
