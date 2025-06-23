//Set up of routes
//All of these connect with the controllers

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");


//Potential Stretch Features
//Get all orders items
router.get("/", controller.getAll);

//Get a specific order item by ID
router.get("/:order_id/items", controller.getById);

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
