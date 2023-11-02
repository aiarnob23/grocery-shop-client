import { Button } from "@mui/material";
import PropTypes from 'prop-types'; 


const SingleProductCard = ({product}) => {
    const {itemName,price,image,quantity}=product;
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
      <Button variant="outlined" color="success" className="btn btn-primary">Add to cart</Button>
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