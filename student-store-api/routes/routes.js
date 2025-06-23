//Set up of routes
//All of these connect with the controllers


const express = require("express");
const {PrismaClient} = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");


//Product Endpoints
//Get all products
router.get("/products", controller.getAll);

//Get specific product by ID
router.get("/products/:id", controller.getById);

//Add a new product to the product list
router.post("/products", controller.create);

//Update a product by ID
router.put("/products/:id", controller.update);

//Delete a product by ID
router.delete("/products/:id", controller.remove);


//Order Endpoints
//Get all orders
router.get("/orders", controller.getAll);

//Get specific order by ID
router.get("/orders/:id", controller.getById);

//Add a new order to the product list
router.post("/orders", controller.create);

//Update an order by ID
router.put("/orders/:id", controller.update);

//Delete an order by ID
router.delete("/orders/:id", controller.remove);


//Potential Stretch Features
//Get all orders items
router.get("/orders-items", controller.getAll);

//Get a specific order item by ID
router.get("/orders/:order_id/items", controller.getById);




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