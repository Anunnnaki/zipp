const Zone = require("../models/zone")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")

/**
 * get ZONE
 * @param {*} req 
 * @param {*} res 
 */
const getZones = async (req, res) => {
    try{
      //const user = req.res
      
        const zones = await Zone.find()
          res.json(zones)
         // res.send({ data, user})
    }catch(e){
        //res.send({data})
        handleHttpError(res, 'Error_get_zones')
    }
    
}

/**
 * Get detail zone
 */

const getZone = async (req, res) => {
  try{
    //req = matchedData(req)
    //const {id} = req.params.id
    const id = req.params.id
    console.log(id)
    const data = await Zone.findById(id)
    res.send({ data })
  }catch(e){
    handleHttpError(res, "ERROR_GET_ZONE")
  }
}



/**
 * create zone
 * @param {*} req 
 * @param {*} res 
 */
const createZone = async (req, res) => {
    try {
     // const { user } = req;
      console.log("user _id: ", req.user._id)
//console.log(req.user)
   req.body.id_User = req.user._id //capture the _id user and push in to the zone new
      //req.body.estado = true
     // console.log("body: ", req.heathers)
        const body = matchedData(req)


        const data = await Zone.create(body)

 /*
        const newZone = new Zonebody)
        const data = await newZone.save()
   */   
        res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_CREATE_ITEMS");
      }
    
}

/**
 * Update zone
 * @param {*} req 
 * @param {*} res 
 */
 const updateZone = async (req, res) => {
    try {
      const bodyclean = req.body
      //console.log ("bodyclean" + req.body, "matched" + matchedData({bodyclean}))
      const id = req.params.id
      //const { id2, ...body2 } = matchedData(req)
      //  console.log(id2, body2)
      const data = await Zone.findByIdAndUpdate(id, bodyclean)
      
        res.status(201);
        res.send({ data});
      } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
      }
    
}


const deleteZone = async (req, res) => {
  try{
    //req = matchedData(req)
    //const {id} = req.params.id
    const id = req.params.id
    console.log(id)
    const data = await Zone.findByIdAndDelete(id)
    res.send({ data })
  }catch(e){
    handleHttpError(res, "ERROR_DELETE_ZONE")
  }
}


module.exports = {getZone, getZones, createZone, updateZone, deleteZone}