const Item = require('../models/item.model')
const itemServices = require('../services/item.service')

async function listAllItems(req, res) {
    try {
        const items = await Item.find()
        res.send({
            items
        })
    } catch (error) {
        res.status(500).send('Items Could not be Listed!')
    }
}

module.exports = listAllItems