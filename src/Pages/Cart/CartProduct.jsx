

const CartProduct = ({product}) => {
    console.log(product);
    const {itemName,price, image}=product;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="h-[300px]" src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartProduct;