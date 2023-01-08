const express = require("express")
const cors = require ("cors")
require('dotenv').config()


const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

/**
 * ROUTES
 * 
 */
//Import Routes
const dbConnect = require("./config/mongo")
const zoneRoutes = require("./routes/zones")
const authRoutes = require("./routes/auth")


//Middleware
app.use("/api/zones", zoneRoutes)
app.use("/api/user", authRoutes)

app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})

dbConnect()

