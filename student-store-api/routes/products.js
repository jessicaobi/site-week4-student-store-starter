//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/productsController");

//Product Endpoints
//Get all products
router.get("/", controller.getAll);

//Get specific product by ID
router.get("/:id", controller.getById);

//Add a new product to the product list
router.post("/", controller.create);

//Update a product by ID
router.put("/:id", controller.update);

//Delete a product by ID
router.delete("/:id", controller.remove);

module.exports = router;
