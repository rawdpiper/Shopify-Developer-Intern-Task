const express = require("express");
const router = express.Router()
const deleteItem = require('../controllers/deleteItem.controller')

router.post("/delete-item", deleteItem)


module.exports = router