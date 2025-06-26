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

module.exports = router;