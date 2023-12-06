import { NavLink } from "react-router-dom";
import "./Nav.css"

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/productsDisplay'>All Products</NavLink></li>
    <li><NavLink to='/ProductsByCategory'>Search category</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    <li>Register</li>
    <li>My Cart</li>
    <li>Weekly offers</li>
    </>
    return (
        <div id="sidebar" className="h-full min-h-screen relative">
            <nav className="">
                <ul className="space-y-5 pt-2 px-4">
                    {navLinks}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;