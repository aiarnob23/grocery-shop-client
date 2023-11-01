import { NavLink } from "react-router-dom";
import "./Nav.css"

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/categories'>Categories</NavLink></li>
    <li><NavLink to='/vegetables'>Vegetables</NavLink></li>
    <li><NavLink to='/freezer'>Freezer</NavLink></li>
    <li><NavLink to='/meatFish'>Meat and Fish</NavLink></li>
    <li><NavLink to='/cookingEssentials'>Cooking Essentials</NavLink></li>
    <li><NavLink to='/snacksAndInstantFood'>Snacks and Instant foods</NavLink></li>
    <li><NavLink to='/bevarages'>Bevarages</NavLink></li>
    <li><NavLink to='/dairy'>Dairy</NavLink></li>
    </>
    return (
        <div id="sidebar" className="bg-base-300  h-full relative">
            <nav className="fixed">
                <ul className="space-y-5 pt-8 px-4">
                    {navLinks}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;