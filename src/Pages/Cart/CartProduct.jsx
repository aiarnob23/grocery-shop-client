
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
const CartProduct = ({ product }) => {

  const { itemName, price, image } = product;




  const handleDelete = (id) => {
      
    Swal.fire({
        title: 'Are you sure?',
        text: "You can not undo after this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Sure!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/cart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                  
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'This car has been removed',
                            'success'
                        )
                       window.location.reload();
                    }
                })

        }
    })

  
 }
  return (
    <div className='w-full flex justify-center '>
      <div className="card w-3/4 m-5 p-5 flex justify-center items-center card-side bg-base-200 shadow-xl">
        <figure><img className="h-[300px]" src={image} alt="Movie" /></figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(product._id)} className="btn text-white text-xl btn-error">DELETE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
}

export default CartProduct;