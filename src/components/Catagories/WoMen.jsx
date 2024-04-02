// WomenProductCard.js
import React from 'react';
import data from "../Assets/all_product"
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import image2 from "../Assets/banner_women.png"
const { Meta } = Card;

const WomenProductCard = ({ product, selectProduct }) => {
    const womanProducts = data.filter(product => product.category === "women");


    console.log("menprod",womanProducts);
      return (
        <>
        
        
        <div className='heading-catog'>
          <img src={image2} alt="men Image" />
      {/* <h1>Mens</h1> */}
    </div>
        <div className="product-cards-container">
        {womanProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} onClick={() => selectProduct(product.id)}>
            <Card
              hoverable
              style={{ width: 241.1 }}
              cover={<img alt={product.name} src={product.image} />}
            >
              <Meta
                title={product.name}
                description={
                  <div>
                    <p>Price: ${product.old_price}</p>
                    <p>Discounted Price: ${product.new_price}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Brand: xox</p>
                    <p>Category: {product.category}</p>
                  </div>
                }
              />
            </Card>
          </Link>
        ))}
      </div>
      </>
        );
      };

export default WomenProductCard;
