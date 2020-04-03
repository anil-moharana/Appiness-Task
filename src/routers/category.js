//including npm modules
const express = require("express");
//importing model
const Category = require("../models/category");
//creating express router
const router = new express.Router();


//API to create new Category
router.post("/addNewCategory", async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    res.status(201).send(category);
  } catch (e) {
    res.status(400).send(e);
  }
});

//API to get All Category
router.get("/getAllCategory", async (req, res) => {
  try {
    const category = await Category.find({});
    res.send(category);
  } catch (e) {
    res.status(500).send();
  }
});

//API to get All Category along with Products
router.get("/getAllCategoryWithProducts", async (req, res) => {
  try {
    let categoryALL = await Category.find({});
    const promises = categoryALL.map(async c => {
      const output = await (
        await Category.findOne({ name: c.name }).select('-_id -__v -id').populate("productsArr")
      ).execPopulate();
      return output;
    });
    const result = await Promise.all(promises);
    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

router.use((req, res) => {
  res.status(404).send({message:"Invalid endpoint"});
});

//Exporting router
module.exports = router;
