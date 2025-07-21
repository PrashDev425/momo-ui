import { NavLink } from "react-router-dom";
import logo from '../assets/momo.svg';
import { FaFacebookF } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaInstagramSquare, FaRegUserCircle } from "react-icons/fa";

const Navigation = () => {
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
                <NavLink className="font-bold" to="/cart">Cart</NavLink>
                <NavLink className="font-bold" to="/login">Login</NavLink>
                <NavLink className="font-bold" to="/register">Register</NavLink>
                <button className="text-[#D95103] font-bold">Logout</button>
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
            </div>

            <div>
                <NavLink to="/profile"><FaRegUserCircle size={20} /></NavLink>
            </div>
        </div>
    );
};

export default Navigation;