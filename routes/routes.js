const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/db')
const Post = mongoose.model('posts')

router.get('/', (req, res)=>{
    Post.find().sort({_id:'desc'}).then((post) => {
        res.render('home', {css:'home.css', post:post})
    }).catch((err)=>{
        console.log(err)
    })

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

router.get("/delete/:id", (req, res) => {
    Post.deleteOne({_id: req.params.id}).then(()=> {
        console.log("Deletado com sucesso!")
        res.redirect('/')
    })
})

module.exports = router