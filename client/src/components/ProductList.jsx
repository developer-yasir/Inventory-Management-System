import React, { useEffect, useState } from 'react';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../services/productService';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editId, setEditId] = useState(null);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAddOrUpdate = async () => {
    if (!name || !price) return;
    if (editId) {
      await updateProduct(editId, { name, price });
      setEditId(null);
    } else {
      await addProduct({ name, price });
    }
    setName('');
    setPrice('');
    loadProducts();
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditId(product._id);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div className="product-container">
      <div className="form">
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Product Name" />
        <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" />
        <button onClick={handleAddOrUpdate}>{editId ? 'Update' : 'Add'} Product</button>
      </div>
      <ul className="product-list">
        {products.map(p => (
          <li key={p._id}>
            <span>{p.name} - ${p.price}</span>
            <div>
              <button onClick={() => handleEdit(p)}>Edit</button>
              <button onClick={() => handleDelete(p._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;