// Controller file for order routes

const prisma = require("../models/prismaClient");

//GET /orders
exports.getAll = async (req, res) => {
  console.log("/orders");
  try {
    //Ordering name and price by ternary operators

    //Syntax - prisma get all orders
    const orders = await prisma.order.findMany({
      include: { items: true },
    });

    res.json(orders);
  } catch (error) {
      throw new Error(error);
  }
};


//GET /orders/:id
exports.getById = async (req, res) => {
  console.log("getbyid");
  const order_id = Number(req.params.order_id); //get id as number from the params
  const order = await prisma.order.findUnique(
    { where: { order_id },
      include: {items: true}
  });
  if (!order) return res.status(404).json({ error: "Not found!" });
  res.json(order);
};


// POST /orders
exports.create = async (req, res) => {
  const { order_id, customer_id, total_price, status, created_at } = req.body;
  const newOrder = await prisma.order.create({
    //Deconstructing the data within the newOrder object
    data: { order_id, customer_id, total_price, status, created_at },
  });
  res.status(201).json(newOrder);
};


//POST new order item  to the order list
exports.addItem = async (req, res) => {
  try {
    console.log("add item");
    const order_id = Number(req.params.order_id);
    const { product_id, quantity, price } = req.body;

    const newOrderItem = await prisma.orderItem.create({
      data: { order_id, product_id, quantity, price },
    });

    res.status(201).json(newOrderItem);
  } catch (error) {
    throw new Error(error);
  }
};


//PUT /order/:id
exports.update = async (req, res) => {
  const order_id = Number(req.params.order_id);
  const { customer_id, total_price, status, created_at } = req.body;
  const updatedOrder = await prisma.order.update({
    where: { order_id },
    data: { order_id, customer_id, total_price, status, created_at },
  });
  res.json(updatedOrder);
};


//PUT updating the total
exports.getTotal = async (req, res) => {
  const order_id = Number(req.params.order_id); //get id as number from the params
  const order = await prisma.order.findUnique({
    where: { order_id },
    include: { items: true },
  });
  //For loop to loop through all of the items
  let totalPrice = 0;
  for (let i = 0; i < order.items.length; i++) {
    totalPrice += order.items[i].price;
  }
  //Updating the total price once recalculated
  const updatedOrder = await prisma.order.update({
    where: {order_id},
    data: { total_price: totalPrice},
    include: {items: true}
  });

res.json(updatedOrder);
};


//DELTE /order/:id
exports.remove = async (req, res) => {
  const order_id = Number(req.params.order_id);
  await prisma.order.delete({ where: { order_id } });
  res.status(204).end();
};