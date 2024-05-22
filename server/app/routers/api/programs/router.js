const express = require("express");
const { browse, read } = require("../../../controllers/programActions");

const router = express.Router();

router.get("/", browse);
router.get("/:id", read);

module.exports = router;
