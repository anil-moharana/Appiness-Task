//including mongoose module
const mongoose = require("mongoose");

//Declaring Schema for Product Document
const ProductSchema = mongoose.Schema( {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  owner: {
    type: String,
    required: true,
    ref: "Category"
  }
},
{
  toObject: {
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.__v;
    }
  },
  toJSON: {
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.__v;
    }
  }
}


);

//Creating CategoryModel
const Product = mongoose.model("Product", ProductSchema);

//Exporting Product Category
module.exports = Product;
