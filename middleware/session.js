const { handleHttpError } = require("../utils/handleError")
const { verifyToken } = require("../utils/handleJwt")
const  usersModel  = require("../models/users")

const authMiddleware = async (req, res, next) => {
      
    try{         
        if( !req.headers.authorization ) {
            handleHttpError(res, "NOT_TOKEN", 401)
            return
        }
          
       const token = req.headers.authorization.split(' ').pop()
       const dataToken = await verifyToken(token)

        if(!dataToken._id){
            handleHttpError(res, "ERROR:_ID_TOKEN", 401)
            return
        }
//////////////////////////////////////////////////
//console.log(req.user)

       const user = await  usersModel.findById(dataToken._id)
       req.user = user
       req.body.id_User = req.user._id
       //console.log(user)

       
  
       next()     
    }catch(e){
        //console.log(e)
        handleHttpError(res, "NOT_SESSION", 401)
        return
    }
}

module.exports = authMiddleware