const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

// 📥 GET all
router.get('/', getAllProducts);

// ➕ POST
router.post('/', createProduct);

// ✏️ UPDATE
router.put('/:id', updateProduct);

// 🗑️ DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
