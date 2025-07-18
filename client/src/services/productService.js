import axios from 'axios';

const API_BASE = 'http://localhost:5000/api/products';

// Get all products
export const getProducts = async () => {
  const res = await axios.get(API_BASE);
  return res.data;
};

// Add a new product
export const addProduct = async (product) => {
  const res = await axios.post(API_BASE, product);
  return res.data;
};

// Delete product
export const deleteProduct = async (id) => {
  const res = await axios.delete(`${API_BASE}/${id}`);
  return res.data;
};

// Update product
export const updateProduct = async (id, updatedProduct) => {
  const res = await axios.put(`${API_BASE}/${id}`, updatedProduct);
  return res.data;
};
