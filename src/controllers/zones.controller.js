const zonesCtrl = {}
const { matchedData } = require('express-validator');
const Zone = require('../model/Zone');
const handleHttpError = require('../utils/handleErrors');
require('dotenv').config();


/* Obtener todas las zonas */
zonesCtrl.getZones = async (req,res) => {
    try{
        const zones = await Zone.find()
          res.json(zones)
    }catch(e){
        handleHttpError(res, 'Error_get_zones')
    }

    
}
/* Crear zona */
zonesCtrl.createZone = async (req,res) => {
    try{
        //req.body.id_User = req.user.id //capture the _id user and push in to the zone new
        //req.body.estado = true
        const body = matchedData(req)//Limpia la data que envia el frontend
        console.log(body)
        console.log(req.body)
/**** verificar que tiene el body para guardar en la base */

    const payload = matchedData(req)//req.body
    const newZone = new Zone(payload)
    //const data = await newZone.save()
    //res.send({data})

    }catch(e){
        handleHttpError(res, 'Error_create_zones')
    }
    
}
/* Obtener una zona */
zonesCtrl.getZone = async (req,res) => {
    const id = req.params.id
    const zone = await Zone.findById(id)
    res.send(zone)

}
/* Update zone */
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

/* Obtener zonas de un usuario */
zonesCtrl.getZonesUser = async (req,res) => {
    
    const id_User = req.user.id //capture the _id user
    const zones = await Zone.find({"id_User": id_User})
    
    res.json(zones)
}

module.exports = zonesCtrl