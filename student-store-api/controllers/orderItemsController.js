//All of the potential functions associated with the program

// controller file for order item routes

const prisma = require("../models/prismaClient");

//GET order items
exports.getAll = async (req, res) => {
  console.log("/orderItems");
  try {
    //Reading queries as categories or sorts
    const { category } = req.query;
    const { sort } = req.query;
    const { sortBy } = req.query;

    //Declaring the intial filters to an empty set
    const filters = {};

    if (category) {
      filters.category = category;
    }

    let orderBy;

    //Ordering name and price by ternary operators
    if (sortBy === "name" || sortBy === "price") {
      orderBy = { [sortBy]: sort === "asc" ? "asc" : "desc" };
    }
    const orderItems = await prisma.orderItems.findMany({
      where: filters,
      include: { items: true },
    }); //syntax - prisma get all orders
    res.json(orderItems);
  } catch (error) {
    throw new Error(error);
  }
};

//GET /orders/:id
exports.getById = async (req, res) => {
  console.log("getbyid");
  const order_id = Number(req.params.order_id); //get id as number from the params
  const order = await prisma.order.findUnique({
    where: { order_id },
    include: { items: true },
  });
  if (!order) return res.status(404).json({ error: "Not found!" });
  res.json(order);
};

// POST /orders
exports.create = async (req, res) => {
  const { order_id, customer_id, total_price, status, created_at } = req.body;
  const newOrder = await prisma.order.create({
    data: { order_id, customer_id, total_price, status, created_at },
  });
  res.status(201).json(newOrder);
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

//DELTE /order/:id
exports.remove = async (req, res) => {
  const order_id = Number(req.params.order_id);
  await prisma.order.delete({ where: { order_id } });
  res.status(204).end();
};