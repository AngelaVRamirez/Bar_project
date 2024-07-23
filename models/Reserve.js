const { Schema, model } = require('mongoose','moment');

const reserveSchema = Schema({
    nombre: {
        type: String,
        require: true,
        unique: false
    },
    apellido: {
        type: String,
        require: true,
        unique: false
    },
    tamanodeGrupo: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    date:{
        type: Date,
        require: true
    }
})

module.exports = model('Reserve', reserveSchema)