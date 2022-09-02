const {Schema, model}= require('mongoose')

const zoneSchema = new Schema(
    {
        nameZone: {type: String, required: true}, 
        addressZone: {type: String, required: true}, 
        id_User: {type: String, required: true}
    }, 
    {
        versionKey: false
    }
)

module.exports = model('Zone', zoneSchema)