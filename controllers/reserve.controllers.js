const Reservation  = require('./../models/Reserve')
const { request, response } = require('express')

<<<<<<< HEAD
const createReservation = async (req,res) => {
    try {
    const reservation = new Reservation(req,body);
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
=======
const createReserve = async (req = request,res = response) => {
    const {date} = req.body;

const createReserve = async (req=request,res=response) => {
    const {dbdate} = req.body;
    try {
    /* const date = await Reserve.toLocaleDateString({dbdate});*/
        if(!date)return res.status(400).json({
        ok:false,
        msg:'the date is mandatory'
        })   
        if (!moment(date, 'YYYY-MM-DD', true).isValid(Reserve)) {
            return res.status(401).json({
            ok:false,
            msg:'Invalid date format. Use YYYY-MM-DD' })  
}
        const dbDate = new Reserve({
            nombre:nombre,
            apellido:apellido,
            tamanodeGrupo:tamanodeGrupo,
            email:email,
            date:date,
            msg:'the date is mandatory'
        })       
        const jsonArray = await Date(dbdate).toLocaleDateString({})
        if (jsonArray)
        return res.status(201).json({
            ok:true,
            msg: `Listo!! Ya reservaste en la Tribuna - Bienvenida!!!`
        })
        await dbDate.save()
        return res.status (201).json ({ 
            ok:true,
            msg: 'Perfecto!!Ya reservaste en la Tribuna - Bienvenid@!!!'  
        })

        } catch(error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Please contact to support'
        })
    }
}
>>>>>>> 98768aa9b828293d96151e3d6de39388fc8f0d28
}
};

module.exports = {
    createReservation
}
    
