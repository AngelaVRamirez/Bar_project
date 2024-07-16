const { Schema, model } = require('mongoose');

const userSchema = Schema({
    NombreyApellido: {
        type: String,
        require: true,
        unique: false
    },
    TamanodeGrupo: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    Fecha: {
        type: Date,
        require: true
    }
})

module.exports = model('Reserve', userSchema)