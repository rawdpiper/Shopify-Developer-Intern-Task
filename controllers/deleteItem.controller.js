const itemServices = require('../services/item.service')

async function deleteItem(req, res) {
    try {
        const itemName = req.body.name
        const item = await itemServices.findOne(itemName)
        if (!item) {
            return res.status(404).send('Item Does Not Exist In The Inventory!')
        }

        await itemServices.findOneandDelete(itemName)

        res.send({
            name: item.name,
            message: 'Item has been Deleted from the Inventory!'
        })

    } catch (error) {
        res.status(500).send('Item Could not be deleted')
    }
}

module.exports = deleteItem