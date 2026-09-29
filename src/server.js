const express = require('express');
const products = require('../data/products.json');

const app = express();
const PORT = process.env.PORT || 3000;

let cart = [];

app.use(express.json());

function findProductById(productId) {
  return products.find((product) => product.id === productId);
}

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'R-Cart is running successfully.'
  });
});

app.get('/api/products', (req, res) => {
  res.json({
    count: products.length,
    items: products
  });
});

app.get('/api/cart', (req, res) => {
  const subtotal = cart.reduce((total, item) => {
    const product = findProductById(item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  res.json({
    count: cart.length,
    items: cart,
    subtotal: Number(subtotal.toFixed(2))
  });
});

app.post('/api/cart/add', (req, res) => {
  const { productId, quantity = 1 } = req.body || {};

  if (!productId) {
    return res.status(400).json({ error: 'productId is required.' });
  }

  const product = findProductById(productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found.' });
  }

  const qty = Number(quantity);

  if (!Number.isInteger(qty) || qty < 1) {
    return res.status(400).json({ error: 'quantity must be a positive integer.' });
  }

  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push({ productId, quantity: qty });
  }

  return res.status(201).json({
    message: 'Product added to cart.',
    item: { productId, quantity: qty }
  });
});

app.listen(PORT, () => {
  console.log(`R-Cart server running on http://localhost:${PORT}`);
});
