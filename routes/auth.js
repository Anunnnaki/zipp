const express = require("express")
const { matchedData } = require("express-validator")
const router = express.Router()
const { validatorRegisterUser, validatorLogin } = require("../validator/auth")
const { loginCtrl, registerCtrl } =  require("../controllers/auth")
/**
 * create one USER
 */
router.post("/register", validatorRegisterUser, registerCtrl)
router.post("/login", validatorLogin, loginCtrl)


module.exports = router
