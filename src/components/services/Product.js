import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './ProductDetail';
import ProductCards from './ProductCards';
// import { useDispatch } from 'react-redux';
// import  selectProduct  from '../../redux/reducer/selectedProduct-slice';

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  // const dispatch = useDispatch()
  // Assume you have a function to select a product and set its image
  const selectProduct = (id) => {
    setSelectedProductId(id);
  };
  // const selectProduct=(selectProduct)=>{
  //   dispatch(selectProduct)

  // }
  
  return (
    <div className=' body-home'>
      <ProductCards selectProduct={selectProduct} />
    </div>
  );
};

export default Product;
