const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

//cors
app.use(cors())

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


/*
const uri = "mongodb+srv://zippuserbd:S8s23XNsq7PaiLjS@cluster0.y6gqako.mongodb.net/?retryWrites=true&w=majority";
const opcion = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri,opcion)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))
*/
// import routes
const authRoutes = require('./routes/auth')
// route middlewares
app.use('/api/user', authRoutes); 


/*
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});
*/

// iniciar server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})