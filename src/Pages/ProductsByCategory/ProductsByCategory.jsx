
import axios from "axios";
import { useState } from "react";
import SingleProductCard from "../ProductsDisplay/SingleProductCard";


const ProductsByCategory = () => {
    const [data,setData] = useState([]);

 const handleSearch=()=>{
    const category = document.getElementById('inputField').value;
    const mappedCategory = standardizeCategory(category);
    axios.get(`https://grocery-shop-server-xi.vercel.app/products?category=${mappedCategory}`)
              .then(result=>setData(result.data))
 }
 const standardizeCategory=(temp)=>{
    return catMap[temp.toLowerCase()] || temp;
 }

 const catMap ={
    "fruit": "Fruits",
    "fruits": "Fruits",
    "apple": "Fruits",
    "banana": "Fruits",
    "strawberry": "Fruits",
    "beverage": "Beverages",
    "milk": "Dairy",
    "dairy": "Dairy",
    "egg": "Eggs",
    "meat":"Chicken",
    "beef":"Meat",

 }

    return (
        <div>
             <div className='flex items-center gap-2 '>
                <input
                    id='inputField'
                    className='rounded-lg p-1 pr-8 w-[400px] outline outline-1'
                    placeholder='Search by category'
                    type="text" />
                    <button onClick={handleSearch} className='rounded-lg hover:text-2xl text-xl text-slate-600'>Search</button>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-10">
                {
                   (data.length!=0) && (
                    data.map(product=><SingleProductCard
                    key={product._id}
                    product={product}
                    ></SingleProductCard>)
                   )
                }
            </div>
        </div>
    );
};

export default ProductsByCategory;