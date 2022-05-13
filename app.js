const express = require('express')
const editItem = require('./controllers/editItem.controller')

const createItemRoute = require('./routes/createItem.route')
const listAllRoute = require('./routes/listAll.route')
const editItemRoute = require('./routes/editItem.route')
const deleteItemRoute = require('./routes/deleteItem.route')
const createShipmentRoute = require('./routes/createShipment.route')

const app = express()

app.use(express.json())

app.use('/api', createItemRoute)
app.use('/api', listAllRoute)
app.use('/api', editItemRoute)
app.use('/api', deleteItemRoute)
app.use('/api', createShipmentRoute)

module.exports = app