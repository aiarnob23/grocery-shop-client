
import axios from "axios";
import { useState } from "react";


const ProductsByCategory = () => {
    const [data,setData] = useState([]);
    const handleSearch = () =>{
        const searchCategory = document.getElementById('inputField').value;
              axios.get(`http://localhost:5000/products?category=${searchCategory}`)
              .then(result=>setData(result.data))  
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
            <div>
                {
                   (data.length!=0) && <div>ache</div>
                }
            </div>
        </div>
    );
};

export default ProductsByCategory;