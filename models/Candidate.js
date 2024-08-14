const { Schema, model} = require ('mongoose');

const candidateSchema = Schema({
    NombreCompleto: {
        type: String,
        require: true,
        unique: false
    },
    Telefono: {
        type: Number,
        require: true,
        unique: false
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Cv:{
        type: Object,
        require: true
    }
})

module.exports = model('candidate',candidateSchema)