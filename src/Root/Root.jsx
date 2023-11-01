import TopNav from "../Shared/Navbar/TopNav";
import Sidenav from "../Shared/Navbar/SideNav";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer"

const Root = () => {
    return (
        <div className="">
           <TopNav></TopNav>
           <div className="flex">
            {/* side nav bar */}
            <div className="w-[15%]">
              <Sidenav></Sidenav>
            </div>
            {/* main parts */}
            <div className="w-[80%] container mx-auto mt-6">
            <Outlet></Outlet>
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;