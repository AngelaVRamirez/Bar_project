const { Schema, model} = require ('mongoose');

const fileSchema = Schema({
    nombreCompleto: {
        type: String,
        require: true,
        unique: false
    },
    Telefono: {
        type: Number,
        require: true,
        unique: false
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    data:{
        type: Object,
        require: true
    }
})

module.exports = model('File',fileSchema)