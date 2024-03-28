import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Products from './ProductDetail';
import ProductCards from './ProductCards';

const Product = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Assume you have a function to select a product and set its image
  const selectProduct = (id) => {
    setSelectedProductId(id);
  };

  return (
    <div className=' body-home'>
      <ProductCards selectProduct={selectProduct} />
    </div>
  );
};

export default Product;
