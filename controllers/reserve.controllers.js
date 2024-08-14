const Reservation  = require('./../models/Reserve')
const { request, response } = require('express')

const createReservation = async (req,res) => {
    try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    return res.status (200).json ({
    ok: true,
    msg: 'Reservado'
    })
} catch(error) {
    return res.status(400).json({ 
    ok:false,
    msg:'Please contact to support'
    });
}
}

module.exports = {
    createReservation
}
    
