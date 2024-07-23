const Reserve= require('./../models/Reserve')
const { request, response } = require('express')


const createReserve = async (req = request,res = response) => {
    const {date} = req.body;
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
            date:date
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

module.exports = {
    createReserve

}
