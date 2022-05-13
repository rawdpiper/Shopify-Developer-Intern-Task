const express = require("express");
const router = express.Router()
const listAllItems = require('../controllers/listAll.controller')


router.get("/list-all-items", listAllItems)


module.exports = router