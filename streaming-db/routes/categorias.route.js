const express = require("express");
const categoriaController = require("../controllers/categoria.controller.js")
const routes = express.Router();

routes.post("/categorias", categoriaController.create);
routes.get("/categorias/:id", categoriaController.getById);
routes.get("/categorias", categoriaController.getAll);
routes.delete("/categorias/:id", categoriaController.deleteById);
routes.put("/categorias/:id", categoriaController.alterById);


module.exports = routes;