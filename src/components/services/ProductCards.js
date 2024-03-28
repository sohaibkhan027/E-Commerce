import './Product.css'
import data from '../Assets/all_product'
import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;


const ProductCards = ({ selectProduct }) => {
  return (
    <>
    <div className='woman-head'>
      <h1>All Products </h1>
    </div>
    <div className="product-cards-container">
      {data.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} onClick={() => selectProduct(product.id)}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name}
             description={  <div>
              <p>Price: ${product.old_price}</p>
              <p>Discounted Price: ${(product.price, product.new_price)}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: xox</p>
              <p>Category: {product.category}</p>
            </div>} />
          </Card>
        </Link>
      ))}
    </div>

    </>
    
  );
};

export default ProductCards