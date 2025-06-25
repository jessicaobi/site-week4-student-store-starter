//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/orderItemsController");

//orderItems Endpoints
//Get all orderItems
router.get("/", controller.getAll);

//Get specific orderItems by ID
router.get("/:id", controller.getById);

//Add a new orderItems to the orderItems list
router.post("/", controller.create);

//Update a orderItems by ID
router.put("/:id", controller.update);

//Delete a orderItems by ID
router.delete("/:id", controller.remove);


/*
//Potential Stretch Features
//Get all orders items
router.get("/", controller.getAll);

//Get a specific order item by ID
router.get("/:order_id/items", controller.getById);
*/



module.exports = router;
