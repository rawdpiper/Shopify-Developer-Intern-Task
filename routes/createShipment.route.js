const express = require("express");
const router = express.Router()
const createShipment = require('../controllers/createShipment.controller')

router.post("/create-shipment", createShipment)


module.exports = router