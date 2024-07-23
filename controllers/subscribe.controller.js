/*const { param } = require('../routes/subscribe.routes');*/
const User= require('./../models/subscribe')
const {request,response} = require('express')

const createUser = async(req=request,res=response) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email:email})
        if(user) return res.status(400).json({
            ok: false,
            msg: `${email} tu correo ya esta inscrito`
        })
        return res.status(201).json({
        ok: true,
        msg: `User: ${email} Felicidades ya haces parte de la tribuna!!`
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support'
        })
    } 
}
const getAllSubscribe = async(req,res) =>{
    try{
        const users = await User.find()
        return res.status(200).json({
            OK:true,
            users: users
        })
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support'
        })
    }
}

module.exports = {
    createUser,
    getAllSubscribe
}