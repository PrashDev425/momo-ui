import { NavLink } from "react-router-dom";
import logo from '../assets/momo.svg';
import { FaFacebookF } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaInstagramSquare, FaRegUserCircle } from "react-icons/fa";
import { CartContext } from "../contexts/CartProvider";
import { useContext, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
const Navigation = () => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();
    const [isShow, setIsShow] = useState(false);
    const { state } = useContext(CartContext);
    const { cartItem } = state;
    let totalQty = cartItem.reduce((acc, item) => {
        return acc + item.qty;
    }, 0)
    return (
        <div className="border flex items-center justify-around p-2 text-sm">

            <div className="flex items-center gap-1">
                <img className="w-8" src={logo} alt="Momos Logo" />
                <NavLink to="/" className="text-[#0C6967] font-extrabold">Momos</NavLink>
            </div>

            <div className="space-x-5">
                <NavLink className="font-bold" to="/about">About Us</NavLink>
                <NavLink className="font-bold" to="/menu">Our Menu</NavLink>
                <NavLink className="font-bold" to="/services">Services</NavLink>
                <NavLink className="font-bold" to="/allergy-advice">Allergy Advice</NavLink>
                {/* <NavLink className="font-bold" to="/login">Login</NavLink>
                <NavLink className="font-bold" to="/register">Register</NavLink> */}
                <NavLink className="font-bold" to="/demo">demo</NavLink>
                <button className="text-[#D95103] font-bold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
            </div>

            <div className="flex items-center gap-2">
                <NavLink to="https://facebook.com" target="_blank"><FaFacebookF size={20} /></NavLink>
                <NavLink to="https://tiktok.com" target="_blank"><RiTiktokFill size={20} /></NavLink>
                <NavLink to="https://instagram.com" target="_blank"><FaInstagramSquare size={20} /></NavLink>
                <NavLink
                    to="/contact"
                    className="bg-[#D95103] px-3 py-1 text-white rounded-3xl"
                >
                    Contact
                </NavLink>
                <NavLink className="" to="/cart">
                    <p className="bg-gray-200 w-4 h-4 relative top-1 left-1 rounded-2xl text-[10px] text-center">
                        {totalQty}
                    </p>
                    <IoMdCart size={20} color="red" />
                </NavLink>
            </div>

            <div className="relative" onClick={() => setIsShow(!isShow)}>
                {isAuthenticated ? (<NavLink to="/profile"><img className="h-7 w-7 rounded-fill" src={user?.picture} alt="" /></NavLink>) : (<FaRegUserCircle size={20} />)}
                {isShow && (
                    <div className="absolute flex flex-col p-3 z-50 bg-gray-200 shadow-2xl rounded-2xl">
                        {isAuthenticated ? (
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                        ) : (
                            <div>
                                <NavLink to="login">Login</NavLink>
                                <br/>
                                <NavLink to="register">Register</NavLink>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navigation;