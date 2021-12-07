const express = require("express");
const catalogoFilmesController = require("../controllers/catalogoFilmes.controller.js")
const routes = express.Router();

routes.post("/catalogo-filmes", catalogoFilmesController.create);
routes.get("/catalogo-filmes/:id", catalogoFilmesController.getById);
routes.get("/catalogo-filmes", catalogoFilmesController.getAll);
routes.delete("/catalogo-filmes/:id", catalogoFilmesController.deleteById);
routes.put("/catalogo-filmes/:id", catalogoFilmesController.alterById);

module.exports = routes;