const {chech, check} = require("express-validator")
const validateResult = require("../utils/handleValidator")

const validatorcreateZone = [
    check("nameZone")
    .exists()
    .notEmpty()
    .isLength({min:6, max: 255}),
    check("gps.latitud")
    .exists(), 
    check("gps.longitud")
    .exists(),
    (req, res, next) => {
        return validateResult(req, res, next)
    }
    

]

module.exports = {validatorcreateZone}