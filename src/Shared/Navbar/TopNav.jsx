import Marquee from "react-fast-marquee";
import logo from '../../assets/logo.jpg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const TopNav = () => {
    const {user, logOut} = useContext(AuthContext);
    const logout= ()=>{
        logOut()
        .then(()=>{
           window.location.reload()
        })
        .catch(error=>console.log(error))
    }
    return (
        <nav className='flex items-center justify-between px-1 py-5 bg-slate-300'>
            <div className='flex items-center gap-1'>
                <div><img className='h-10 rounded-lg' src={logo} alt="" /></div>
                <div className='text-green-600 font-bold text-xl'>Air Grocery</div>
            </div>
            <div className="mx-5">
                <Marquee speed={200}>
                Fresh & Flavorful Finds Await You at Air Grocery! Explore a World of Delicious Delights, Aisle by Aisle. 
                </Marquee>
            </div>
            <div>
               
                {
                    user ? 
                    <> 
                    <div className="w-[200px] flex flex-col justify-center items-center gap-1">
                    <p className="text-gray-500 font-semibold">{user.displayName}</p>
                    <button onClick={logout} className='outline-1  font-semibold text-green-600 outline rounded-lg p-2'>LOG OUT</button>
                    </div>
                    </>
                    :
                    <> <Link to='/login'><button className='outline-1 font-semibold text-green-600 outline rounded-lg p-2'>LOGIN</button></Link></>
                }
            </div>
        </nav>
    );
};

export default TopNav;