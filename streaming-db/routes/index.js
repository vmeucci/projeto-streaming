const express = require("express");
const router = express.Router();

router.use(require("./catalogoSeries.route.js"));
router.use(require("./catalogoFilmes.route.js"));
router.use(require("./categorias.route.js"));


module.exports = router;