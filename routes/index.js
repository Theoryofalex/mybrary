const express = require('express')
const router = express.Router()

router.get('/', (req, res) => { // creating our root
    res.render('index')
})


module.exports = router