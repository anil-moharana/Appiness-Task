//including moongose module
const mongoose = require("mongoose");

//connecting to DB
mongoose.connect("mongodb://127.0.0.1:27017/catalog", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
