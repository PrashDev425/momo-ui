import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(CartContext);
    const { cartItem } = state;
    let cartdata = cartItem.reduce((acc, cur) => {
        acc.totalprice = acc.totalprice + cur.totalPrice * cur.qty;
        acc.totalquantity = acc.totalquantity + cur.qty;
        return acc;
    }, { totalprice: 0, totalquantity: 0 })
    return <div className="bg-gray-100 min-h-[600px]">
        {cartItem.length > 0 ? (
            <div className="flex">
                <div className="w-[65vw] space-y-4 p-5 m-10 mt-10">
                    {
                        cartItem.map((cart) => {
                            return (
                                <div key={cart.id} className="h-20 flex pr-4 justify-between items-center bg-white w-[95%]">
                                    <div className="flex items-center gap-3">
                                        <img className="h-20 w-20" src={cart.image} />
                                        <div>
                                            <h1 className="w-60 text-sm">{cart.name}</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <h1>Rs {cart.totalPrice}</h1>
                                        <button onClick={() => dispatch({ type: "DELETE", payload: cart.id })}><MdDelete /></button>
                                    </div>
                                    <div className="space-x-2 flex justify-center">
                                        <button onClick={() => dispatch({ type: "DECREMENT", payload: cart.id })} className="bg-gray-200 h-6 hover:bg-gray-100 w-7">-</button>
                                        <span className="w-7 text-sm h-6 text-center inline-block bg-gray-200">{cart.qty}</span>
                                        <button onClick={() => dispatch({ type: "INCREMENT", payload: cart.id })} className="bg-gray-200 h-6 hover:bg-gray-100 w-7">+</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr />
                    <button className="bg-red-900 p-2 text-white" onClick={() => dispatch({ type: "CLEARCART" })}>Clear Cart</button>
                </div>
                <div className="space-y-4 h-64 w-64 mt-5 p-1">
                    <h1 className="text-xl font-bold">
                        Order Summary
                    </h1>
                    <p className="text-sm flex justify-between">Subtotal ({cartdata.totalquantity} Item)</p>
                    <p className="text-sm flex justify-between"><span>Shipping Fee :</span> <span>Rs:0</span></p>
                    <div className="space-x-1">
                        <input className="border w-40 p-1 rounded-sm" type="text" placeholder="Enter Voucher Code" />
                        <button className="bg-blue-500 rounded-sm text-white w-20 p-1">Apply</button>
                    </div>
                    <p className="text-sm flex justify-between"><span>Total</span> <span>Rs.{cartdata.totalprice}</span></p>
                    <button onClick={() => navigate("/payment", { state: { totalPrice: cartdata.totalprice } })} className="bg-orange-900 text-white p-1 w-56 ml-2">Proceed to Checkout ({cartdata.totalquantity})</button>
                </div>
            </div>
        ) : <div className="w-96 flex flex-col justify-center items-center relative top-22 text-center m-auto">
            <img className="w-44" src="https://imgs.search.brave.com/_vp1PRaMICEKGWLDLFvgNWJW4hSow4w_K_aSJx8XP-g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZncmVwby5jb20v/c2hvdy80NDQ4NTkv/c2hvcHBpbmctY2Fy/dC5zdmc" />
            <h1>Cart is Empty</h1>
            <NavLink className="border border-orange-500 text-orange-500 font-medium p-2" to="/menu">Continue Shoping</NavLink>
        </div>}
    </div>
}

export default Cart;