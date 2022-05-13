const mongoose = require('mongoose')

const shipmentSchema = new mongoose.Schema({
    shipmentNumber: {
        type: String,
        required: true
    },
    items: [
        {
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    status: {
        type: String,
        default: 'Sent'
    },
    deliveryAddress: {
        type: String,
        required: true
    }
},
{
    timestamps:true
})

shipmentSchema.methods.toJSON = function () {
    const shipment = this
    const shipmentObject = shipment.toObject()

    delete shipmentObject._id
    delete shipmentObject.createdAt
    delete shipmentObject.updatedAt
    delete shipmentObject.__v

    return shipmentObject
}

const shipmentModel = mongoose.model('shipment', shipmentSchema)

module.exports = shipmentModel