//All of the potential functions associated with the program

// controller file for product routes

const prisma = require("../models/prismaClient");

//GET /products
exports.getAll = async (req, res) => {
    console.log("/products");
    try {
        const products = await prisma.product.findMany(); //syntax - prisma get all products
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
  const { name, type, description } = req.body;
  const newProduct = await prisma.product.create({
    data: { id, name, description, price, image_url},
  });
  res.status(201).json(newProduct);
};


//PUT /product/:id
exports.update = async (req, res) => {
  const id = Number(req.params.id);
  const { name, type, description } = req.body;
  const updatedProduct = await prisma.product.update({
    where: { id },
    data: { name, type, description },
  });
  res.json(updatedProduct);
};


//DELTE /product/:id
exports.remove = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.product.delete({ where: { id } });
  res.status(204).end();
};


/*
function deleteMany(){
    return null;
}
*/