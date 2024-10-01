const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/products-rtk")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Define product schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

// Create product model
const Product = mongoose.model("Product", productSchema);

// Create Express app
const app = express();
app.use(express.json());

// Get all products
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  // throw new Error("Something went wrong");
  res.json({ products });
});

// Get a single product by ID
app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send("Product not found");
  res.send(product);
});

// Create a new product
app.post("/api/products", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });

  await product.save();
  res.send(product);
});

// Update a product
app.put("/api/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    { new: true }
  );
  if (!product) return res.status(404).send("Product not found");
  res.send(product);
});

// Delete a product
app.delete("/api/products/:id", async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).send("Product not found");
  res.send(product);
});

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
