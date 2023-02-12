const express = require("express")
const cors = require("cors")
const app = express()
require('dotenv').config()
const path = require("path")

app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 3001

/**
 * SWAGGER
 */
const swaggerUI = require("swagger-ui-express")
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node ZIPP API",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http//localhost:3001"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`

    ]
}
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
app.use("/api-doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})

dbConnect()

