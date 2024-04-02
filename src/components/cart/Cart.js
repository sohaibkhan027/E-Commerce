import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, emptyCart, increaseQuantity, decreaseQuantity } from '../../redux/reducer/CartSlice';
import { useNavigate } from 'react-router-dom';
import { Button, message } from 'antd';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();

  const cartItems = useSelector(state => state.cart.cartItem);

  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleRemoveFromCart = (product) => {
    if (window.confirm("Are you sure you want to remove this item from your cart?")) {
      dispatch(removeFromCart(product.id));
      if (cartItems.length === 1) {
        dispatch(emptyCart());
        navigate("/");
      }
    }
   
  };

  const handleEmptyCart = () => {
    if (window.confirm("Remove all items from your cart?")) {
      dispatch(emptyCart());
      navigate("/")
    }
  }

  function orderPlace(){
    setTimeout(()=>{
      navigate("/")
    },2000)
  }

  return (
    <div className="row justify-content-center m-0">
      <div className="col-md-8 mt-5 mb-5">
        {/* Cart content */}
        {cartItems.length > 0 ? (
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h3 className=" m-0">Cart Calculation ({cartItems.length})</h3>
                <button className="btn-em btn-danger mt-0 btn-sm" onClick={handleEmptyCart}>
                  <i className="fa fa-trash-alt mr-2"></i>
                  <span>Empty Cart</span>
                </button>
              </div>
            </div>
            <div className="card-body p-0">
              <table className="table cart-table mb-0">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th className="text-right">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <button className="prdct-delete" onClick={() => handleRemoveFromCart(product)}>
                          <i className="fa fa-trash-alt"></i>
                        </button>
                      </td>
                      <td><div className="product-img"><img src={product.image} alt="" /></div></td>
                      <td><div className="product-name"><p>{product.name}</p></div></td>
                      <td className='price'>${product.new_price}</td>
                      <td>
                        <div className="prdct-qty-container">
                          <button className="prdct-qty-btn" onClick={() => handleDecreaseQuantity(product)}>
                            <i className="fa fa-minus"></i>
                          </button>
                          <input type="text" className="qty-input-box" value={product.cartQuantity} readOnly />
                          <button className="prdct-qty-btn" onClick={() => handleIncreaseQuantity(product)}>
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td className="text-right">${(product.new_price * product.cartQuantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button onClick={()=>{
                navigate("/product")
              }}>Add Items</Button>
              {contextHolder}

            
              <div className='place-order'>
          <Button onClick={()=>{
            messageApi.open({
              type: 'success',
              content: 'Your order place successfully',
            })
            orderPlace()
          }
  }>Place Order</Button>
          </div>
          </div>
            </div>
        ) : (
          // Cart is empty message
          <div className="card">
            <div className="card-header bg-dark p-3">
              <h5 className="text-white m-0">Cart Calculation (0)</h5>
            </div>
            <div className="card-body p-0">
              <table className="table cart-table mb-0">
                <tbody>
                  <tr>
                    <td colSpan="6">
                      <div className="cart-empty">
                        <i className="fa fa-shopping-cart"></i>
                        <p>Your Cart Is empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button onClick={()=>{
                navigate("/product")
              }}>Add Items</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
