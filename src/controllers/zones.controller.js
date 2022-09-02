const zonesCtrl = {}
const Zone = require('../models/Zone')
require('dotenv').config();


/* Obtener todas las zonas */
zonesCtrl.getZones = async (req,res) => {
    const zones = await Zone.find()
    res.json(zones)
}
/* Crear zona */
zonesCtrl.createZone = async (req,res) => {
    req.body.id_User = req.user.id //capture the _id user and push in to the zone new
    
    const payload = req.body
    const newZone = new Zone(payload)
    await newZone.save()
    res.send({message: 'Zone created successfully'})

}
/* Obtener una zona */
zonesCtrl.getZone = async (req,res) => {
    const id = req.params.id
    const zone = await Zone.findById(id)
    res.send(zone)

}
/* Actualizar zona */
zonesCtrl.updateZone = async (req,res) => {
    const id = req.params.id
    const payload = req.body
    await Zone.findByIdAndUpdate(id, payload)
    res.send({message: 'Zone updated successfully'})
}
/* Eliminar zona */
zonesCtrl.deleteZone = async (req,res) => {
    const id = req.params.id
    await Zone.findByIdAndDelete(id)
    res.send({message: 'Zone deleted successfully'})
}

module.exports = zonesCtrl