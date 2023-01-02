const express = require("express")
const router = express.Router()
const zonesCtrl = require('../controllers/zones.controller')
const { validatorcreateZone } =require('../validator/zones') 

router.get('/', zonesCtrl.getZones) // get all zones
router.post('/', validatorcreateZone, zonesCtrl.createZone) // crate one zone
router.get('/:id', zonesCtrl.getZone) // get one zone by id
router.put('/:id', zonesCtrl.updateZone)
router.delete('/:id', zonesCtrl.deleteZone)
router.get('/zonesuser/:id', zonesCtrl.getZonesUser) //get user zones by id_User


module.exports = router