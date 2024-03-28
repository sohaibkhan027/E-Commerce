import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../Assets/all_product';

import './Product.css'; // Import your CSS file for styling
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer/CartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch()


  const product = data.find(item => item.id === parseInt(productId));

//   const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    navigate(`/cart`);
  };

  return (
    <div className="product-detail">
        <h1 className='heading-h1'>My Cart</h1>
      {product && (
        <div className="product-card">
          <div className="product-image-cont">
            <img src={product.image} alt="Product" className="product-image" />
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.new_price}</p>
            <p className=" product-price product-quantity">Quantity: 1</p>
            <strong className=" product-price product-quantity">Brand: xox</strong>
            <p className=" product-category">Category: {product.category}</p>
            {/* <p className=" product-price product-size">Size: {product.new_price}</p> */}
            <button className="add-to-cart-btn" onClick={()=>{handleAddToCart(product)}}>Add to Cart</button>
          </div>
          <div className='btn-info'>
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
