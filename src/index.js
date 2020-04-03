//including mongoose
const express = require("express");
//importing moongose config
require("./db/mongoose");
//importing routers
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(categoryRouter);
app.use(productRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

