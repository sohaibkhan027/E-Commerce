import React from 'react'
import data from "../Assets/all_product"
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import image1 from "../Assets/banner_mens.png"
import "./Catogories.css"
import { setSeletedProduct } from '../../redux/reducer/selectedProduct-slice';
import { useDispatch } from 'react-redux';
const { Meta } = Card;

const Men = () => {

  const dispatch = useDispatch()
  const menProducts = data.filter(product => product.category === "men");


  console.log("menprod",menProducts);
    return (
      <>
      
      
        <div className='heading-catog'>
          <img src={image1} alt="men" />
      {/* <h1>Mens</h1> */}
    </div>
      <div className="product-cards-container">
      {menProducts.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} onClick={() => dispatch(setSeletedProduct(product))}>
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

export default Men