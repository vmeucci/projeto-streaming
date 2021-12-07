const express = require("express");
const { response } = require("express");
const { request } = require("http");
const model = require("./models");
const cors = require("cors");
const routesSeries = require("./routes/catalogoSeries.route.js");
const routesFilmes = require("./routes/catalogoFilmes.route.js");
const routesCategorias = require("./routes/categorias.route.js");
const routesEnderecos = require("./routes/enderecos.route.js");
 


const app = express();

app.use(express.json());
app.use("", routesSeries);
app.use("", routesFilmes);
app.use("", routesCategorias);
app.use("", routesEnderecos);
app.use(cors());



app.listen(8080, (request, response) => {
    console.log("Server online!");
});