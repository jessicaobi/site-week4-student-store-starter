//All of the potential functions associated with the program

// controller file for order item routes

const prisma = require("../models/prismaClient");

//GET order items
exports.getAll = async (req, res) => {
  console.log("/orderItems");
  try {
    const orderItems = await prisma.orderItem.findMany({
    }); //syntax - prisma get all orders
    res.json(orderItems);
  } catch (error) {
    throw new Error(error);
  }
};