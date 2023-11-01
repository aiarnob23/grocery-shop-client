import { useLoaderData } from "react-router-dom";
import SingleProductCard from "./SingleProductCard";
import ad from '../../assets/Advertisements/delicious-food-arrangement-flat-lay.jpg'

const ProductsDisplay = () => {
    const products = useLoaderData();
    return (
        <div>
            <div>
                <div className="hero  bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                       <div className="relative">
                       <img src={ad} className="rounded-lg shadow-2xl" />
                       <div className="absolute top-8 left-5">
                            <h1 className="text-3xl text-green-700 font-semibold">We have fresh products<br/>Trust Us, Trust the Health</h1>
                       </div>
                       </div>
                        <div>
                            <h1 className="text-5xl font-bold">All Categories</h1>
                            <p className="py-6 text-slate-500">Fresh products include a variety of items such as fresh eggs, organic eggs, apples, bananas, strawberries, spinach, and carrots. These products are known for their high quality and freshness.</p>
                            <button className="btn bg-slate-700 text-white">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                {products.map(product => <SingleProductCard
                    key={product._id}
                    product={product}
                ></SingleProductCard>)}
            </div>
        </div>
    );
};

export default ProductsDisplay;


