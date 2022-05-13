const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    }
},
{
    timestamps: true
})

itemSchema.methods.toJSON = function () {
    const item = this
    const itemObject = item.toObject()

    delete itemObject._id
    delete itemObject.createdAt
    delete itemObject.updatedAt
    delete itemObject.__v

    return itemObject
}

const itemModel = mongoose.model('Item', itemSchema)

module.exports = itemModel