//Set up of routes
//All of these connect with the controllers


const express = require("express");
const {PrismaClient} = require('@prisma/client');
const router = express.Router();
const prisma = new PrismaClient();
const controller = require("../controllers/controllers");

/*
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

*/

/*
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(books);
});
*/

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

module.exports = router;