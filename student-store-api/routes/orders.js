//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");

//Order Endpoints
//Get all orders
router.get("/", controller.getAll);

//Get specific order by ID
router.get("/:id", controller.getById);

//Add a new order to the product list
router.post("/", controller.create);

//Update an order by ID
router.put("/:id", controller.update);

//Delete an order by ID
router.delete("/:id", controller.remove);


/*Potential query function
router.get('/', async (req, res) => {
    const {type, origin} = req.query
    const filters = {}

    if (type){
        filters.type = type
    }

    if (origin){
        filters.origin
    }
    try{
        const products = await.prisma.product.findMany({
            where: filters
        })
        res.json(products)
    }
    catch (error){
        console.log(error)
        res.status(500).json()
    }
})
*/
module.exports = router;
