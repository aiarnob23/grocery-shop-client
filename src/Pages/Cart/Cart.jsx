import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import CartProduct from "./CartProduct";


const Cart = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  const { isPending, error, data } = useQuery({
    queryKey: ['CartProducts'],
    queryFn: () =>
      fetch(`https://grocery-shop-server-xi.vercel.app/cart?email=${email}`).then(
        (res) => res.json(),
      ),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  if(data.length==0) return 'No items at cart'


  return (
    <div>
      {
       
          data.map(product => <CartProduct
            key={product._id}
            product={product}
          >
  
          </CartProduct>)
     
      }
    </div>
  );
};

export default Cart;