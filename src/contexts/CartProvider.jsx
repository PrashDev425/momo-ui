import { createContext, useReducer } from "react";
import { Bounce, toast } from "react-toastify";

export const CartContext = createContext()

const initialState = {
    cartItem: [],
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADDTOCART":
            {
                const isExist = state.cartItem.find(x => x.id == action.payload.id);
                if (isExist) {
                    return state;
                } else {
                    const newProduct = { ...action.payload, qty: 1, price: 560, totalPrice: 560 };
                    const newCartItem = [...state.cartItem, newProduct];
                    toast.success(`${action.payload.name} added to cart.`, {
                        position: "bottom-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });
                    return {
                        cartItem: newCartItem
                    };
                }
            }
        case "INCREMENT":
            {
                const updatedCart = state.cartItem.map(item =>
                    item.id === action.payload
                        ? { ...item, qty: item.qty + 1, totalPrice: (item.qty + 1) * item.price }
                        : item
                );
                return { cartItem: updatedCart };
            }
        case "DECREMENT": {
            const updatedCart = state.cartItem.map(item => {
                if (item.id === action.payload && item.qty > 1) {
                    return {
                        ...item,
                        qty: item.qty - 1,
                        totalPrice: (item.qty - 1) * item.price
                    };
                } else {
                    return item;
                }
            });
            return { cartItem: updatedCart };
        }

        case "DELETE":
            {
                const updatedCart = state.cartItem.filter(item => item.id !== action.payload);
                toast.success(`${action.payload.name} deleted from cart.`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return { cartItem: updatedCart }
            }
        case "CLEARCART":
            {
                toast.success(`All cart items cleared.`, {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return { cartItem: [] }
            }
        default:
            {
                return state;
            }
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext value={{ state, dispatch }}>
            {children}
        </CartContext>
    );
}