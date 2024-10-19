const db = require('./db')

const Postagem = db.sequelize.define('postagem',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Postagem