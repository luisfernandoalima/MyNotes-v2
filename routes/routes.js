const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/db')
const Post = mongoose.model('posts')

router.get('/', (req, res)=>{
    res.render('home', {css:'home.css'})
})

router.get('/cad', (req, res) => {
    res.render('formCadastro', {css: 'cad.css'})
})

router.post('/cad/add', (req, res) => {
    new Post({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).save()
    res.redirect('/')
})

module.exports = router