//including express module
const express = require("express");
//importing model
const Product = require("../models/product");
//creating express router
const router = new express.Router();

//API to create new Product
router.post("/addNewProduct", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
});

//API to retrieve all Products
router.get("/getAllProduct", async (req, res) => {
  try {
    const product = await Product.find({});
    res.send(product);
  } catch (e) {
    res.status(500).send();
  }
});

router.use((req, res) => {
  res.status(404).send({message:"Invalid endpoint"});
});


//Exporting router
module.exports = router;
