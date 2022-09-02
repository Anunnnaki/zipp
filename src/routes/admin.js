const router = require('express').Router();
require('dotenv').config();


//process.env.ID_USER= req.user.id
//console.log (process.env.ID_USER)

router.get('/', (req, res) => {
    process.env.ID_USER= req.user.id
console.log (process.env.ID_USER)
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user.id
        }
    })
})

module.exports = router