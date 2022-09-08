const {Schema, model}= require('mongoose')

const zoneSchema = new Schema(
    {
        nameZone: {type: String, required: true}, 
        addressZone: {type: String, required: true}, 
        id_User: {type: String, required: true},
        gps: {type: String, required: true}, //longitude, latitude
        valor: {type: Number, required: true},
        tipo: {type: String, required: true}, //car, motocicle, bicycle, scooter
        dispo: {type: String, required: true}, //hour, day, week, month
        estado: {type: Boolean, required: true}, //true, false
        recaudo: {type: Number} 

    }, 
    {
        versionKey: false
    }
)

module.exports = model('Zone', zoneSchema)