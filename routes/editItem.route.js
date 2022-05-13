const express = require("express");
const router = express.Router()
const editItem = require('../controllers/editItem.controller')

router.post("/edit-item", editItem)


module.exports = router