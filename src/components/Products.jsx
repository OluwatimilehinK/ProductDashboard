import {useEffect, useState } from "react"
import Filter from "./Filter"
import SkeletonCard from "./SkeletonCard"



const Products = () => {
    const [card, setCard] = useState([])
    const [search, setSearch] = useState("")
    const [openId, setOpenId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


  
    useEffect(() => {
      setIsLoading(true);

      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((products) => {
          setCard(products);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });
    }, []);





  return (
    <main>
    <Filter search={search} setSearch={setSearch} />   
    <div className="flex flex-wrap aspect-square gap-4 justify-center">
  {isLoading ? Array.from({length: 9}).map((_, index) => <SkeletonCard key={index} />) : card.filter((item) => search.toLowerCase() === "" ? item : item.category.toLowerCase().includes(search)
      )
      .slice()
      .sort((a, b) => a.price - b.price) // LOW → HIGH
      .map((item) => (
          <div key={item.id} className="shadow-lg w-full md:w-100 rounded-lg p-2">
            <img
              src={item.image}
              alt="product image"
              className="aspect-square object-contain"
            />
            <h2 className="font-bold">Product: {item.title}</h2>
            <p className="font-semibold text-stone-600">
              Category: {item.category}
            </p>
            <p className="font-semibold text-stone-600">
              Price: ${item.price}
            </p>
            <p className="font-semibold text-stone-600">
              Ratings: {item.rating?.count} - {item.rating?.rate}
            </p>

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

    {/* </div> */}
    </main>
  )
}

export default Products