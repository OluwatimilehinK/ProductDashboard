
const Filter = ({search, setSearch}) => {
    
  return (
    <div>
        <input type="text" placeholder='search categories...' className='w-full p-2 border rounded-lg font-semibold' value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Filter