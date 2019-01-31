const express = require("express");
const router = express.Router();

const enc_table_controller = require("../controllers/encTable.controller");
router.get("/test", enc_table_controller.test);

module.exports = router;
