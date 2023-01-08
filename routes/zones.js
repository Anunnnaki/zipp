const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const zoneCtrl = require("../controllers/zones")
const { validatorCreateZone, validatorGetZone } = require("../validator/zones")
/**
 *  List all zones
 */
router.get("/", authMiddleware, checkRol(["user"]), zoneCtrl.getZones)
//router.get("/cuvis", authMiddleware, ZoneCtrl.getZones)

/**
 * create one zone
 */
router.post("/", authMiddleware, checkRol(["user"]), validatorCreateZone,  zoneCtrl.createZone)

/**
 * get detail zone
 */
 router.get("/:id", zoneCtrl.getZone)

/**
 * update one zone
 */ 
 router.put("/:id", zoneCtrl.updateZone)
/**
 * delete one zone
 */
 router.delete("/:id", zoneCtrl.deleteZone)



module.exports = router