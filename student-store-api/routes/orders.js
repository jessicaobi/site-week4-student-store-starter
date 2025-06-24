//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/ordersController");

//Order Endpoints
//Get all orders
router.get("/", controller.getAll);

//Get specific order by ID
router.get("/:order_id", controller.getById);

//Add a new order to the product list
router.post("/", controller.create);

//Update an order by ID
router.put("/:order_id", controller.update);

//Delete an order by ID
router.delete("/:order_id", controller.remove);

module.exports = router;
