const {Router} = require('express')
const router = Router()
const zonesCtrl = require('../controllers/zones.controller')

router.get('/', zonesCtrl.getZones)
router.post('/', zonesCtrl.createZone)
router.get('/:id', zonesCtrl.getZone)
router.put('/:id', zonesCtrl.updateZone)
router.delete('/:id', zonesCtrl.deleteZone)

module.exports = router