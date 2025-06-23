//Set up of routes
//All of these connect with the controllers


const express = require("express");
const {PrismaClient} = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");


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