const Reservation  = require('./../models/Reserve')
const { request, response } = require('express')


const createReservation = async (req,res) => {
    const {name,date,email} = req.body;
    try {
    const reservationUser = new Reservation ({
        name:name,
        date:date,
        email:email
    })
    if (reservationUser) {
    return res.status (200).json({
        ok:true,
        msg: 'Haz reservado de manera exitosa'
    })
    }
    return res.status (400).json ({
    ok: false,
    msg: `La reserva para esta fecha ${date} no esta disponible`
    })
}
catch(error) {
    return res.status(500).json({ 
    ok:false,
    msg:'Please contact to support'
    })
}}

module.exports = {
    createReservation
}
    
