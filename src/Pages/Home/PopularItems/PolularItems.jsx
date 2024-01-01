import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import pop1 from '../../../assets/Popular/popular3.jpg'
import pop2 from '../../../assets/Popular/popular4.jpg'
import pop3 from '../../../assets/Popular/popular5.jpg'
import pop4 from '../../../assets/Popular/popular6.jpg'
import pop5 from '../../../assets/Popular/popular7.jpg'
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PolularItems = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div>
            <div>
                <h1 data-aos="fade-left" className="text-4xl font-semibold text-center mt-8 mb-7 text-green-600">Popular Items</h1>
            </div>
            <div data-aos="fade-right" className="grid grid-cols-3 gap-5">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[300px] rounded-lg" src={pop1} /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                            <Link to='/productsDisplay'><Button variant="contained" color="success">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[300px] rounded-lg" src={pop2} /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                        <Link to='/productsDisplay'><Button variant="contained" color="success">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[300px] rounded-lg" src={pop3} /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                        <Link to='/productsDisplay'><Button variant="contained" color="success">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[300px] rounded-lg" src={pop4} /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                        <Link to='/productsDisplay'><Button variant="contained" color="success">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[300px] w-[300px] rounded-lg" src={pop5} /></figure>
                    <div className="card-body">
                        <div className="card-actions ">
                        <Link to='/productsDisplay'><Button variant="contained" color="success">
                                Explore
                            </Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PolularItems;