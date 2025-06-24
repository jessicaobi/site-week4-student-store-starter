//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/productsController");

//Potential Stretch Features
//Get all orders items
router.get("/", controller.getAll);

//Get a specific order item by ID
router.get("/:order_id/items", controller.getById);

module.exports = router;
