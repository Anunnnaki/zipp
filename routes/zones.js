const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const zoneCtrl = require("../controllers/zones")
const { validatorCreateZone, validatorGetZone } = require("../validator/zones")
/**
 *  List all zones
 */
router.get("/zones", authMiddleware, checkRol(["user"]), zoneCtrl.getZones)
//router.get("/cuvis", authMiddleware, ZoneCtrl.getZones)

/**
 * create one zone
 */
router.post("/", authMiddleware, checkRol(["user"]), validatorCreateZone,  zoneCtrl.createZone)

/**
 * get detail zone
 */
 router.get("/zone/:id", zoneCtrl.getZone)

/**
 * update one zone
 */ 
 router.put("/zone/:id", zoneCtrl.updateZone)
/**
 * delete one zone
 */
 router.delete("/zone/:id", zoneCtrl.deleteZone)



module.exports = router