const express = require("express");

const router = express.Router();

const {
  getCategories,
  findById,
} = require("../../../controllers/categoryActions");

router.get("/", getCategories);
router.get("/:id", findById);

/* ************************************************************************* */

module.exports = router;
