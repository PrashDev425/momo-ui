import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";

function ProductDescription() {
  const { id } = useParams();
  const {dispatch} = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/recipes/${id}`);
      if (!response.ok) throw new Error("Failed to fetch product.");
      const data = await response.json();
      setProduct(data);
    } catch (err) {
      console.error(err);
      setError("Error loading product.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!product) return null;

  return (
    <div className="p-6 space-y-6">
      <div className="border rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            className="w-full rounded-md object-cover"
            src={product.image}
            alt={product.name || "Product Image"}
          />
        </div>

        <div className="flex-1 space-y-2">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-sm text-gray-600">Rating: {product.rating}/5</p>
          <p className="text-orange-600 font-bold text-lg">
            Rs. {product.caloriesPerServing}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span>Quantity:</span>
            <button className="px-2 border rounded">-</button>
            <span>1</span>
            <button className="px-2 border rounded">+</button>
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-orange-600 text-white px-4 py-2 rounded">
              Buy Now
            </button>
            <button onClick={()=> dispatch({type:"ADDTOCART",payload:product})} className="border border-orange-600 text-orange-600 px-4 py-2 rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <div className="text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Product Description</h2>
        <p>{product.instructions || "No description available."}</p>
      </div>
    </div>
  );
}

export default ProductDescription;
