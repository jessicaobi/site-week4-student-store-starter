const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const productsRouter = require("../routes/products");
const ordersRouter = require("../routes/orders");
const orderItemsRouter = require("../routes/orderItems")

//Cors is used to connect the backend to the front end
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//Setting my different routes
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/order-items", orderItemsRouter)

//Base route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Letting the backend know that the server is running
app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
