const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type:String,
            select: false
        },
        role: {
            type: ["admin", "user", "owneruser"],
            default: "user"
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("users", UserScheme)