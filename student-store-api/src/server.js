const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const productsRouter = require("../routes/products");
const ordersRouter = require("../routes/orders");
const orderItemsRouter = require("../routes/orderItems")

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/order-items", orderItemsRouter)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
