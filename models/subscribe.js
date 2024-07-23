const { type } = require('express/lib/response');
const { Schema, model} = require ('mongoose');

const userSchema = Schema({
    email:{
        type: String,
        require:true,
        unique: true,
    }
})

module.exports = model('User', userSchema)