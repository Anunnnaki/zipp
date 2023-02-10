const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator create zone
 */

console.log("validateResults")
const validatorCreateZone = [
    
check("nameZone").exists().notEmpty().isLength({min:1, max:90}),
check("id_User"),
check("gps"),
check("valor").exists().notEmpty().isLength({min:1, max:90}),
check("tipo").exists().notEmpty().isLength({min:1, max:90}),
check("dispo").exists().notEmpty().isLength({min:1, max:90}),
check("photoZone"),
check("photoZone"),

//check("estado").exists().notEmpty().isLength({min:1, max:90}),


(req, res, next) => {
return validateResults(req, res, next)
}

]


/**
 * Validator get zone
 */

 const validatorGetZone = [
    
    check("nameZone").exists().notEmpty().isLength({min:6, max:90}),
    check("id_User").exists().notEmpty().isLength({min:6, max:90}),
    check("gps").exists().notEmpty().isLength({min:6, max:90}),
    check("valor").exists().notEmpty().isLength({min:3, max:10}),
    check("tipo").exists().notEmpty().isLength({min:6, max:90}),
    check("dispo").exists().notEmpty().isLength({min:6, max:90}),
    check("estado").exists().notEmpty(),
    check("photoZone"),

    (req, res, next) => {
    return validateResults(req, res, next)
    }
    
    ]
module.exports = {validatorCreateZone, validatorGetZone}