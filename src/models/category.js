//including mongoose module
const mongoose = require("mongoose");

//Declaring Schema for Category Document
const CategorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
     id: false 
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

//declaring Virtual Field on Category Schema,mapping Category "name " to Product "owner"
CategorySchema.virtual("productsArr", {
  ref: "Product",
  localField: "name",
  foreignField: "owner"
});

//Creating CategoryModel
const Category = mongoose.model("Category", CategorySchema);

//Exporting Category
module.exports = Category;
