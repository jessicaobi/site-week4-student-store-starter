//All of the potential functions associated with the program

// controller file for product routes

const prisma = require("../models/prismaClient");

//GET /products
exports.getAll = async (req, res) => {
    console.log("/products");
    try {
        //Reading queries as categories or sorts
        const { category } = req.query;
        const { sort } = req.query;
        const { sortBy } = req.query;

        //Declaring the intial filters to an empty set
        const filters = {};

        if (category) {
          filters.category = category;
        }

        let orderBy;

        //Ordering name and price by ternary operators
        if (sortBy === "name" || sortBy === "price"){
            orderBy = { [sortBy]: sort === "asc" ? "asc" : "desc"}
        }
        const products = await prisma.product.findMany({
            where: filters, orderBy
        }); //syntax - prisma get all products
        res.json(products);
    }
    catch (error){
        throw new Error(error);
    }
};



//GET /products/:id
exports.getById = async (req, res) => {
  const id = Number(req.params.id); //get id as number from the params
  const product = await prisma.product.findUnique({ where: { id } });
  if (!product) return res.status(404).json({ error: "Not found!" });
  res.json(product);
};



// POST /products
exports.create = async (req, res) => {
  const { id, name, category, image_url, description, price } = req.body;
  const newProduct = await prisma.product.create({
    data: { id, name, category, image_url, description, price },
  });
  res.status(201).json(newProduct);
};


//PUT /product/:id
exports.update = async (req, res) => {
  const id = Number(req.params.id);
  const { name, category, image_url, description, price } = req.body;
  const updatedProduct = await prisma.product.update({
    where: { id },
    data: { name, category, image_url, description, price },
  });
  res.json(updatedProduct);
};


//DELTE /product/:id
exports.remove = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.product.delete({ where: { id } });
  res.status(204).end();
};