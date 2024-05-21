const express = require("express");
const { browse } = require("../../../controllers/programActions");

const router = express.Router();

router.get("/", browse);

module.exports = router;
