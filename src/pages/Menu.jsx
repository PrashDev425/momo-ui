import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
        let response = await fetch("https://dummyjson.com/recipes");
        response = await response.json();
        console.log(response.recipes);
        setProduct(response.recipes);
    }
    useEffect(() => {
        getProduct();
    }, []);
    return (<div className="bg-gray-200">
        {product.length > 0 ? (<div className="flex flex-wrap justify-center gap-5 p-10">{product.map(x => {
            return (
                <div
                onClick={() => navigate(`/product-description/${x.id}`)}
                key={x.id} className="w-44 rounded-sm bg-white flex flex-col item-center">
                    <img className="object-cover" src={x.image} alt="" />
                    <h1 className="text-sm font-bold">{x.name}</h1>
                    <p className="text-orange-600 font-bold">{x.caloriesPerServing}</p>
                    <p className="text-sm">Rating: {x.rating}</p>
                </div>
            )
        })}</div>) : (<div>Loading...</div>)}
    </div>);
}

export default Menu;