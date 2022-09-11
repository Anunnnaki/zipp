const express = require('express');
const fs = require("fs");  //libreria con funciones para crear bitacora de errores

const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();

const app = express();



// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
//console.log(process.env.TOKEN_SECRET)

// Conexión a Base de datos
//const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ncdk5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const uri = "mongodb+srv://zippuserbd:S8s23XNsq7PaiLjS@cluster0.y6gqako.mongodb.net/?retryWrites=true&w=majority";

const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))


// import routes
const authRoutes = require('./routes/auth')
const verifyToken = require('./routes/validate-token');
//const admin = require('./routes/admin')
const zones = require('./routes/zones')

// route middlewares
app.use('/api/user', authRoutes); 
//app.use('/api/admin', verifyToken, admin);
app.use('/api/zones', verifyToken, zones);


// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})