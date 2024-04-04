import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Products from './ProductDetail';
import ProductCards from './ProductCards';
// import { useDispatch } from 'react-redux';
// import  selectProduct  from '../../redux/reducer/selectedProduct-slice';

const Product = () => {
  const [, setSelectedProductId] = useState(null);
  // const dispatch = useDispatch()
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
