const Item = require('../models/item.model')
const itemServices = require('../services/item.service')

async function Create(req, res) {
    try {
        const { name, quantity } = req.body
        const itemExists = await itemServices.findOne(name)
    
        if (!itemExists) {
            const item = new Item({
                name,
                quantity
            })
    
            await item.save()

            return res.status(201).send({
                name,
                message: 'Item Added to Inventory!'
            })
        }
        res.status(409).send('Item Already Exists in Inventory!')
    } catch (error){
        res.status(500).send({
            name: req.body.name,
            message: 'Item Could not be Created!'
        })
    }

}

module.exports = Create