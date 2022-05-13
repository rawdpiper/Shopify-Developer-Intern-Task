const itemServices = require('../services/item.service')

async function editItem(req, res) {
    try {
        const operation = req.body.operation
        const itemName = req.body.name
        const itemQuantity = req.body.quantity
        let newQuantity = 0

        const item = await itemServices.findOne(itemName)
        if (!item) {
            return res.status(404).send('Item Does Not Exist In The Inventory!')
        }

        if (operation == 'increase') {
            newQuantity = item.quantity + itemQuantity
        }
        else if (operation == 'decrease') {
            newQuantity = item.quantity - itemQuantity

            if (newQuantity < 0) {
                return res.status(400).send('Quantity Currently in Stock not Sufficient!')
            }
        }

        const updatedItem = await itemServices.findOneandUpdate(itemName, newQuantity)

        res.send({
            item: updatedItem,
            message: 'Item Updated!'
        })

    } catch (error) {
        res.status(500).send({
            name: item.name,
            message: 'Item Could not be deleted'
        })
    }
}

module.exports = editItem