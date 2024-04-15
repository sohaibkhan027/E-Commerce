import React from 'react';
import './Home.css'
import SliderCarousel from './Slider';
import image1 from '../Assets/banner_mens.png';
import image2 from '../Assets/banner_kids.png';
import image3 from '../Assets/banner_women.png';
// import Products from '../services/ProductCards';
import data from '../Assets/data'
import { storeData } from "../../assets/data/dummyData";
import newData from '../Assets/new_collections'
// import mobData from '../../Assets-mob/mob-data'
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { setSeletedProduct } from '../../redux/reducer/selectedProduct-slice';
const { Meta } = Card;


const Home = () => {
  const dispatch = useDispatch()
  // const [, setSelectedProductId] = useState(null);
  const images = [image1, image2, image3];
  // const selectProduct = (product) => {
  //   setSelectedProductId(product);
  // };
  // const data = storeData

  return (
    <div className='body-home'>
      {/* <h1>Welcome to Our Website!</h1> */}
      <SliderCarousel images={images} />
      <div className='woman-head'>
      <h1>Women </h1>
    </div>
      <div className="product-cards-container">
      {data.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} onClick={() => dispatch(setSeletedProduct(product))}>
          <Card
            hoverable
            style={{ width: 241 }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name}  description={  <div>
              <p>Price: ${product.old_price}</p>
              <p>Discounted Price: ${(product.price, product.new_price)}</p>
              <p>Stock: {product.s}</p>
              <strong>Brand: xox</strong>
            </div>} />
          </Card>
        </Link>
      ))}
    </div>

    <div className='woman-head'>
      <h1>New Arrivals </h1>
    </div>
    <div className="product-cards-container">
      {newData.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} onClick={() => dispatch(setSeletedProduct(product))}>
          <Card
            hoverable
            style={{ width: 241 }}
            cover={<img alt={product.name} src={product.image} />}
          >
            <Meta title={product.name}  description={  <div>
              <p>Price: ${product.old_price}</p>
              <p>Discounted Price: ${(product.price, product.new_price)}</p>
              <p>Stock: {product.stock}</p>
              <strong>Brand: xox</strong>

            </div>} />
          </Card>
        </Link>
      ))}
    </div>
      {/* <div className="product-cards-container">
      {mobData.map(product => (
        <Link key={product.id} to={`/product/${product.id}`} onClick={() => selectProduct(product.id)}>
          <Card
            hoverable
            style={{ width: 240,}}
            cover={<img style={{height:"20%"}} alt={product.title} src={product.thumbnail} />}
          >
            <Meta title={product.title} 
        description={
          <div>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discounted Price: ${(product.price, product.discountPercentage)}</p>
            <p>Stock: {product.stock}</p>
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
          </div>
        } />
          </Card>
        </Link>
      ))}
    </div> */}
    </div>
  );
};

export default Home;