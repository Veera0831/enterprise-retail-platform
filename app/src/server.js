const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 2000 }
];

app.get("/", (req, res) => {
  res.json({
    message: "Enterprise Retail API is running"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "retail-api"
  });
});

app.get("/api/products", (req, res) => {
  res.status(200).json({
    count: products.length,
    products
  });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Retail API listening on port ${PORT}`);
  });
}

module.exports = app;
