// Controller file for order item routes

const prisma = require("../models/prismaClient");

//GET order items
exports.getAll = async (req, res) => {
  console.log("/order-items");
  try {
    //Syntax - prisma get all order items
    const orderItems = await prisma.orderItem.findMany();
    //Returning all order items
    res.json(orderItems);
  } catch (error) {
      throw new Error(error);
  }
};