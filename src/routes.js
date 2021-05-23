const express = require("express");

const routes = express.Router();
const ProductController = require("./app/controller/ProductController")

routes.get("/", function (req, res) {
    return res.send("Minha primeira rota!");
});

routes.post("/products", ProductController.store);
routes.get("/products", ProductController.all);
routes.get("/products/:id", ProductController.byId);
routes.put("/products/:id", ProductController.update);
routes.delete("/products", ProductController.delete);


module.exports = routes;