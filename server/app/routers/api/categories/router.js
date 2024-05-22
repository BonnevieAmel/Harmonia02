const express = require("express");

const router = express.Router();

const { getCategories } = require("../../../controllers/categoryActions");

router.get("/", getCategories);

/* ************************************************************************* */

module.exports = router;
