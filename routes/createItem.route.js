const express = require("express");
const router = express.Router()
const createItem = require('../controllers/createItem.controller')


router.post("/create-item", createItem)


module.exports = router