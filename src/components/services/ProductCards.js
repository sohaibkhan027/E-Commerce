import './Product.css'
import data from '../Assets/all_product'
import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;


const ProductCards = ({  selectProduct }) => {
  // const category = data.category
  // const filterData = category ? data.filter(product => product.category === category) : data;

  const groupedProducts = data.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  console.log(groupedProducts);

  return (
    <>
    <div className="product-cards-container">
      {Object.keys(groupedProducts).map(category => (
        <div key={category} className="product-category">
          <div className='woman-head'>
      <h1>{category}</h1>
    </div>
          <div className="product-cards-container">
            {groupedProducts[category].map(product => (
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
                        <p>Discounted Price: ${(product.price, product.new_price)}</p>
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
        </div>
      ))}
    </div>

    </>
    
  );
};

export default ProductCards