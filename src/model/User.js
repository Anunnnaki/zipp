const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
require('dotenv').config()

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required : [true, 'Please add a Name'],
        min: 6,
        max: 255
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please add a E-mail'],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ],
        min: 6,
        max: 1024
    },
    password: {
        type: String,
        required: [true, 'Please add a Password'],
        minlength: 6
    },
    role: {
        type: Number,//["user", "admin"]
        default: 0,//"user"
    }
    
   
}, {timestamps: true, versionKey: false})

// encrypting password before saving
UserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
 });
 
 
 
 // verify password
 UserSchema.methods.comparePassword = async function(yourPassword){
     return await bcrypt.compare(yourPassword, this.password);
 }
 
 // get the token
 UserSchema.methods.jwtGenerateToken = function(){
     return jwt.sign({id: this.id}, process.env.TOKEN_SECRET, {
         expiresIn: 3600
     });
 }
 
 
 module.exports = mongoose.model("User", UserSchema);