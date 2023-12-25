import { Button } from "@mui/material";
import PropTypes from 'prop-types'; 
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";




const SingleProductCard = ({product}) => {
  const {itemName,price,image,quantity}=product;
  const {user} = useContext(AuthContext);
  console.log(user?.email+"paisi");
    const addToCart = () =>{
     if(!user){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Log in first!",
      });
     }
     else{
      const email = user?.email;
      const cartsNewProduct = {
        itemName,price,image,email,
      };
    
      fetch('http://localhost:5000/cart',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
          body:JSON.stringify(cartsNewProduct),
      }
      ) 
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Added to Cart',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        }
      })
     }
    }
    
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image}  className="rounded-xl h-[300px] w-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{itemName}</h2>
    <p>Price: ${price}</p>
    <p>Quantity: {quantity}</p>
    <div className="card-actions">
      <Button onClick={addToCart} variant="outlined" color="success" className="btn btn-primary">Add to cart</Button>
    </div>
  </div>
</div>
        </div>
    );
};

SingleProductCard.propTypes={
    product:PropTypes.object,
}
export default SingleProductCard;