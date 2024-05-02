import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { message, Modal, Input, InputNumber } from 'antd'; // Import Input and InputNumber
import './Components.css';

const ProductList = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/product/allproduct');
      setProducts(response.data);
      setError(null);
    } catch (error) {
      handleAxiosError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAxiosError = (error) => {
    if (error.response) {
      setError(`Server error: ${error.response.status}`);
    } else if (error.request) {
      setError('Network error');
    } else {
      setError('An error occurred');
    }
  };

  const handleEdit = (product) => {
    setEditProduct({ ...product });
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/product/updateproduct/${editProduct.id}`, editProduct);
      messageApi.success(response.data.message);
      setProducts(prevProducts => prevProducts.map(product => product.id === editProduct.id ? editProduct : product));
      setEditProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      messageApi.error('Failed to update product. Please try again.');
    }
  }

  const handleDeleteClick = (productId) => {
    setDeleteProductId(productId);
    setDeleteDialogVisible(true);
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8000/product/delete/${productId}`);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
      messageApi.error('Product deleted successfully');
    } catch (error) {
      console.error('Error deleting product:', error);
      messageApi.error('Failed to delete product. Please try again.');
    }
    setDeleteDialogVisible(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {contextHolder}
      <h2>Product List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{editProduct && editProduct.id === product.id ? <Input value={editProduct.name} onChange={e => setEditProduct({ ...editProduct, name: e.target.value })} /> : product.name}</td>
                <td>{editProduct && editProduct.id === product.id ? <Input value={editProduct.description} onChange={e => setEditProduct({ ...editProduct, description: e.target.value })} /> : product.description}</td>
                <td>{editProduct && editProduct.id === product.id ? <InputNumber value={editProduct.price} onChange={value => setEditProduct({ ...editProduct, price: value })} /> : product.price}</td>
                <td>{editProduct && editProduct.id === product.id ? <InputNumber value={editProduct.stock} onChange={value => setEditProduct({ ...editProduct, stock: value })} /> : product.stock}</td>
                <td><img src={`http://localhost:8000/product/${product.image_path} `} alt={product.description} style={{ width: '100px' }} /></td>
                <td>
                  {editProduct && editProduct.id === product.id ? (
                    <button className='edit-button save' onClick={handleSave}>Save</button>
                  ) : (
                    <>
                      <button className='edit-button' onClick={() => handleEdit(product)}>Edit</button>
                      <button className='delete-button' onClick={() => handleDeleteClick(product.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal
        title="Confirm Deletion"
        visible={deleteDialogVisible}
        onOk={() => handleDelete(deleteProductId)}
        onCancel={() => setDeleteDialogVisible(false)}
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </div>
  );
};

export default ProductList;
