import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <SkeletonCard  />;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain"
      />

      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>

      <p className="text-gray-600 mt-2">
        Category: {product.category}
      </p>

      <p className="text-xl font-semibold mt-2">
        Price: ${product.price}
      </p>

      <p className="mt-4 text-gray-700">
        {product.description}
      </p>

      <p className="mt-2">
        Rating: {product.rating?.rate} ⭐ ({product.rating?.count})
      </p>
    </div>
  );
};

export default ProductDetails;
