const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.render('home', {css:'home.css'})
})

module.exports = router