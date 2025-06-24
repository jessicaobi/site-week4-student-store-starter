//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");

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


/*
//Filter to sort by category
router.get("/", async (req, res) => {
    
  const { category } = req.query;

  const filters = {};

  if (category) {
    filters.category = category;
  }


  try {
    const products = await prisma.product.findMany({
      where: filters,
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

*/
module.exports = router;
