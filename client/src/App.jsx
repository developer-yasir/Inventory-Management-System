import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>📦 My Inventory Dashboard</h1>
      <ProductList />
    </div>
  );
}

export default App;
