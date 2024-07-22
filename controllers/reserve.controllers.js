const Reserve= require('./../models/Reserve')
const { request, response } = require('express')

const createReserve = async (req=request,res=response) => {
    const {dbdate} = req.body;
    try {
        if(!dbdate)return res.status(400).json({
            ok:false,
            msg:'the date is mandatory'
        })       
        const jsonArray = await Date(dbdate).toLocaleDateString({})
        if (jsonArray)
        return res.status(201).json({
            ok:true,
            msg: `Listo!! Ya reservaste en la Tribuna - Bienvenida!!!`
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