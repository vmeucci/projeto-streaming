const express = require("express");
const catalogoSeriesController = require("../controllers/catalogoSeries.controller.js")
const routes = express.Router();

routes.post("/catalogo-series", catalogoSeriesController.create);
routes.get("/catalogo-series/:id", catalogoSeriesController.getById);
routes.get("/catalogo-series", catalogoSeriesController.getAll);
routes.delete("/catalogo-series/:id", catalogoSeriesController.deleteById);
routes.put("/catalogo-series/:id", catalogoSeriesController.alterById);

module.exports = routes;