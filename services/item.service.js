const Item = require('../models/item.model')


async function findOne(property) {
    try {
        const result = await Item.findOne({ name: property })
        return result
    } catch(error){
        return false
    }
    
}

async function findOneandUpdate(filter, property) {
    try {
        const updatedItem = await Item.findOneAndUpdate(
            {
                name: filter
            },
            {
                quantity: property
            },
            {
                new: true
            }
        )

        return updatedItem
    } catch (error) {
        return false
    }
}

async function findOneandDelete(property) {
    try {
        const deletedItem = await Item.findOneAndDelete({name: property})
        return deletedItem
    } catch (error) {
        return false
    }
}

module.exports = {
    findOne,
    findOneandUpdate,
    findOneandDelete
}