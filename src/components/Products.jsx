import {useEffect, useState } from "react"
import Filter from "./Filter"


const Products = () => {
    const [card, setCard] = useState([])
    const [search, setSearch] = useState("")
    const [openId, setOpenId] = useState(null)

  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((products) => setCard(products))
        .catch((err) => err)
    }, [])


  return (
    <main>
    <Filter search={search} setSearch={setSearch} />
    <div className="flex flex-wrap aspect-square gap-4 justify-center">
        {card.filter((item)=>{
            return search.toLocaleLowerCase() === "" ? item : item.category.toLocaleLowerCase().includes(search)
        }).map((item)=>(
        <div key={item.id} className="shadow-lg w-100 rounded-lg p-2">
          <img src={item.image} alt="product image" className="aspect-square object-contain" />
          <h2 className="font-bold">Product: {item.title}</h2>
          <p className="font-semibold text-stone-600">Category: {item.category}</p>
          <p className="font-semibold text-stone-600">Price: ${item.price}</p>
          <p className="font-semibold text-stone-600"> Ratings: {item.rating?.count} - {item.rating?.rate}</p>
          {openId === item.id && (
            <p className="text-stone-600">
                Description: {item.description}
            </p>
            )}

          <button
        onClick={() =>
            setOpenId(openId === item.id ? null : item.id)
        }
        className="text-blue-500"
        >
        {openId === item.id ? "Show less" : "Show Details"}
        </button>


          
        </div>
     ))}
    </div>
    </main>
  )
}

export default Products