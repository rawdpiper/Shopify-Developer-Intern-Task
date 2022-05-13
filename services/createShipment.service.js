const Shipment = require('../models/shipment.models')
const itemService = require('./item.service')

async function createShipment(shipmentNumber, items, deliveryAddress) {
    try {
        const shipment = new Shipment({shipmentNumber, items, deliveryAddress})
        const result = await shipment.save()
        return result
    } catch (error) {
        return false
    }
}

async function updateInventory(items) {
    try {
        for (let i = 0; i < items.length; i++) {
            const item = await itemService.findOne(items[i].name)
            const newQuantity = item.quantity - items[i].quantity
            await itemService.findOneandUpdate(items[i].name, newQuantity)
        }
    } catch(error) {
        return false
    }
}

module.exports = {
    createShipment,
    updateInventory
}