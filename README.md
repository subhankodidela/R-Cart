# R-Cart

R-Cart is a small sample shopping cart project built with Node.js and Express. It demonstrates a simple product catalog, cart operations, and a lightweight backend API that can be extended for a real storefront.

## Features

- Product catalog endpoint
- Cart listing endpoint
- Add-to-cart endpoint
- Sample product data in JSON
- Clean, simple project structure for extension

## Prerequisites

- Node.js 18 or later
- npm

## Quick Start

1. Install dependencies:
   npm install
2. Start the server:
   npm start
3. Open the app in a browser or call the API endpoints:
   - GET http://localhost:3000/api/health
   - GET http://localhost:3000/api/products
   - GET http://localhost:3000/api/cart
   - POST http://localhost:3000/api/cart/add

## Example request body

```json
{
  "productId": "p-101",
  "quantity": 2
}
```

## Project Structure

- src/server.js — application entry point
- data/products.json — sample product catalog
- package.json — project configuration

## Notes

This project is intentionally lightweight and is designed as a starter scaffold for future enhancements such as checkout, authentication, or persistence.
