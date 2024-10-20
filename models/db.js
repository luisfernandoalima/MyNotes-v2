const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    conteudo: {
        type: String,
        required: true
    }
})

mongoose.model("posts", PostSchema)