const express = require("express")
const app = express()
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/error');

//Import Routes
const connectDB = require("./db")
const authRoutes = require('./routes/auth');
const zoneRoutes = require('./routes/zones');


 //Connecting the Database
 connectDB()


//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    limit: '100mb',
    extended: true
    }));
app.use(cookieParser())
app.use(cors())
app.use(express.json())
//Routes Middleware
app.use("/api", authRoutes)
app.use("/api/zones", zoneRoutes)

const PORT = process.env.PORT || 3001

const server = app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

// Handling Error
process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
  })

  //ERROR MIDDLEWARE
 app.use(errorHandler);
 

