const express = require("express")
const { matchedData } = require("express-validator")
const router = express.Router()
const { validatorRegisterUser, validatorLogin } = require("../validator/auth")
const { loginCtrl, registerCtrl } =  require("../controllers/auth")
/**
 * create one USER
 */
router.post("/signin", validatorRegisterUser, registerCtrl)
router.post("/signup", validatorLogin, loginCtrl)


module.exports = router
