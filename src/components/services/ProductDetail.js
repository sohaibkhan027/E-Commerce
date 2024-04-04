import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../Assets/all_product';
import './Product.css'; // Import your CSS file for styling
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/reducer/CartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = data.find(item => item.id === parseInt(productId));

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate(`/`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <h1 className='heading-h1'>Product Details</h1>
        {product && (
          <div className="product-card">
            <div className="product-image-cont">
              <img src={product.image} alt="Product" className="product-image" />
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.new_price}</p>
              <p className="product-quantity">Quantity: 1</p>
              <strong className="product-brand">Brand: xox</strong>
              <p className="product-category">Category: {product.category}</p>
              <button className="add-to-cart-btn" onClick={() => { handleAddToCart(product) }}>Add to Cart</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
