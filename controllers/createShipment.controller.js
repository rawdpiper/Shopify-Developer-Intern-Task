const createShipmentService = require('../services/createShipment.service')

async function createShipment(req, res) {
    try {
        const shipmentNumber = Math.floor(Date.now() * Math.random())
        const items = req.body.items
        const deliveryAddress = req.body.address

        const shipment = await createShipmentService.createShipment(shipmentNumber, items, deliveryAddress)
        await createShipmentService.updateInventory(items)

        res.status(201).send({
            message: 'Shipment Created',
            shipment
        })
    } catch(error) {
        console.log(error)
        res.status(400).send('Shipment could not be Created!')
    }
}

module.exports = createShipment