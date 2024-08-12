/*const { param } = require('../routes/subscribe.routes');*/
const Reserve= require('./../models/Reserve')
const {request,response} = require('express')
const bcrypt = require ('bcrypt')

const createReserve = async(req=request,res=response) => {
    const {date, email} = req.body;
    try {
        //Validación Email
        const user = await Reserve.findOne({email:email})
        if(user) return res.status(400).json({
            ok: false,
            msg: `${email} tu correo ya tiene reserva`
        })

        const validateReserveDate = bcrypt.compareSync(date,user.date)
        if (!validateReserveDate) return res.status(400).json ({
         ok:false,
         msg:'Ya existe un reserva con este correo'
        })

        return res.status(201).json({
        ok: true,
        msg: `User: ${date} Felicidades ya realizaste la tribuna!!`
        })
        
        //Validación Fecha
    
    } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support'
        })
    } 
}
module.exports = {
    createReserve
}